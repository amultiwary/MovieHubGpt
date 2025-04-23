import React, { useRef } from "react"; // rafce- react arrow function component export
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { checkValidData } from "../utils/validate";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constant"; // import user avatar from constant file

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch(); // dispatch function to update the redux store

  const name = useRef(null); // useRef to get the value of name input field
  const email = useRef(null); // useRef to get the value of email input field
  const password = useRef(null); // useRef to get the value of password input field

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value); // check if the email and password are valid
    setErrorMessage(message); // set the error message

    if (message) return; // if there is an error message, return

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up

          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = user;
              dispatch(
                addUser({
                  uid,
                  email,
                  displayName,
                  photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "_" + errorMessage); // set the error message
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "_" + errorMessage); // set the error message
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm); // toggle between sign in and sign up form
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen object-cover md:h-auto md:object-containcontain" src={BG_URL} alt="Netflix logo" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-full md:w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign UP"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="Text"
            placeholder="Full Name"
            className="py-3 my-4 rounded-md w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="py-3  my-4 rounded-md w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="py-3 my-4 rounded-md w-full bg-gray-700"
        />
        <p>{errorMessage}</p>
        <button
          className="bg-red-600 p-2 mr-1 mt-4 rounded-md w-full "
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 mt-4 cursor-pointer" onClick={toggleSignInForm}>
          {" "}
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
