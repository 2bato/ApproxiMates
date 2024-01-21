import React, {useState} from "react";
import hingeLogo from "./Images/hingeLogo.png";
import CommentButton from "./CommentButton";


function PopupInput(props) {
  const [title, setTitle] = useState("Post Title Here");
  const [body, setBody] = useState("Post Body Here");

  return (
    <div className="border-2 rounded-3xl m-5 border-black">
      <div>
        <div className="text-left ml-3 mt-2">
          <h1 className="text-gray-400 font-bold mb-2">{props.type}</h1>
          <div className="">
            <div className="inline-flex items-center mb-2 font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <h2 className="ml-2 font-bold">{props.location}</h2>
            </div>
            <h3 className="text-lg fond-semibold">{props.title}</h3>
            <input type = 'text' value = {title} onChange={(e) => setTitle(e.target.value)}/>
          </div>
        </div>
        <div className="mt-2 justify-center m-3 text-left">
          <p>{props.body}</p>
          <input type = 'text' value = {body} onChange={(e) => setBody(e.target.value)}/>
        </div>

        <div className="justify-center">
            <img src={props.image}/>
        </div>

      </div>

      <div className="flex row items-center gap-2 ml-3 mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="14"
          width="14"
          viewBox="0 0 512 512"
        >
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
        </svg>
        <CommentButton/>
      </div>
    </div>
  );
}

export default PopupInput;
