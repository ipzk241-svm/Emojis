import React from "react";
import "../../styles/App.css";

const ResultSummary = ({ moves, time }) => {
  return (
    <div className="result-summary">
      <h2>!Ви завершили гру!</h2>
      <p>Ходи: {moves}</p>
      <p>Час: {time}</p>
    </div>
  );
};

export default ResultSummary;
