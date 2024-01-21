import "./App.css";

import Header from "./components/Header";
import PostBox from "./components/PostBox";
import CreatePost from "./components/CreatePost";
import { useEffect, useState } from "react";
import axios from "axios";
import React, { useContext } from "react";
import Pin from "./components/Images/marker2.png";
import House from "./components/Images/house2.png";
import Profile from "./components/Images/person2.png";
import { TabContext } from "./components/Context/Tabs";

function goToTop() {
  window.scrollTo(0, 0);
}

function App() {
  const [posts, setPosts] = useState([]);
  const { activeTab, switchTab } = useContext(TabContext);
  const homePosts = posts.filter(post => post.home === true);
  const currentPosts = posts.filter(post => post.home === false);


  const TabContent1 = () => (
    <div>
      <Header />
      <PostBox posts={currentPosts} />
      <CreatePost onAddNewPost={addPostHandler} />
    </div>
  );

  const TabContent2 = () => (
    <div>
      <Header />
      <PostBox posts={homePosts} />
      <CreatePost onAddNewPost={addPostHandler} />
    </div>
  );

  const TabContent3 = () => {
    return (
      <div className="mt-2 ml-2 mr-2">
        <ProfilePage />
      </div>
    );
  };

  const tabClickHandler = (tabIndex) => {
    switchTab(tabIndex);
  };

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

  const editPostHandler = (postId, updatedPostData) => {
    axios
      .put(`http://localhost:5000/api/post/${postId}`, updatedPostData)
      .then((res) => {
        fetchPosts();
      })
      .catch((err) => {
        console.log("Error in editPostHandler", err);
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
      <div className="mb-20">
        {activeTab === 0 && <TabContent1 />}
        {activeTab === 1 && <TabContent2 />}
        {activeTab === 2 && <TabContent3 />}
      </div>
      <div className="bg-white fixed bottom-0 left-0 w-full">
        <div className="mt-2 items-center justify-center w-full inline-flex cursor-pointer gap-12">
          <button
            key={0}
            className={
              0 === activeTab
                ? "rounded-lg bg-cover bg-gray-200 inline-flex h-12 w-12 items-center justify-center"
                : "inline-flex h-12 w-12 items-center justify-center"
            }
            onClick={() => {
              tabClickHandler(0);
              goToTop();
            }}
          >
            <img class="h-10 w-10" src={Pin} alt="Logo" />
          </button>
          <button
            key={1}
            className={
              1 === activeTab
                ? "rounded-lg bg-cover bg-gray-200 inline-flex h-12 w-12 items-center justify-center"
                : "inline-flex h-12 w-12 items-center justify-center"
            }
            onClick={() => {
              tabClickHandler(1);
              goToTop();
            }}
          >
            <img class="h-10 w-10" src={House} alt="Logo" />
          </button>
          <button
            key={2}
            className={
              2 === activeTab
                ? "rounded-lg bg-cover bg-gray-200 inline-flex h-12 w-12 items-center justify-center"
                : "inline-flex h-12 w-12 items-center justify-center"
            }
            onClick={() => {
              tabClickHandler(2);
              goToTop();
            }}
          >
            <img class="h-10 w-10" src={Profile} alt="Logo" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
