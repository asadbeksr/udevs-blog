import React from "react";
import "./SinglePost.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import BestPosts from "./aside/BestPosts";
//Pics
import postPic from "../../assets/PostPic.png";
import ViewIcon from "../../assets/view-icon.svg";
import ProfilePic from "../../assets/ProfilePic.png";

export default function SinglePost() {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getPosts();
  });

  function getPosts() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(({ data }) => {
        setPosts(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="single-post-wrap">
      <Profile />
      <div className="main-post">
        <img src={postPic} alt="single-post-pic" className="single-post-pic" />
        <p className="photo-by">Фото: Dilorom Alieva</p>
        <div className="blog-time-stats">
          <span>
            <p>
              18:26 11.01.2021 |
              <span>
                {(/ /g, "\u00a0")} <img src={ViewIcon} alt="view-icon" />{" "}
                {(/ /g, "\u00a0")}
                365
              </span>
            </p>
          </span>
        </div>
        <h1 className="main-post-title"> {posts.title}</h1>
        <p className="p-body"> {posts.body}</p>
      </div>
      <div className="best-posts-wrap">
        <h2>ЛУЧШИЕ БЛОГИ</h2>
        <BestPosts />
        <BestPosts />
        <BestPosts />
        <BestPosts />
      </div>
    </div>
  );
}

//Profile component
function Profile() {
  return (
    <div className="profile-wrap">
      <img src={ProfilePic} alt="profile-pic" />
      <h2>Dilorom Alieva</h2>
      <div className="profile-btns">
        <button>Follow</button>
        <button>
          <FontAwesomeIcon icon={faBookmark} />
        </button>
      </div>
    </div>
  );
}
