import Button from "../ui/Button";
import styles from "./ResultActions.module.css";

/**
 * Renders the action buttons displayed at the end of the game.
 * Provides options to either restart the game or return to the main menu.
 *
 * @function ResultActions
 * @param {Function} props.onRestart - Callback executed when the "Play Again" (Грати знову) button is clicked.
 * @param {Function} props.onBackToStart - Callback executed when the "Main Menu" (Головне меню) button is clicked.
 * @returns {JSX.Element} The container with action buttons.
 */
const ResultActions = ({ onRestart, onBackToStart }) => (
  <div className={styles.resultActions}>
    <Button onClick={onRestart} className={styles.restartButton}>
      Грати знову
    </Button>
    <Button onClick={onBackToStart} className={styles.backToStartButton}>
      Головне меню
    </Button>
  </div>
);

export default ResultActions;
