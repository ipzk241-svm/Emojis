import { createSlice } from "@reduxjs/toolkit";

const saved = localStorage.getItem("gameSettings");

const initialState = saved
  ? JSON.parse(saved)
  : { pairs: 6, speed: 500, cardSize: 60 };

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateSettings: (state, action) => {
      const newSettings = { ...state, ...action.payload };
      localStorage.setItem("gameSettings", JSON.stringify(newSettings));
      return newSettings;
    },
    resetSettings: () => {
      const defaultSettings = { pairs: 6, speed: 500, cardSize: 60 };
      localStorage.setItem("gameSettings", JSON.stringify(defaultSettings));
      return defaultSettings;
    },
  },
});

export const { updateSettings, resetSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
