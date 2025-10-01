import React from "react";
import ResultSummary from "../components/results/ResultSummary";
import ResultActions from "../components/results/ResultActions";
import "../styles/App.css";

const ResultsPage = () => {
  return (
    <div className="results-page">
      <h2>Результати гри</h2>
      <ResultSummary />
      <ResultActions />
    </div>
  );
};

export default ResultsPage;
