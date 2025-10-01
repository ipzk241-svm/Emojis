import React from "react";
import "../../styles/App.css";
import EmojiCard from "./EmojiCard";

const emojis = [
  { id: 1, symbol: "😀" },
  { id: 2, symbol: "😎" },
  { id: 3, symbol: "🥳" },
  { id: 4, symbol: "👾" },
  { id: 5, symbol: "🚀" },
  { id: 6, symbol: "🌟" },
  { id: 7, symbol: "🪐" },
  { id: 8, symbol: "👽" },
];

const GameBoard = ({ boardSize, onCardClick }) => {
  const cards = [...emojis, ...emojis];

  return (
    <div className="game-board">
      {cards.map((emoji, index) => (
        <EmojiCard
          key={emoji.id + Math.random()}
          emoji={emoji}
          onClick={() => onCardClick(index)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
