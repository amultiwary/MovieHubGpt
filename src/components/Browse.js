import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux"; // import useSelector hook from react-redux
import SecondaryContainer from "./SecondaryContainer"; // import secondary container component
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovie";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch"; // import gpt search component

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch); // get the showGPTSearch value from the redux store
  console.log("showGPTSearch in browse", showGptSearch); // log the showGPTSearch value
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  
  return (
    <div className="">
      <Header />
      { showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )
      }
    </div>
  );
};

export default Browse;
