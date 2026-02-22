import React from "react";
import { createPortal } from "react-dom";
import styles from "./ModalWindow.module.css";

const ModalWindow = ({ isOpen, onClose, Content }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.modalCloseBtn} onClick={onClose}>
          &times;
        </button>
        {Content}
      </div>
    </div>,
    document.getElementById("modal-root"),
  );
};

export default ModalWindow;
