import React, { useState } from "react";
import ApproxiMates from "./Images/ApproxiMates.png";

function goToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}

function goToTop() {
  window.scrollTo(0, 0);
}

function Header() {
  return (
    <header className="bg-white w-full header fixed fixed top-0 w-full">
      <div style={{ display: "flex", alignItems: "center", height: "60px" }}>
        <img
          class="h-16 w-16 ml-6"
          src={ApproxiMates}
          alt="Logo"
          onClick={goToTop}
        />

        <button
          onClick={goToBottom}
          className="ml-auto mr-3 inline-flex items-center text-black font-bold py-2 px-4 rounded-2xl bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 flex-shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </button>
      </div>
      <div
        className="mt-1"
        style={{
          height: "5px",
          width: "100%",
          background: "#ccc",
        }}
      />
    </header>
  );
}

export default Header;
