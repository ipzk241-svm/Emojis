import { Provider } from "react-redux";
import store from "../../store/store";
import EmojiCard from "./EmojiCard";

export default {
  title: "Game/EmojiCard",
  component: EmojiCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      extractComponentDescription: () => null,
    },
  },
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
      description: "Callback function triggered on click",
    },
    emoji: { control: "text", description: "Emoji to display" },
    isFlipped: { control: "boolean", description: "Is the card flipped?" },
    frontColor: {
      control: "color",
      description: "Front side color (question mark side)",
    },
    backColor: {
      control: "color",
      description: "Back side color (emoji side)",
    },
    size: {
      control: { type: "number", min: 50, max: 200, step: 10 },
      description: "Size of the card in pixels",
    },
  },
};

export const Closed = {
  args: {
    emoji: "🧩",
    isFlipped: false,
    frontColor: "#2c3e50",
    backColor: "#ffffff",
    size: 100,
  },
};

export const Flipped = {
  args: {
    emoji: "🚀",
    isFlipped: true,
    frontColor: "#05bdc1",
    backColor: "#0263c4",
    size: 100,
  },
};
