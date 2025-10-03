import React from "react";
import "../../styles/App.css";

const EmojiCard = ({ emoji, onClick }) => {
  return (
    <div>
      <div className="game-card" onClick={onClick}>
        {emoji.symbol}
      </div>
    </div>
  );
};

export default EmojiCard;
