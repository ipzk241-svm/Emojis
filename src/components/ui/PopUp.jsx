import CookieConsent from "react-cookie-consent";

function PopUp() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Understand & Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="memory-game-gdpr"
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
      expires={150}
    >
      This application uses local storage to save game settings in accordance
      with GDPR. No privacy-sensitive data is collected or transmitted.
    </CookieConsent>
  );
}

export default PopUp;
