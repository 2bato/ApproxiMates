import React from "react";
import { useState } from "react";
import Pin from "./Images/pin.png";
import House from "./Images/house.png";
import Profile from "./Images/person.png";
import ProfilePage from "./ProfilePage";
import { Link } from "react-router-dom";

function Footer() {
  const [profile, editProfile] = useState(false);

  return (
    <header className="pt-2 bg-emerald-600/[0.8] fixed bottom-0 left-0 w-full">
      <div className="items-center justify-center w-full inline-flex cursor-pointer gap-20">
        <button className="inline-flex h-12 w-12 items-center justify-center">
          <img className="" src={Pin} alt="Logo" />
        </button>
        <Link to="/App">
          <button className="inline-flex h-12 w-12 items-center justify-center">
            <img class="" src={House} alt="Logo" />
          </button>
        </Link>
        <Link to="/ProfilePage">
          <button className="inline-flex h-12 w-12 items-center justify-center">
            <img class="" src={Profile} alt="Logo" />
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Footer;
