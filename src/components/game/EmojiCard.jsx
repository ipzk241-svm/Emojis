import React from "react";
import "../../styles/App.css";
import { useGameSettings } from "../../context/GameContext";

const EmojiCard = ({ emoji, isFlipped, onClick }) => {
  const { settings } = useGameSettings();

  return (
    <div
      className={`card-container ${isFlipped ? "flipped" : ""}`}
      onClick={!isFlipped ? onClick : undefined}
      style={{
        width: settings.cardSize,
        height: settings.cardSize,
      }}
    >
      <div className="card-face card-front">?</div>

      <div className="card-face card-back">
        <span>{emoji}</span>
      </div>
    </div>
  );
};

export default EmojiCard;
