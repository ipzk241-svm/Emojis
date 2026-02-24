import React from "react";
import styles from "./EmojiCard.module.css";
import useGameLogic from "../../hooks/UseGameLogic";

/**
 * Represents a single memory card on the game board.
 *
 * @function EmojiCard
 * @param {string} props.emoji - The emoji character displayed on the card.
 * @param {boolean} props.isFlipped - Status of the card (true if face up).
 * @param {Function} props.onClick - Callback executed when the card is clicked.
 * @param {string} [props.frontColor="#5c1481"] - Background color of the card's back (question mark).
 * @param {string} [props.backColor="#5a016c"] - Background color of the card's face (emoji).
 * @param {number} [props.size=100] - Size of the card in pixels.
 * @returns {JSX.Element} The rendered card component.
 */
const EmojiCard = ({
  emoji,
  isFlipped,
  onClick,
  frontColor = "#5c1481",
  backColor = "#5a016c",
  size = 100,
}) => {
  return (
    <div
      className={`${styles.cardContainer} ${isFlipped ? styles.flipped : ""}`}
      onClick={() => {
        if (!isFlipped) onClick?.();
      }}
      style={{
        width: size,
        height: size,
        "--card-front-color": frontColor,
        "--card-back-color": backColor,
      }}
    >
      <div className={`${styles.cardFace} ${styles.cardFront}`}>?</div>
      <div className={`${styles.cardFace} ${styles.cardBack}`}>
        <span>{emoji}</span>
      </div>
    </div>
  );
};

export default EmojiCard;
