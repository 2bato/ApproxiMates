import React from "react";
import hingeLogo from "./hingeLogo.png";

function Header() {
  return (
    <header className="items-center justify-center">
      <ul className="cursor-pointer m-2">
        <img class="h-24 w-24" src={hingeLogo} alt="Logo" />
      </ul>
    </header>
  );
}

export default Header;

