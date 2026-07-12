import React, { useRef } from "react";
import lang from "../utils/languageConstatnts";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleGptSearchClick = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?page=1&query=" +
        searchText.current.value,
      API_OPTIONS,
    );
    const json = await data.json();
    // console.log(json);
    dispatch(addGptMovieResult(json.results));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 bg-black grid grid-cols-12"
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[languageKey]?.gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="py-2 px-4 bg-red-500 text-white rounded-lg col-span-3 m-4"
        >
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
