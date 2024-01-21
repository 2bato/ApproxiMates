import "./App.css";
import Footer from "./components/Footer";
import PostMain from "./components/PostMain";
import Header from "./components/Header";
import PostBox from "./components/PostBox";
import CreatePost from "./components/CreatePost";
import { useEffect, useState } from "react";
import axios from "axios";
import ProfilePage from "./components/ProfilePage";
import React from "react";
import FilterButtons from "./components/FilterButtons";
import { AuthProvider } from "react-auth-kit";
import { GoogleLogin } from "@react-oauth/google";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      const currentLocation = latitude + "," + longitude;
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

  const fetchPosts = () => {
    axios
      .get("http://localhost:5000/api/post")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log("Error from fetch posts");
      });
  };

  const addPostHandler = (post) => {
    axios
      .post("http://localhost:5000/api/post", post)
      .then(() => {
        fetchPosts();
      })
      .catch((err) => {
        console.log("Error in addPost");
      });
  };

  const removePostHandler = (postId) => {
    axios
      .delete(`http://localhost:5000/api/post/${postId}`)
      .then((res) => {
        fetchPosts();
      })
      .catch((err) => {
        console.log("Error in removePost");
      });
  };

  const placeholder = [
    {
      type: "Service",
      locationType: "Exact Location",
      title: "Pipe Bursted",
      body: "My Name is Andrew Qi Ming Fan and my pipe burst in my basement. I am sad but I love men",
      location: "49.266688,-123.2470016",
      comments: ["hooray", "yippee"],
      likes: 5,
    },
    {
      type: "Service",
      locationType: "Exact Location",
      title: "Pipe Bursted",
      body: "My Name is Andrew Qi Ming Fan and my pipe burst in my basement. I am sad but I love men",
      location: "49.266688,-123.2470016",
      comments: ["hooray", "yippee"],
      likes: 5,
    },
  ];

  return (
    <div className="App">
      <Header />
      <FilterButtons />
      {console.log(posts)}

      <PostBox posts={posts} />
      <CreatePost onAddNewPost={addPostHandler} />

      <div style={{ height: "50px" }}></div>

      <div className="fixed bottom-0 left-0 w-full mb-3">
        <Footer />
      </div>
    </div>
  );
}

export default App;
