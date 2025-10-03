import React from "react";
import "../../styles/App.css";

const EmojiCard = ({ emoji, isFlipped, onClick }) => {
  return (
    <div
      className={`game-card ${isFlipped ? "flipped" : ""}`}
      onClick={onClick}
    >
      {isFlipped ? emoji : "?"}
    </div>
  );
};

export default EmojiCard;
