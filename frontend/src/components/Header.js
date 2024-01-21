import React from "react";
import ApproxiMates_Logo from "./Images/ApproxiMates_Logo.png";

function Header() {
  return (
    <header className="items-center justify-center">
      <ul className="cursor-pointer m-2">
        <img class="h-24 w-24" src={ApproxiMates_Logo} alt="Logo" />
      </ul>
    </header>
  );
}

export default Header;
