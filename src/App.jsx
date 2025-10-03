import React from "react";
import PageWrapper from "./components/layout/PageWrapper";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import ResultSummary from "./components/results/ResultSummary";
import ResultsPage from "./pages/ResultsPage";
import { GameProvider } from "./context/GameContext";

function App() {
  return (
    <GameProvider>
      <PageWrapper>
        <GamePage />
        {/* <StartPage /> */}
      </PageWrapper>
    </GameProvider>
  );
}

export default App;
