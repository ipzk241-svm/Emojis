import styles from "./ResultSummary.module.css";

const ResultSummary = ({ moves, time }) => (
  <div className={styles.resultSummary}>
    <h2 className={styles.title}>🎉 Ви завершили гру!</h2>
    <p className={styles.info}>Ходи: {moves}</p>
    <p className={styles.info}>Час: {time}</p>
  </div>
);

export default ResultSummary;
