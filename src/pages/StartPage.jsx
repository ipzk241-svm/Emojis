import React, { useState } from "react";
import Settings from "../components/settings/Settings";
import "../styles/App.css";
import ModalWindow from "../components/ui/ModalWindow";
import useGameLogic from "../hooks/UseGameLogic";
import { Link } from "react-router-dom";

const StartPage = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className="start-page">
      <Link to="/game">
        <button className="button">Почати гру</button>
      </Link>

      <button className="button" onClick={() => setIsSettingsOpen(true)}>
        Налаштування
      </button>

      <ModalWindow
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        Content={<Settings onClose={() => setIsSettingsOpen(false)} />}
      />
    </div>
  );
};

export default StartPage;
