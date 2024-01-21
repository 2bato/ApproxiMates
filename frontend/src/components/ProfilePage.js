import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import defaultPFP from './Images/wold.jpg'
import { setGlobalState, useGlobalState } from "../LogInPage";
import { Link, Router } from "react-router-dom";

function ProfilePage(props) {
  const [editProfile, setEditProfile] = useState(false);

  const [username, setUsername] = useState("TheLegend27");
  const [file, setFile] = useState(defaultPFP);

  const editScreen = (
    <div className="flex justify-center items-center inset-0 size-full bg-black fixed bg-opacity-30 backdrop-blur-sm">
      <div className="bg-gray-100 mx-8 py-16 border-4 rounded-3xl border-gray-600">
        <div className="flex-col flex justify-center items-center space-y-4">
          <h2>Change Username</h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />

          <h2>Upload Profile Picture</h2>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              className="ml-4 mr-4"
              type="file"
              onChange={(e) => {
                setFile(URL.createObjectURL(e.target.files[0]));
              }}
            />
          </div>

          <img src={file} style={{ maxWidth: "50%", maxHeight: "50%" }} />
          <button
            className=" bg-gray-500 hover:bg-emerald-600 text-white font-bold py-1 px-2 rounded"
            onClick={() => setEditProfile(!editProfile)}
          >
            {editProfile ? "Save Profile" : "Edit Profile"}
          </button>
        </div>
      </div>
    </div>
  );

  const profileScreen = (
    <div className="flex justify-center items-center">
      <img src={file} style={{ maxWidth: "90%", maxHeight: "90%" }} />
    </div>
  );

  return (
    <div>
      <Header />
      <h1
        className="mt-20 mb-5 ml-4"
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Welcome {username}
      </h1>
      <div className="space-y-6 mb-40 flex-col flex justify-center">
        {editProfile ? editScreen : profileScreen}
        <div className="pt-5">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold w-full min-h-24 rounded-full"
            onClick={() => setEditProfile(!editProfile)}
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              fontFamily: "Arial, sans-serif",
            }}
          >
            {editProfile ? "Save Profile" : "Edit Profile"}
          </button>
        </div>
        
        <div className="justify-center flex">
          <button
            class="bg-black hover:bg-black-700 text-white font-bold w-full min-h-24 rounded-full"
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              fontFamily: "Arial, sans-serif",
            }}
          >
            My Posts
          </button>
        </div>

        <div className="flex justify-center">
          <Link to="/">
            <div className="border-4 border-black rounded-lg w-fit p-3 cursor-pointer">
              <h1>Back to Log In</h1>
            </div>
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ProfilePage;
