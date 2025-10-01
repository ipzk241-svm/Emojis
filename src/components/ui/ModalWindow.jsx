import React, { useState } from "react";
import "../../styles/settings.css";

const ModalWindow = ({ isOpen, onClose, Content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        {Content}
      </div>
    </div>
  );
};

export default ModalWindow;
