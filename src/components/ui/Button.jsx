import React from "react";
import styles from "./Button.module.css";

/**
 * A reusable button component used throughout the application.
 *
 * @function Button
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - The text or elements displayed inside the button.
 * @param {string} [props.type="button"] - The HTML button type ("button", "submit", or "reset").
 * @param {Function} [props.onClick] - Callback function executed on click.
 * @param {string} [props.className=""] - Additional custom CSS class names.
 * @returns {JSX.Element} The rendered button component.
 */
const Button = ({ children, type = "button", onClick, className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className}`.trim()}
    >
      {children}
    </button>
  );
};

export default Button;
