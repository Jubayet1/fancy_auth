import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth, { signInWithGoogle } from "../../firebase.init";
import { BlogContext } from "../../App";


const LogIn = () => {
const [blogs, setBlogs] = useContext(BlogContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setBlogs(userCredential)
        const user = userCredential.user;
        if (user.email) {
          return navigate("/profile");
        }
        // ...
      })
      .catch((error) => {});
  };


  
  return (
    <div className="bg-no-repeat bg-cover bg-center relative">
      <div className="absolute bg-gradient-to-b from-blue-800 to-blue-400 opacity-75 inset-0 z-0"></div>
      <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
        <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
          <div className="self-start hidden lg:flex flex-col  text-white">
            <h1 className="mb-3 font-bold text-5xl">Hi ? Welcome Back.</h1>
            <p className="pr-3">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups
            </p>
          </div>
        </div>
        <div className="flex justify-center self-center  z-10">
          <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
            <div className="mb-4">
              <h3 className="font-semibold text-2xl text-gray-800">Log In </h3>
              <p className="text-gray-500">Please Log In To Your Account.</p>
            </div>
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Email
                </label>
                <input
                  className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  type="email"
                  placeholder="mail@gmail.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="space-y-2">
                <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                  Password
                </label>
                <input
                  className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="flex items-center justify-center">
                <div className="flex items-center">
                  <Link to="/signup">Dont Have Account</Link>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  onClick={handleSubmit}
                >
                  LOG IN
                </button>
              </div>
            </div>
            <div className="divider"></div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center bg-blue-400  hover:bg-blue-700 text-gray-100 p-3 mb-4 rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-100"
                onClick={signInWithGoogle}
              >
                CONTINUE WITH GOOGLE
              </button>
            </div>
            <div className="pt-5 text-center text-gray-400 text-xs">
              <span>Copyright © 2022</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
