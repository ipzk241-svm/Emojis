import Settings from "../components/settings/Settings";
import ModalWindow from "../components/ui/ModalWindow";
import { Link } from "react-router-dom";
import styles from "./StartPage.module.css";
import { useState } from "react";
import Button from "../components/ui/Button";

const StartPage = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  
  return (
    <div className={styles.startPage}>
      <h1 className={styles.title}>Memory Game</h1>
      <Link to="/game">
        <Button className={styles.startGameButton}>Почати гру</Button>
      </Link>

      <Button
        onClick={() => setIsSettingsOpen(true)}
        className={styles.settingsButton}
      >
        Налаштування
      </Button>

      <ModalWindow
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        Content={<Settings onClose={() => setIsSettingsOpen(false)} />}
      />
    </div>
  );
};

export default StartPage;
