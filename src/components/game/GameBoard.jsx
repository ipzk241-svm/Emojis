import React from "react";
import "../../styles/App.css";
import EmojiCard from "./EmojiCard";
import { useWindowSize } from "../../hooks/useWindowSize";
import useGameLogic from "../../hooks/UseGameLogic";

const GameBoard = ({ cards, onCardClick }) => {
  const { cardSize } = useGameLogic();
  const { width } = useWindowSize();

  const numCards = cards.length;
  let optimalColumns = Math.min(
    Math.ceil(Math.sqrt(numCards)),
    Math.floor(width / (cardSize + 20))
  );
  optimalColumns = Math.max(2, optimalColumns);

  return (
    <div
      className="game-board"
      style={{
        gridTemplateColumns: `repeat(${optimalColumns}, minmax(0, 1fr))`,
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
