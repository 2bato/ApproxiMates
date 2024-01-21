import React, { useState } from "react";

function goToTop() {
  window.scrollTo(0, 0);
}

const CreatePost = ({ onAddNewPost }) => {
  const [enteredType, setEnteredType] = useState("");
  const [enteredLocationType, setEnteredLocationType] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredComments, setEnteredComments] = useState([]);
  const [enteredLikes, setEnteredLikes] = useState(0);

  let currentLocation;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      currentLocation = latitude + "," + longitude;
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

  console.log(currentLocation);

  const typeChangeHandler = (event) => {
    setEnteredType(event.target.value);
  };

  const locationTypeChangeHandler = (event) => {
    setEnteredLocationType(event.target.value);
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const commentsChangeHandler = (event) => {
    setEnteredComments(
      event.target.value.split(",").map((comment) => comment.trim())
    );
  };

  const likesChangeHandler = (event) => {
    setEnteredLikes(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(currentLocation);

    const postData = {
      type: enteredType,
      locationType: enteredLocationType,
      title: enteredTitle,
      body: enteredBody,
      location: currentLocation,
      comments: enteredComments,
      likes: enteredLikes,
    };

    onAddNewPost(postData);

    setEnteredType("");
    setEnteredLocationType("");
    setEnteredTitle("");
    setEnteredBody("");
    setEnteredComments([]);
    setEnteredLikes(0);
  };

  return (
    <div className="border-2 rounded-3xl m-5 border-black">
      <div>
        <div className="text-left ml-3 mt-2">
          <div className="">
            <div className="inline-flex items-center mb-2 font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </div>
            <h3 className="text-lg fond-semibold"></h3>
          </div>

          <form onSubmit={submitHandler}>
            <div className="grid p-3 mr-2">
              <label>Post Type: </label>
              <input
                type="text"
                className="font-bold mb-2 border-2 border-black"
                onChange={typeChangeHandler}
              ></input>

              <label>Title: </label>
              <input
                type="text"
                className="font-bold mb-2 border-2 border-black"
                onChange={titleChangeHandler}
              ></input>

              <label>Description: </label>
              <textarea
                rows="4" 
                className="font-bold mb-2 border-2 border-black"
                onChange={bodyChangeHandler}
              ></textarea>

              <button
                onClick={goToTop}
                type="submit"
                className="justify-center mt-2 border-2 border-black w-20"
              >
                Post
                {console.log(currentLocation)}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
