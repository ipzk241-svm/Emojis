import styles from "./GameStats.module.css";

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
