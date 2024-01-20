import React from "react";
import ApproxiMates from "./Images/hingeLogo.png"

function Header() {
  return (
    <header className="items-center justify-center">
      <ul className="cursor-pointer m-2">
        <img class="h-24 w-24" src={ApproxiMates} alt="Logo" />
      </ul>
    </header>
  );
}

export default Header;

