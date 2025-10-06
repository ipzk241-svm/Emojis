import React from "react";
import PageWrapper from "./components/layout/PageWrapper";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import { GameProvider } from "./context/GameContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <GameProvider>
      <Router>
        <PageWrapper>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/game" element={<GamePage />} />
          </Routes>
        </PageWrapper>
      </Router>
    </GameProvider>
  );
}

export default App;
