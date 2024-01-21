import React from "react";
import { useState } from "react";
import Pin from "./Images/marker2.png";
import House from "./Images/house2.png";
import Profile from "./Images/person2.png";
import ProfilePage from "./ProfilePage";

function Footer() {
  const [profile, editProfile] = useState(false);

  return (
    <header className="pt-2 bg-white fixed bottom-0 left-0 w-full">
      <div className="items-center justify-center w-full inline-flex cursor-pointer gap-20">
        <button className="inline-flex h-12 w-12 items-center justify-center">
          <img class="h-10 w-10" src={Pin} alt="Logo" />
        </button>
        <button className="inline-flex h-12 w-12 items-center justify-center">
          <img class="h-10 w-10" src={House} alt="Logo" />
        </button>
        {profile ? <ProfilePage /> : ""}
        <button
          className="inline-flex h-12 w-12 items-center justify-center"
          onClick={() => editProfile(!profile)}
        >
          <img class="h-10 w-10" src={Profile} alt="Logo" />
        </button>
      </div>
    </header>
  );
}

export default Footer;
