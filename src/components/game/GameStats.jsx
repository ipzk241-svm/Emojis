import React from "react";

const GameStats = ({ moves, time, matchedPairs }) => {
  return (
    <div className="game-stats">
      <p>
        Ходи: {moves} | Знайдено пар: {matchedPairs} | Час: {time}
      </p>
    </div>
  );
};

export default GameStats;
