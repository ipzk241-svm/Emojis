import React from "react";
import { createPortal } from "react-dom";
import "../../styles/settings.css";

const ModalWindow = ({ isOpen, onClose, Content }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        {Content}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default ModalWindow;
