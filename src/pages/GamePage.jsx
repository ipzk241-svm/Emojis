import { useEffect, useState } from "react";
import GameBoard from "../components/game/GameBoard";
import GameStats from "../components/game/GameStats";
import useGameLogic from "../hooks/UseGameLogic";
import useTimer from "../hooks/useTimer";
import ResultSummary from "../components/results/ResultSummary";
import ResultActions from "../components/results/ResultActions";
import ModalWindow from "../components/ui/ModalWindow";

const GamePage = () => {
  const { cards, flipCard, moves, isGameOver, startGame } =
    useGameLogic("easy");
  const [matchedPairs, setMatchedPairs] = useState(0);
  const { formatTime, start, stop, reset } = useTimer();

  useEffect(() => {
    setMatchedPairs(cards.filter((card) => card.isMatched).length / 2);
  }, [cards]);

  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    if (isGameOver) stop();
  }, [isGameOver]);

  const handleRestart = () => {
    startGame();
    reset();
    start();
  };

  return (
    <div className="game-page">
      {isGameOver ? (
        <div className="game-result">
          <ModalWindow
            isOpen={isGameOver}
            onClose={handleRestart}
            Content={
              <>
                <ResultSummary
                  moves={moves}
                  difficulty={"easy"}
                  time={formatTime()}
                  onRestart={handleRestart}
                />
                <ResultActions onRestart={handleRestart} />
              </>
            }
          />
        </div>
      ) : (
        <>
          <GameStats
            moves={moves}
            time={formatTime()}
            matchedPairs={matchedPairs}
          />
          <GameBoard cards={cards} onCardClick={flipCard} />
        </>
      )}
    </div>
  );
};

export default GamePage;
