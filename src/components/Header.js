import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice"; // import user slice actions
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/GptSlice";
import { changeLangugae } from "../utils/configSlice"; // import config slice actions

const Header = () => {
  const navigate = useNavigate(); // useNavigate hook to navigate to different routes
  const dispatch = useDispatch(); // dispatch function to update the redux store
  const user = useSelector((store) => store.user); // get user data from redux store
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch); // get showGptSearch data from redux store
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        ); // dispatch the user data to the redux store
        navigate("/browse"); // navigate to browse page if user is authenticated
      } else {
        // dispatch the removeUser action to remove user data from redux store

        navigate("/"); // navigate to login page if user is not authenticated
        dispatch(removeUser());
      }
    });
    //unsubscribe when component is unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    console.log("this is langugae in  header.js ", e.target.value);
    dispatch(changeLangugae(e.target.value)); // dispatch the changeLangugae action to update the language in redux store
  };

  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black  z-10 flex flex-col md:flex-row justify-between items-center">
      <img className="w-40 mx-auto md:mx-0"  alt=" logo" />
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white rounded-md"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-1 my-2 bg-purple-800 hover:bg-purple-700 transition duration-300 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          {/* <img width={40} height={40} className="hidden md:block" alt="usericon" src={user?.photoURL} /> */}

          <button onClick={handleSignOut} className="font-bold text-white bg-red-600 px-4 my-2 rounded-lg hover:bg-red-700 transition duration-300">
            LogOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
