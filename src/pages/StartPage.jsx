import React, { useState } from "react";
import Settings from "../components/settings/Settings";
import "../styles/App.css";
import ModalWindow from "../components/ui/ModalWindow";
import useGameLogic from "../hooks/UseGameLogic";

const StartPage = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [startGame] = useGameLogic();

  const handleStartGame = () => {
    // move to GamePage
    startGame();
  };
aa
  return (
    <div className="start-page">
      <button className="button" onClick={handleStartGame}>
        Почати гру
      </button>

      <button className="button" onClick={() => setIsSettingsOpen(true)}>
        Налаштування
      </button>

      <ModalWindow
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        Content={<Settings />}
      />
    </div>
  );
};

export default StartPage;
