import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Settings from "./Settings";

/**
 * Функція для створення ізольованого Redux-сховища.
 */
const createMockStore = (settingsState) =>
  configureStore({
    reducer: {
      settings: (state = settingsState, action) => state,
    },
  });

export default {
  title: "Settings/SettingsForm",
  component: Settings,
  tags: ["autodocs"],
  argTypes: {
    onClose: { action: "closed", description: "Функція закриття вікна" },
    backgroundColor: { control: "color", description: "Фон форми" },
    textColor: { control: "color", description: "Колір тексту" },
  },
};

// Базовий рендер для всіх історій
const Template = (args) => (
  <Provider store={createMockStore(args.initialSettings)}>
    <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <Settings {...args} />
    </div>
  </Provider>
);

// 1. Стандартні налаштування
export const Default = {
  args: {
    initialSettings: { pairs: 8, speed: 1000, cardSize: 80 },
    backgroundColor: "#2c3e50",
    textColor: "#ffffff",
  },
  render: Template,
};

// 2. Варіант "Легкий" (мало карток, повільно)
export const EasyLevel = {
  args: {
    initialSettings: { pairs: 4, speed: 1500, cardSize: 100 },
    backgroundColor: "#27ae60", // Зелений фон для легкого рівня
    textColor: "#ffffff",
  },
  render: Template,
};

// 3. Варіант "Хардкор" (багато карток, дуже швидко)
export const HardcoreLevel = {
  args: {
    initialSettings: { pairs: 24, speed: 400, cardSize: 50 },
    backgroundColor: "#c0392b", // Червоний фон для важкого рівня
    textColor: "#ffffff",
  },
  render: Template,
};

// 4. Перевірка валідації (помилкові дані)
export const ValidationErrors = {
  args: {
    initialSettings: { pairs: 1, speed: 100, cardSize: 20 },
    backgroundColor: "#f39c12",
    textColor: "#ffffff",
  },
  render: Template,
};
