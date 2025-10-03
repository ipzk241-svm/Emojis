import React, { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const useGameSettings = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem("gameSettings");
    return saved ? JSON.parse(saved) : { pairs: 6, speed: 500, cardSize: 60 };
  });

  const updateSettings = (newSettings) => {
    setSettings(newSettings);
    localStorage.setItem("gameSettings", JSON.stringify(newSettings));
  };

  return (
    <GameContext.Provider value={{ settings, updateSettings }}>
      {children}
    </GameContext.Provider>
  );
};
