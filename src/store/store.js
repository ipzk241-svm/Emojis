import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../slices/gameSlice";
import settingsReducer from "../slices/settingsSlice";

const store = configureStore({
  reducer: {
    game: gameReducer,
    settings: settingsReducer,
  },
});

export default store;
