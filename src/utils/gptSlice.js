import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    searchMovies: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      state.searchMovies = action.payload;
    },
    clearGptMovieResult: (state, action) => {
      state.searchMovies = null;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult, clearGptMovieResult } =
  gptSlice.actions;

export default gptSlice.reducer;
