import styles from "./GameStats.module.css";

/**
 * Displays real-time game statistics during active gameplay.
 * Shows the current number of moves, the count of successfully matched pairs, and the elapsed time.
 *
 * @function GameStats
 * @param {number} props.moves - The current number of moves made by the player.
 * @param {string} props.time - The formatted elapsed time string (e.g., "01:23").
 * @param {number} props.matchedPairs - The number of pairs the player has successfully found so far.
 * @returns {JSX.Element} The rendered statistics banner.
 */
const GameStats = ({ moves, time, matchedPairs }) => {
  return (
    <div className={styles.gameStats}>
      <p className={styles.statsText}>
        Ходи: {moves} | Знайдено пар: {matchedPairs} | Час: {time}
      </p>
    </div>
  );
};

export default GameStats;
