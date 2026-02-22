import { useEffect, useState } from "react";
import styles from "./GamePage.module.css";
import GameBoard from "../components/game/GameBoard";
import GameStats from "../components/game/GameStats";
import useGameLogic from "../hooks/UseGameLogic";
import useTimer from "../hooks/useTimer";
import ResultSummary from "../components/results/ResultSummary";
import ResultActions from "../components/results/ResultActions";
import ModalWindow from "../components/ui/ModalWindow";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetGameState } from "../slices/gameSlice";

const GamePage = () => {
  const { cards, flipCard, moves, isGameOver, startGame, loading } =
    useGameLogic("easy");
  const [matchedPairs, setMatchedPairs] = useState(0);
  const { formatTime, start, stop, reset } = useTimer();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [showResultModal, setShowResultModal] = useState(false);

  useEffect(() => {
    setMatchedPairs(cards.filter((card) => card.isMatched).length / 2);
  }, [cards]);

  useEffect(() => {
    if (isGameOver) {
      stop();
      setShowResultModal(true);
    }
  }, [isGameOver]);

  useEffect(() => {
    start();
  }, []);

  const handleRestart = () => {
    startGame();
    reset();
    start();
    setShowResultModal(false);
  };

  const handleClose = () => {
    setShowResultModal(false);
  };

  const handleBackToStart = () => {
    setShowResultModal(false);
    dispatch(resetGameState());
    reset();
    stop();
    navigate("/");
  };

  return (
    <div className={styles.gamePage}>
      {loading ? (
        <div className={styles.loader}></div>
      ) : (
        <>
          <div className={styles.gameControls}>
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
                <ResultActions
                  onRestart={handleRestart}
                  onBackToStart={handleBackToStart}
                />
              </>
            }
          />
        </>
      )}
    </div>
  );
};

export default GamePage;
