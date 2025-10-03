import React from "react";
import "../../styles/App.css";
import EmojiCard from "./EmojiCard";
import { useGameSettings } from "../../context/GameContext";

const GameBoard = ({ cards, onCardClick }) => {
  const { settings } = useGameSettings();

  return (
    <div
      className="game-board"
      style={{
        gridTemplateColumns: `repeat(${Math.round(settings.pairs / 2)+1}, ${
          settings.cardSize
        }px)`,
      }}
    >
      {cards.map((card) => (
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
