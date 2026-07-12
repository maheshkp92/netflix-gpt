import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviewSuggestion from "./GptMoviewSuggestion";
import { WEB_LOGO } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={WEB_LOGO} alt="bg" />
      </div>
      <GptSearchBar />
      <GptMoviewSuggestion />
    </div>
  );
};

export default GptSearch;
