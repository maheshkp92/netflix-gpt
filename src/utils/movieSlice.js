import { createSlice } from "@reduxjs/toolkit";

const moviewSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    addTrailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.addTrailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo } = moviewSlice.actions;
export default moviewSlice.reducer;
