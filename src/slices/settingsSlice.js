import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const hasConsent = () => {
  const consent = Cookies.get("memory-game-gdpr");
  return consent === "accepted";
};

const defaultSettings = { pairs: 6, speed: 500, cardSize: 60 };

const getSavedSettings = () => {
  if (!hasConsent()) return null;

  const saved = localStorage.getItem("gameSettings");
  return saved ? JSON.parse(saved) : null;
};

const initialState = getSavedSettings() || defaultSettings;

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateSettings: (state, action) => {
      const newSettings = { ...state, ...action.payload };

      if (hasConsent()) {
        localStorage.setItem("gameSettings", JSON.stringify(newSettings));
      }

      return newSettings;
    },
    resetSettings: () => {
      if (hasConsent()) {
        localStorage.removeItem("gameSettings");
      }
      return defaultSettings;
    },
  },
});

export const { updateSettings, resetSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
