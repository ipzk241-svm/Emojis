import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getEmojis = async (count = 10) => {
  const res = await fetch(
    "https://raw.githubusercontent.com/github/gemoji/master/db/emoji.json"
  );
  const all = await res.json();
  const emojis = all.map((e) => e.emoji).filter(Boolean);
  const shuffled = emojis.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const generateCards = async (count) => {
  const selected = await getEmojis(count);
  const pairs = [...selected, ...selected];

  return pairs
    .sort(() => Math.random() - 0.5)
    .map((emoji, index) => ({
      id: index,
      emoji,
      isFlipped: false,
      isMatched: false,
    }));
};

export const startGame = createAsyncThunk("game/startGame", async (pairs) => {
  const newCards = await generateCards(pairs);
  return newCards;
});

const gameSlice = createSlice({
  name: "game",
  initialState: {
    cards: [],
    moves: 0,
    isGameOver: false,
  },
  reducers: {
    flipCard: (state, action) => {
      const card = state.cards.find((c) => c.id === action.payload);
      if (card && !card.isMatched) {
        card.isFlipped = true;
      }
    },
    matchCards: (state, action) => {
      const { firstId, secondId } = action.payload;
      state.cards = state.cards.map((c) =>
        c.id === firstId || c.id === secondId ? { ...c, isMatched: true } : c
      );
    },
    unflipCards: (state, action) => {
      const { firstId, secondId } = action.payload;
      state.cards = state.cards.map((c) =>
        c.id === firstId || c.id === secondId ? { ...c, isFlipped: false } : c
      );
    },
    incrementMoves: (state) => {
      state.moves += 1;
    },
    setGameOver: (state, action) => {
      state.isGameOver = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(startGame.fulfilled, (state, action) => {
      state.cards = action.payload;
      state.moves = 0;
      state.isGameOver = false;
    });
  },
});

export const {
  flipCard,
  matchCards,
  unflipCards,
  incrementMoves,
  setGameOver,
} = gameSlice.actions;

export default gameSlice.reducer;
