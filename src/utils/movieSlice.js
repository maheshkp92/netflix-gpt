import { createSlice } from "@reduxjs/toolkit";

const moviewSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    addTrailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.addTrailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addPopularMovies, addTrailerVideo } =
  moviewSlice.actions;
export default moviewSlice.reducer;
