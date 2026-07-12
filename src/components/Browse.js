import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../customHooks/usePopularMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      {/* 
      Main Video Container 
        - Video Background, 
        - Title,
      Secondary Container 
        - Movie List * n
          - Cart * n      
      */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
