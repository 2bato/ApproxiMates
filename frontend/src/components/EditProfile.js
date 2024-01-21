import React from "react";
import { useState } from "react";

export default function EditProfile({ visible }) {
  const [username, setUsername] = useState("");
  const [file, setFile] = useState();
  const [editProfile, setEditProfile] = useState(false);

  if (!visible) return null;
  if (!editProfile) return null;
  return (
    <div className="flex justify-center items-center inset-0 size-full bg-black fixed bg-opacity-30 backdrop-blur-sm">
      <div>
        <div className="text-left ml-6">
          <div>
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
            <button onClick={() => setEditProfile(!editProfile)}>
              {editProfile ? "save profile" : "edit profile"}
            </button>
            <img src={file} style={{ paddingRight: "24px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
