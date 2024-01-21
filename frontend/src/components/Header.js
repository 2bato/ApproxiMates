import React, { useState } from "react";
import ApproxiMates from "./Images/ApproxiMates.png";
import PostBox from "./PostBox";
import FilterButtons from "./FilterButtons";

function Header() {
  const [buttonText, setButtonText] = useState(false);
  return (
    <header className="pt-1 bg-white w-full header fixed">
      <ul style={{ display: "flex", alignItems: "center", height: "60px" }}>
        <img class="h-16 w-16" src={ApproxiMates} alt="Logo" />

        <button
          className="ml-0 space-x-3 inline-flex items-center text-black font-bold py-2 px-4 rounded-2xl bg-white hover:bg-emerald-600/[0.8] border-4 border-emerald-500"
          style={{ width: "250px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 flex-shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
          <h1>Create Post</h1>
        </button>

        <button
          className="ml-3"
          onClick={() => {
            setButtonText(!buttonText);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 flex-shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
          {buttonText ? "balls" : "butt"}
        </button>
      </ul>
      <div className="mt-1" style={grayStripStyle} />
    </header>
  );
}

const grayStripStyle = {
  height: "10px", // Adjust the height as needed
  width: "100%", // Full width of the container
  background: "#ccc", // Gray color, you can change this to any color you prefer
};

export default Header;
