import styles from "./ResultSummary.module.css";

/**
 * Displays the final game statistics to the user upon completion.
 * Shows a congratulatory message along with the total moves and time taken.
 *
 * @function ResultSummary
 * @param {number} props.moves - The total number of moves the player made to finish the game.
 * @param {string} props.time - The formatted string representing the total time taken (e.g., "01:45").
 * @returns {JSX.Element} The summary container displaying the game results.
 */
const ResultSummary = ({ moves, time }) => (
  <div className={styles.resultSummary}>
    <h2 className={styles.title}>🎉 Ви завершили гру!</h2>
    <p className={styles.info}>Ходи: {moves}</p>
    <p className={styles.info}>Час: {time}</p>
  </div>
);

export default ResultSummary;
