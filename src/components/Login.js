import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="background"
      />
      <form className="absolute w-3/12 p-9 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 ">
        <h1 className="font-bold text-3xl py-4 ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            placeholder="Full Name"
            type="text"
            className="p-2 my-4 w-full rounded bg-gray-700"
          />
        )}
        <input
          placeholder="Email Address"
          type="text"
          className="p-2 my-4 w-full rounded bg-gray-700"
        />
        <input
          placeholder="Email Address"
          type="password"
          className="p-2 my-4 w-full rounded bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer py-4" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign Up"
            : "Already registered? Sign in Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
