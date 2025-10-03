import { useState, useEffect } from "react";

const getEmojis = async (count = 10) => {
  const res = await fetch(
    "https://raw.githubusercontent.com/github/gemoji/master/db/emoji.json"
  );
  const all = await res.json();

  const emojis = all.map((e) => e.emoji).filter(Boolean);

  const shuffled = emojis.sort(() => Math.random() - 0.5);

  return shuffled.slice(0, count);
};

const generateCards = async (count = 6) => {
  const selected = await getEmojis(count);
  const pairs = [...selected, ...selected];

  return pairs
    .sort(() => Math.random() - 0.5)
    .map((emoji, index) => ({
      id: index,
      emoji: emoji,
      isFlipped: false,
      isMatched: false,
    }));
};

const useGameLogic = (difficulty = "easy") => {
  const [cards, setCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [flippedCards, setFlippedCards] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  const getPairCount = () => {
    switch (difficulty) {
      case "medium":
        return 8;
      case "hard":
        return 10;
      default:
        return 6;
    }
  };

  const startGame = async () => {
    const newCards = await generateCards(getPairCount());
    setCards(newCards);
    setMoves(0);
    setFlippedCards([]);
    setIsGameOver(false);
  };

  const flipCard = (id) => {
    if (flippedCards.length === 2) return;
    if (cards.find((card) => card.id === id).isMatched) return;

    setCards((prev) =>
      prev.map((card) => (card.id === id ? { ...card, isFlipped: true } : card))
    );

    if (flippedCards.length === 0) {
      setFlippedCards([id]);
    } else if (flippedCards.length === 1) {
      const firstId = flippedCards[0];
      const secondId = id;
      setFlippedCards([firstId, secondId]);
      setMoves((prev) => prev + 1);

      const firstCard = cards.find((c) => c.id === firstId);
      const secondCard = cards.find((c) => c.id === secondId);

      if (firstCard.emoji === secondCard.emoji) {
        setCards((prev) =>
          prev.map((card) =>
            card.id === firstId || card.id === secondId
              ? { ...card, isMatched: true }
              : card
          )
        );
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.id === firstId || card.id === secondId
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]);
        }, 250);
      }
    }
  };

  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.isMatched)) {
      setIsGameOver(true);
    }
  }, [cards]);

  useEffect(() => {
    startGame();
  }, []);

  return {
    cards,
    moves,
    flippedCards,
    flipCard,
    startGame,
    isGameOver,
  };
};

export default useGameLogic;
