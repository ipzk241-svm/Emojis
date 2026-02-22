import Settings from "../components/settings/Settings";
import ModalWindow from "../components/ui/ModalWindow";
import { Link } from "react-router-dom";
import styles from "./StartPage.module.css";
import { useState } from "react";

const StartPage = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className={styles.startPage}>
      <h1 className={styles.title}>Memory Game</h1>
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
