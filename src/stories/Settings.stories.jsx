import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Settings from "../components/settings/Settings";

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
    onClose: { action: "closed", description: "Window close handler" },
    backgroundColor: { control: "color", description: "Form background" },
    textColor: { control: "color", description: "Text color" },
  },
  parameters: {
    docs: {
      extractComponentDescription: () => null,
    },
  },
};

const Template = (args) => (
  <Provider store={createMockStore(args.initialSettings)}>
    <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <Settings {...args} />
    </div>
  </Provider>
);

export const Default = {
  args: {
    initialSettings: { pairs: 8, speed: 1000, cardSize: 80 },
    backgroundColor: "#2c3e50",
    textColor: "#ffffff",
  },
  render: Template,
};

export const EasyLevel = {
  args: {
    initialSettings: { pairs: 4, speed: 40, cardSize: 100 },
    backgroundColor: "#27ae60",
    textColor: "#ffffff",
  },
  render: Template,
};

export const HardcoreLevel = {
  args: {
    initialSettings: { pairs: 24, speed: 400, cardSize: 50 },
    backgroundColor: "#c0392b",
    textColor: "#ffffff",
  },
  render: Template,
};

export const ValidationErrors = {
  args: {
    initialSettings: { pairs: 1, speed: 100, cardSize: 20 },
    backgroundColor: "#f39c12",
    textColor: "#ffffff",
  },
  render: Template,
};
