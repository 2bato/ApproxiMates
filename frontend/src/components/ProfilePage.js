import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

function ProfilePage(props) {
  const [editProfile, setEditProfile] = useState(false);

  const [username, setUsername] = useState("");
  const [file, setFile] = useState();

  const editScreen = (
    <div className="text-left ml-6">
      <h2>change username</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "4px",
        }}
      />
      <h2>upload profile picture</h2>
      <input
        type="file"
        onChange={(e) => {
          setFile(URL.createObjectURL(e.target.files[0]));
        }}
      />
      <img src={file} style={{ paddingRight: "24px" }} />
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
      {editProfile ? editScreen : profileScreen}
      <button onClick={() => setEditProfile(!editProfile)}>
        {editProfile ? "save profile" : "edit profile"}
      </button>
    </div>
  );
}

export default ProfilePage;
