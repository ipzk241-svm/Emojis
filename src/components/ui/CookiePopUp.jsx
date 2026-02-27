import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const COOKIE_NAME = "memory-game-gdpr";

const CookiePopUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get(COOKIE_NAME);
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set(COOKIE_NAME, "accepted", { expires: 150, sameSite: "lax" });
    setIsVisible(false);
  };

  const handleDecline = () => {
    Cookies.set(COOKIE_NAME, "declined", { expires: 150, sameSite: "lax" });
    localStorage.removeItem("gameSettings");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      style={styles.banner}
      role="alert"
      aria-live="polite"
      aria-labelledby="cookie-title"
    >
      <div style={styles.content}>
        <div style={styles.textContainer}>
          <strong id="cookie-title" style={styles.title}>
            Cookie Settings
          </strong>
          <p style={styles.description}>
            This application stores game settings locally. No personal data is
            collected or shared. By clicking "Accept", you agree to the storage
            of cookies on your device.
          </p>
        </div>
        <div style={styles.actions}>
          <button
            onClick={handleDecline}
            style={{ ...styles.button, ...styles.declineBtn }}
            onMouseOver={(e) => (e.target.style.opacity = "0.8")}
            onMouseOut={(e) => (e.target.style.opacity = "1")}
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            style={{ ...styles.button, ...styles.acceptBtn }}
            onMouseOver={(e) => (e.target.style.opacity = "0.9")}
            onMouseOut={(e) => (e.target.style.opacity = "1")}
          >
            Accept
          </button>
        </div>
      </div>
    </aside>
  );
};

const styles = {
  banner: {
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "90%",
    maxWidth: "800px",
    backgroundColor: "#372c50", // Ваш колір
    color: "#ecf0f1",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    zIndex: 1000,
    animation: "fadeIn 0.5s ease-out",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    // Для мобілок логіка зазвичай змінюється через медиа-запити в CSS,
    // тут ми використовуємо базовий flex-wrap
    flexWrap: "wrap",
  },
  textContainer: {
    flex: "1 1 300px",
  },
  title: {
    display: "block",
    marginBottom: "5px",
    fontSize: "16px",
  },
  description: {
    margin: 0,
    fontSize: "14px",
    lineHeight: "1.5",
    opacity: 0.9,
  },
  actions: {
    display: "flex",
    gap: "12px",
    flexShrink: 0,
    // На мобільних кнопках зручніше, коли вони на всю ширину
    flexWrap: "nowrap",
  },
  button: {
    padding: "10px 24px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    border: "none",
    transition: "all 0.2s ease",
  },
  acceptBtn: {
    backgroundColor: "#27ae60",
    color: "#ffffff",
  },
  declineBtn: {
    backgroundColor: "transparent",
    color: "#ecf0f1",
    border: "1px solid rgba(236, 240, 241, 0.3)",
  },
};

export default CookiePopUp;
