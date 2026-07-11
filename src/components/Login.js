import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForn, setIsSignInForm] = useState(true);

  const toggleSingInForm = () => {
    setIsSignInForm(!isSignInForn);
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
      <form className="w-3/12 p-12 absolute my-24 bg-black mx-auto right-0 left-0 text-white bg-opacity-70">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForn && (
          <input
            className="p-4 my-4 w-full bg-gray-600"
            type="text"
            placeholder="Name"
          />
        )}
        <input
          className="p-4 my-4 w-full bg-gray-600"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="p-4 my-4 w-full bg-gray-600"
          type="password"
          placeholder="Password"
        />

        <button className="p-4 my-4 bg-red-700 text-lg w-full">
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
