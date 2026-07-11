import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch((store) => store.movies.addTrailerVideo);
  const getMoviewTrailer = async (movieId) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS,
    );
    const json = await data.json();
    const filteredData = json.results.filter(
      (video) => video.type === "Trailer",
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMoviewTrailer(movieId);
  }, []);
};

export default useMovieTrailer;
