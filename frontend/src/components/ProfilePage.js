import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { setGlobalState, useGlobalState } from "../LogInPage";
import { Link, Router } from "react-router-dom";

function ProfilePage(props) {
  const [editProfile, setEditProfile] = useState(false);

  const [username, setUsername] = useState("");
  const [file, setFile] = useState();

  const editScreen = (
    <div className="flex justify-center items-center inset-0 size-full bg-black fixed bg-opacity-30 backdrop-blur-sm">
      <div className="bg-white mx-8 py-16 border-4 rounded-3xl border-emerald-600">
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
          <input
            className="ml-8"
            type="file"
            onChange={(e) => {
              setFile(URL.createObjectURL(e.target.files[0]));
            }}
          />
          <img src={file} style={{ maxWidth: "50%", maxHeight: "50%" }} />
          <button
            className=" bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-1 px-2 rounded"
            onClick={() => setEditProfile(!editProfile)}
          >
            {editProfile ? "Save Profile" : "Edit Profile"}
          </button>
        </div>
      </div>
    </div>
  );

  const profileScreen = (
    <div className="text-left ml-6">
      {username}
      <img src={file} style={{ paddingRight: "24px" }} />
      {/*gonna need u to list users posts under hear andrew, idk how to get those from backend*/}
    </div>
  );

  return (
    <div>
      <Header />
      <h1
        className="mt-20 mb-5"
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Welcome {username}
      </h1>
      <div className="space-y-6 mb-40 flex-col flex justify-center">
        <div className="justify-center flex">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full min-h-24 rounded-full"
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              fontFamily: "Arial, sans-serif",
            }}
          >
            My Posts
          </button>
        </div>
        {editProfile ? editScreen : profileScreen}
        <div className="pt-5">
          <button
            className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold w-full min-h-24 rounded-full"
            onClick={() => setEditProfile(!editProfile)}
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              fontFamily: "Arial, sans-serif",
            }}
          >
            {editProfile ? "save profile" : "edit profile"}
          </button>
        </div>
        {
          //<div className="pt-10">
          //<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full min-h-24 rounded-full"
          //       style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
          //</div>  Saved Posts
          //</div></button>
          //</div>
        }
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
  );
}

export default ProfilePage;
