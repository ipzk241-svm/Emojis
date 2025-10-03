import { useEffect, useState } from "react";
import GameBoard from "../components/game/GameBoard";
import GameStats from "../components/game/GameStats";
import useGameLogic from "../hooks/UseGameLogic";
import Timer from "../components/game/Timer";

const GamePage = () => {
  const { cards, flipCard, moves, isGameOver, startGame } =
    useGameLogic("easy");
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [time, setTime] = useState(0);
  console.log(cards);

  useEffect(() => {
    setMatchedPairs(cards.filter((card) => card.isMatched).length / 2);
  }, [cards]);

  const handleTimeUpdate = (seconds) => {
    setTime(seconds);
  };

  const handleRestart = () => {
    startGame();
    setTime(0);
  };

  const formatTime = () => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min.toString().padStart(2, "0")}:${sec
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="game-page">
      {isGameOver ? (
        <div className="game-result">
          <h2>Гру завершено 🎉</h2>
          <p>Ходи: {moves}</p>
          <p>Пари: {matchedPairs}</p>
          <p>Час: {formatTime()}</p>
          <button onClick={handleRestart}>Нова гра</button>
        </div>
      ) : (
        <>
          <GameStats
            moves={moves}
            matchedPairs={matchedPairs}
            time={
              <Timer isActive={!isGameOver} onTimeUpdate={handleTimeUpdate} />
            }
          />
          <GameBoard cards={cards} onCardClick={flipCard} />
        </>
      )}
    </div>
  );
};

export default GamePage;
