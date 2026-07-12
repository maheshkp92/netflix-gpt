import React from "react";
import { IMG_CDN_URL, DEFAULT_MOVIE_POSTER } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  const posterUrl = posterPath ? IMG_CDN_URL + posterPath : DEFAULT_MOVIE_POSTER;

  return (
    <div className="w-48 pr-4">
      <img
        alt="Movie Poster"
        src={posterUrl}
        onError={(event) => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = DEFAULT_MOVIE_POSTER;
        }}
      />
    </div>
  );
};

export default MovieCard;
