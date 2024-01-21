import React from "react";

function Footer() {
  return (
    <header className="pt-2 bg-emerald-600/[0.8] fixed bottom-0 left-0 w-full">
      <div className="items-center justify-center w-full inline-flex cursor-pointer gap-20">
        <button className="inline-flex h-12 w-12 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            width="27"
            viewBox="0 0 384 512"
          >
            <path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" />
          </svg>
        </button>
        <button className="inline-flex h-12 w-12 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            width="27"
            viewBox="0 0 576 512"
          >
            <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
          </svg>
        </button>
        <button className="inline-flex h-12 w-12 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            width="27"
            viewBox="0 0 448 512"
          >
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Footer;
