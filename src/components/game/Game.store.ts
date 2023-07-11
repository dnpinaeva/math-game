import { makeAutoObservable } from "mobx";

export enum ComputerType {
    RandomStrategy,
    StrongStrategy
}

interface IGameStore {
    //Спички в куче
    totalCount: number;
    //Предыдущий ход игрока
    prevStepUser: number;
    //Предыдущий ход компьютера
    prevStepComputer: number;
    //Текущий ход игрока
    currentStepUser: number;
    //Стратегия компьютера
    computerType: ComputerType;
    //Победитель
    winner: number;

    newGame: boolean;

}

class GameStore {
    game: IGameStore = {
        totalCount : 25,
        prevStepUser : 0,
        prevStepComputer : 0,
        currentStepUser : 0,
        computerType : ComputerType.StrongStrategy,
        winner : null,
        newGame: false
    }

    constructor() {
        makeAutoObservable(this);
    }

    public clearWinner(){
        this.game.winner = null;
    }

    public showNewGameDialog(){
        this.game.newGame = true;
    }

    public startGame(totalCount: number, computerType: ComputerType){
        this.game.totalCount = totalCount;
        this.game.prevStepUser = 0;
        this.game.prevStepComputer = 0;
        this.game.currentStepUser = 0;
        this.game.computerType = computerType;
        this.game.winner = null;
        this.game.newGame = false;

    }

    public nextStep(currentStepUser: number){
        if (this.game.totalCount - currentStepUser <= 0){
            this.game.winner = 1;
            this.game.totalCount = 0;
            return
        }
        this.game.totalCount -= currentStepUser;
        this.game.prevStepUser = currentStepUser;
        if (this.game.computerType == ComputerType.RandomStrategy){
            let step = Math.floor(Math.random() * 4) + 1;
            this.game.totalCount -= step;
            this.game.prevStepComputer = step;
            if (this.game.totalCount <= 0){
                this.game.winner = 2;
                this.game.totalCount = 0;
            }
        }
        else{
            let step = this.game.totalCount % 5 != 0 
                    ? this.game.totalCount % 5
                    : Math.floor(Math.random() * 4) + 1;
            this.game.totalCount -= step;
            this.game.prevStepComputer = step;
            if (this.game.totalCount <= 0){
                this.game.winner = 2;
                this.game.totalCount = 0;
            }
        }
    }
}

export const gameStore = new GameStore(); 