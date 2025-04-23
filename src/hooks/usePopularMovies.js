import { useEffect } from "react"; // import useEffect hook from react
import { useDispatch } from "react-redux"; // import useDispatch hook from react-redux
import { addPopularMovies } from "../utils/movieSlice"; // import movie slice actions
import { API_OPTIONS } from "../utils/constant"; // import API options from constant file

const usePopularMovies = () => {
  const dispatch = useDispatch(); // dispatch function to update the redux stor


  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    
    dispatch(
      addPopularMovies(json.results) // dispatch the now playing movies to the redux store
    ); // dispatch the user data to the redux store
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies; // export the useNowPlayingMovies hook to be used in other components
