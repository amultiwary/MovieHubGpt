import { useEffect } from "react"; // import useEffect hook from react
import { useDispatch } from "react-redux"; // import useDispatch hook from react-redux
import { addTopRatedMovies } from "../utils/movieSlice"; // import movie slice actions
import { API_OPTIONS } from "../utils/constant"; // import API options from constant file

const useTopRatedMovies = () => {
  const dispatch = useDispatch(); // dispatch function to update the redux stor


  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(
      addTopRatedMovies(json.results) // dispatch the now playing movies to the redux store
    ); // dispatch the user data to the redux store
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies; // export the useNowPlayingMovies hook to be used in other components
