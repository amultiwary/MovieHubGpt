import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch; // toggle the showGPTSearch state
    },
  },
});

export const { toggleGptSearchView } = gptSlice.actions; // export the actions to be used in the components
export default gptSlice.reducer; // export the reducer to be used in the store
