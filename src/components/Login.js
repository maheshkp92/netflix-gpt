import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/formValidate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForn, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSingInForm = () => {
    setIsSignInForm(!isSignInForn);
  };

  const handleBtnClick = () => {
    // Validate form data
    const message = checkValidData(
      email.current.value,
      password.current.value,
      !isSignInForn ? name.current.value : null,
    );
    setErrorMessage(message);

    if (message) return;

    const emailValue = email.current?.value || "";
    const passwordValue = password.current?.value || "";
    const nameValue = name.current?.value || "";

    // Sign In / Sign Up
    if (!isSignInForn) {
      //Sign Up login

      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          updateProfile(auth.currentUser, {
            displayName: nameValue,
            photoURL: "https://avatars.githubusercontent.com/u/11132951?v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + " : " + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " : " + errorMessage);

          setErrorMessage("Invalid Credentials");
        });
    } else {
      //Sign In logic
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " : " + errorMessage);
          setErrorMessage("Invalid Credentials");
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/eaa165a3-80a7-44cb-8df6-be1a7e225369/web/AE-en-20260706-TRIFECTA-perspective_acc2cd22-8b4e-475f-aa64-750e88c62f5d_large.jpg"
          alt="bg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 p-12 absolute my-24 bg-black mx-auto right-0 left-0 text-white bg-opacity-70"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForn && (
          <input
            ref={name}
            className="p-4 my-4 w-full bg-gray-600"
            type="text"
            placeholder="Name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-4 w-full bg-gray-600"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="p-4 my-4 w-full bg-gray-600"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-400 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 text-lg w-full"
          onClick={handleBtnClick}
        >
          {isSignInForn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSingInForm}>
          {isSignInForn
            ? "New To Netflix, Sign Up Now"
            : "Already registred User? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
