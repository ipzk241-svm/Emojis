import { useEffect, useState } from "react";
import GameBoard from "../components/game/GameBoard";
import GameStats from "../components/game/GameStats";
import useGameLogic from "../hooks/UseGameLogic";
import useTimer from "../hooks/useTimer";
import ResultSummary from "../components/results/ResultSummary";
import ResultActions from "../components/results/ResultActions";
import ModalWindow from "../components/ui/ModalWindow";
import { Link } from "react-router-dom";

const GamePage = () => {
  const { cards, flipCard, moves, isGameOver, startGame, loading } =
    useGameLogic("easy");
  const [matchedPairs, setMatchedPairs] = useState(0);
  const { formatTime, start, stop, reset } = useTimer();

  const [showResultModal, setShowResultModal] = useState(false);

  useEffect(() => {
    setMatchedPairs(cards.filter((card) => card.isMatched).length / 2);
  }, [cards]);

  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    if (isGameOver) {
      stop();
      setShowResultModal(true);
    }
  }, [isGameOver]);

  const handleRestart = () => {
    startGame();
    reset();
    start();
    setShowResultModal(false);
  };

  const handleClose = () => {
    setShowResultModal(false);
  };

  return (
    <div className="game-page">
      {loading ? (
        <div className="loader"></div>
      ) : (
        <>
          <div className="game-controls">
            {isGameOver && (
              <button className="button" onClick={handleRestart}>
                Нова гра
              </button>
            )}
            <Link to="/">
              <button className="button">Повернутися на головну</button>
            </Link>
          </div>
          <GameStats
            moves={moves}
            time={formatTime()}
            matchedPairs={matchedPairs}
          />
          <GameBoard cards={cards} onCardClick={flipCard} />
          <ModalWindow
            isOpen={showResultModal}
            onClose={handleClose}
            Content={
              <>
                <ResultSummary moves={moves} time={formatTime()} />
                <ResultActions onRestart={handleRestart} />
              </>
            }
          />
        </>
      )}
    </div>
  );
};

export default GamePage;
