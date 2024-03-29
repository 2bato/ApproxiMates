import React, { useState, useContext } from "react";
import "./App.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Link, Router } from "react-router-dom";
import { User, UserContext } from "./components/Context/User";
import { useNavigate } from "react-router-dom";


function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setActiveUser } = useContext(UserContext);
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the login logic here
    console.log("Login with:", { email, password });
  };

  function handleSignOut(event) {
    setActiveUser({});
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <div className="flex justify-center">
              <h1 className="text-white font-bold text-lg mb-5">
                Welcome Back!
              </h1>
            </div>

            <input
              className="bg-gray-700 shadow appearance-none rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              className="bg-gray-700 shadow appearance-none rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <Link to="/App">
              <button
                className="bg-white text-black font-bold py-2 px-4 rounded-lg"
                type="submit"
              >
                Login
              </button>
            </Link>
          </div>

          <div className="flex mt-4 justify-center">
            <h1 className="text-white font-bold justify-center items-center">
              OR
            </h1>
          </div>

          <div className="flex justify-center mt-4">
            <GoogleLogin
              onSuccess={async (credentialResponse) => {
                const credentialResponseDecoded = jwtDecode(
                  credentialResponse.credential
                );
                setActiveUser(credentialResponseDecoded);
                console.log(user);
                setTimeout(() => {
                  navigate("/App");
                }, 1200);

              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
        </form>

        {/* <div className="w-3/6 m-auto "></div>

        <button className="border-2 border-black" onClick={handleSignOut}>
          Sign Out
        </button>
        {user && (
          <div>
            <img src={user.picture}></img>
          </div>
        )}
        <h3>{user.name}</h3> */}
      </div>
    </div>
  );
}

export default LoginPage;