import styles from "./GameBoard.module.css";
import EmojiCard from "./EmojiCard";
import { useWindowSize } from "../../hooks/useWindowSize";
import useGameLogic from "../../hooks/UseGameLogic";

/**
 * Renders the grid of memory cards based on the current game state.
 * Calculates optimal columns based on the window size and number of cards.
 *
 * @function GameBoard
 * @param {Array<Object>} props.cards - Array of card objects to be displayed.
 * @param {Function} props.onCardClick - Callback passed down to handle card flips.
 * @returns {JSX.Element} The game board container with rendered cards.
 */
const GameBoard = ({ cards, onCardClick }) => {
  const { cardSize } = useGameLogic();
  const { width } = useWindowSize();

  const numCards = cards.length;
  let optimalColumns = Math.min(
    Math.ceil(Math.sqrt(numCards)),
    Math.floor(width / (cardSize + 20)),
  );
  optimalColumns = Math.max(2, optimalColumns);

  return (
    <div
      className={styles.gameBoard}
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
          size={cardSize}
        />
      ))}
    </div>
  );
};

export default GameBoard;
