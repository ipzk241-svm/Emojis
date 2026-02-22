import React from "react";
import { createPortal } from "react-dom";
import styles from "./ModalWindow.module.css";

/**
 * A reusable modal component that renders its content into a React portal.
 *
 * @function ModalWindow
 * @param {boolean} props.isOpen - Determines whether the modal is visible.
 * @param {Function} props.onClose - Callback executed when the close button is clicked.
 * @param {React.ReactNode} props.Content - The JSX content to render inside the modal.
 * @returns {JSX.Element|null} The modal portal or null if closed.
 */
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
