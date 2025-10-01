import React, { useState } from "react";
import "../../styles/settings.css";

const Settings = () => {
  const [difficulty, setDifficulty] = useState("easy");

  return (
    <>
      <h2>Налаштування гри</h2>

      <div className="setting">
        <label>Рівень складності:</label>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Легкий</option>
          <option value="medium">Середній</option>
          <option value="hard">Важкий</option>
        </select>
      </div>
    </>
  );
};

export default Settings;
