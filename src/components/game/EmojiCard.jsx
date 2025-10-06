import React from "react";
import "../../styles/App.css";
import useGameLogic from "../../hooks/UseGameLogic";

const EmojiCard = ({ emoji, isFlipped, onClick }) => {
  const { cardSize } = useGameLogic();

  return (
    <div
      className={`card-container ${isFlipped ? "flipped" : ""}`}
      onClick={!isFlipped ? onClick : undefined}
      style={{
        width: cardSize,
        height: cardSize,
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
