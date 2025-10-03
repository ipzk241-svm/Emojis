import React from "react";
import "../../styles/App.css";
import { useGameSettings } from "../../context/GameContext";

const EmojiCard = ({ emoji, isFlipped, onClick }) => {
  const { settings } = useGameSettings();

  return (
    <div
      style={{
        width: settings.cardSize,
        height: settings.cardSize,
        fontSize: settings.cardSize * 0.6,
      }}
      className={`game-card ${isFlipped ? "flipped" : ""}`}
      onClick={onClick}
    >
      {isFlipped ? emoji : "?"}
    </div>
  );
};

export default EmojiCard;
