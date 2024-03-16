import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import validator from "validator";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
      try {
        await signUp(email, password);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    
    
  };

  return (
    <div>
      <div className="w-full h-screen">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
          className="hidden sm:block absolute w-full h-full object-cover"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  className="p-3 my-2 bg-gray-700 rounded-full hover:bg-yellow-400"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                
                <input
                  className="p-3 my-2 bg-gray-700 rounded-full hover:bg-white hover:text-red-800"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword((e.target.value))}
                  required
                  minLength="6"
                />
                <button className="bg-cyan-600 py-3 my-6 rounded-l-full text-mono  hover:text-orange-400 font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p className="text-xl text-blue-700">
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p className="text-xl text-yellow-400 hover:text-red-900 hover:text-3xl">Need Help?</p>
                </div>
                <p className="py-8">
                  <span className=" text-blue-400 font-mono  ">
                    Already subscribed to cinema Ras?
                  </span>{" "}
                  <Link to="/signIn" className="ml-[45%]  text-orange-400 hover:text-red-800 hover:text-xl ">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
