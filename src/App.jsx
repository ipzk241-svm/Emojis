import React from "react";
import PageWrapper from "./components/layout/PageWrapper";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <PageWrapper>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </PageWrapper>
    </Router>
  );
}

export default App;
