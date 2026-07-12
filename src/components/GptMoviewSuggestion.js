import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GptMoviewSuggestion = () => {
  const movieResults = useSelector((store) => store.gpt.searchMovies);

  if (!movieResults) return null;
  // console.log(movieResults[0].poster_path, "movieResults");
  return movieResults.length > 0 ? (
    <div className="p-4 m-4 bg-black bg-opacity-70 text-white flex overflow-x-scroll hide-scrollbar">
      <div className="flex">
        {movieResults.map((movie) => (
          <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
        ))}
      </div>
    </div>
  ) : (
    <div className="p-4 m-4 bg-black bg-opacity-70 text-white flex items-center justify-center h-40">
      <h1 className="font-bold text-lg">
        No movies found. Try a different search term.
      </h1>
    </div>
  );
};

export default GptMoviewSuggestion;
