import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

function ProfilePage(props) {
  const [editProfile, setEditProfile] = useState(false);

  const [username, setUsername] = useState("");
  const [file, setFile] = useState();

  const editScreen = (
    <div>
      <h2>change username</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <h2>upload profile picture</h2>
      <input
        type="file"
        onChange={(e) => {
          setFile(URL.createObjectURL(e.target.files[0]));
        }}
      />
      <img src={file} />
    </div>
  );

  return (
    <div>
      <Header />
      <div>
        {editProfile ? (
          editScreen
        ) : (
          <div value="test dive for the non edit screen" />
        )}
        <button onClick={() => setEditProfile(!editProfile)}>
          {editProfile ? "save profile" : "edit profile"}
        </button>
        <Footer />
      </div>
    </div>
  );
}

export default ProfilePage;
