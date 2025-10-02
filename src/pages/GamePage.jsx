import React from "react";
import GameBoard from "../components/game/GameBoard";
import GameStats from "../components/game/GameStats";
import "../styles/App.css";

const GamePage = () => {
  return (
    <div className="game-page">
      <GameStats />
      <GameBoard />
    </div>
  );
};

export default GamePage;
