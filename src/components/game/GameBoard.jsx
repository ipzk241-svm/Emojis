import React from "react";
import "../../styles/App.css";
import EmojiCard from "./EmojiCard";

const GameBoard = ({ cards, onCardClick }) => {
  return (
    <div className="game-board">
      {cards.map((card, index) => (
        <EmojiCard
          key={card.id}
          emoji={card.emoji}
          isFlipped={card.isFlipped}
          onClick={() => onCardClick(card.id)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
