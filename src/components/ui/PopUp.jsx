import CookieConsent from "react-cookie-consent";

function PopUp() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="memory-game-gdpr"
      onDecline={() => {
        localStorage.removeItem("gameSettings");
      }}
      expires={150}
      style={{
        background: "#372c50",
        color: "#ecf0f1",
        alignItems: "center",
        padding: "10px 10px",
        justifyContent: "center",
      }}
      buttonStyle={{
        background: "#27ae60",
        color: "#fff",
        fontSize: "14px",
        fontWeight: "bold",
        borderRadius: "5px",
        padding: "8px 15px",
      }}
      declineButtonStyle={{
        background: "#c0392b",
        color: "#fff",
        fontSize: "14px",
        borderRadius: "5px",
        padding: "8px 15px",
      }}
    >
      This application stores game settings locally in your browser. No personal
      data is collected, transmitted, or shared.
    </CookieConsent>
  );
}

export default PopUp;
