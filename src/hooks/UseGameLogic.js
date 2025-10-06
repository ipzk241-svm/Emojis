import { useDispatch, useSelector } from "react-redux";
import {
  startGame,
  flipCard,
  matchCards,
  unflipCards,
  incrementMoves,
  setGameOver,
} from "../slices/gameSlice";
import { useEffect, useState } from "react";

const useGameLogic = () => {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);
  const { cards, moves, isGameOver } = useSelector((state) => state.game);

  const [flippedCards, setFlippedCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const newGame = async () => {
    setLoading(true);
    await dispatch(startGame(settings.pairs));
    setFlippedCards([]);
    setLoading(false);
  };

  const handleFlip = (id) => {
    if (flippedCards.length === 2) return;
    const card = cards.find((c) => c.id === id);
    if (!card || card.isMatched) return;

    dispatch(flipCard(id));

    if (flippedCards.length === 0) {
      setFlippedCards([id]);
    } else if (flippedCards.length === 1) {
      const [firstId] = flippedCards;
      const secondId = id;
      setFlippedCards([firstId, secondId]);
      dispatch(incrementMoves());

      const firstCard = cards.find((c) => c.id === firstId);
      const secondCard = cards.find((c) => c.id === secondId);

      if (firstCard.emoji === secondCard.emoji) {
        dispatch(matchCards({ firstId, secondId }));
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          dispatch(unflipCards({ firstId, secondId }));
          setFlippedCards([]);
        }, settings.speed);
      }
    }
  };

  useEffect(() => {
    if (cards.length > 0 && cards.every((c) => c.isMatched)) {
      dispatch(setGameOver(true));
    }
  }, [cards, dispatch]);

  useEffect(() => {
    newGame();
  }, [settings]);

  return {
    cards,
    moves,
    flippedCards,
    isGameOver,
    loading,
    cardSize: settings.cardSize,
    startGame: newGame,
    flipCard: handleFlip,
  };
};

export default useGameLogic;
