import React from "react";
import GptSeachBar from "./GptSeachBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../utils/constant";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover md:h-auto md:object-containcontain " src={BG_URL} alt="Netflix logo"/>
      </div>
      <div className="">
        <GptSeachBar />
        
      </div>
    </>
  );
};

export default GptSearch;
