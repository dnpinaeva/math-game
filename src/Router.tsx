import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Root } from "./components/Root";
import Game from "./components/game/Game";
import { Container } from "react-bootstrap";
import HeaderNavigation from "./components/HeaderNavigation";

export const Router = () => {
  return (
    <Container>
      <BrowserRouter>
        <HeaderNavigation />
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};
