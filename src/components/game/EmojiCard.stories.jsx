import React from "react";
import { Provider } from "react-redux";
import store from "../../store/store";
import EmojiCard from "./EmojiCard";

export default {
  title: "Game/EmojiCard",
  component: EmojiCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Provider store={store}>
        <div
          style={{
            padding: "3rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "200px",
            backgroundColor: "#f8f9fa",
          }}
        >
          <Story />
        </div>
      </Provider>
    ),
  ],
  argTypes: {
    onClick: {
      action: "clicked",
      description: "Функція, що викликається при кліку",
    },
    emoji: { control: "text", description: "Емодзі для відображення" },
    isFlipped: { control: "boolean", description: "Чи перевернута картка?" },
    frontColor: {
      control: "color",
      description: "Колір сорочки (де знак питання)",
    },
    backColor: {
      control: "color",
      description: "Колір лицевої сторони (де емодзі)",
    },
  },
};

export const Closed = {
  args: {
    emoji: "🧩",
    isFlipped: false,
    frontColor: "#2c3e50",
    backColor: "#ffffff",
  },
};

export const Flipped = {
  args: {
    emoji: "🚀",
    isFlipped: true,
    frontColor: "#05bdc1",
    backColor: "#0263c4",
  },
};
