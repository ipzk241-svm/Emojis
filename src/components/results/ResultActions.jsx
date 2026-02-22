import styles from "./ResultActions.module.css";

const ResultActions = ({ onRestart, onBackToStart }) => (
  <div className={styles.resultActions}>
    <button className="button" onClick={onRestart}>
      Грати знову
    </button>
    <button className="button" onClick={onBackToStart}>
      Головне меню
    </button>
  </div>
);

export default ResultActions;
