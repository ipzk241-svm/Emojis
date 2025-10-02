import React from "react";
import "../../styles/App.css";

const ResultSummary = ({ moves, time, difficulty }) => {
  return (
    <div className="result-summary">
      <p>Ходи: {moves}</p>
      <p>Час: {time}</p>
      <p>Рівень складності: {difficulty}</p>
    </div>
  );
};

export default ResultSummary;
