import React from "react";
import "../../styles/App.css";

const ResultActions = ({ onRestart, onBackToStart }) => {
  return (
    <div className="result-actions">
      <button className="button" onClick={onRestart}>
        Грати знову
      </button>
      <button
        className="button"
        style={{ marginLeft: "10px" }}
        onClick={onBackToStart}
      >
        Головне меню
      </button>
    </div>
  );
};

export default ResultActions;
