import React from "react";
import "./SinglePost.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import BestPosts from "./aside/BestPosts";
//Pics
import ViewIcon from "../../assets/view-icon.svg";
import ProfilePic from "../../assets/ProfilePic.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { db } from "../../firebase";
import { collection, getDocs } from "@firebase/firestore";

export default function SinglePost() {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  const postsCollectionRef = collection(db, "posts");
  useEffect(() => {
    function getPostsfromFirebase() {
      getDocs(postsCollectionRef)
        .then((res) => {
          setPosts(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getPostsfromFirebase();
  });

  return (
    <div className="single-post-wrap">
      <Profile />
      <div className="main-post">
        <div>
          {posts.map((post) => {
            if (post.id === id) {
              return (
                <div key={post.id}>
                  <LazyLoadImage
                    src={post.image}
                    alt="single-post-pic"
                    className="single-post-pic"
                    effect="opacity"
                    delayTime="1000"
                  />
                </div>
              );
            }
          })}
        </div>

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
        <div>
          {posts.map((post) => {
            if (post.id === id) {
              return (
                <div>
                  <h1 className="main-post-title">{post.title}</h1>
                  <p className="p-body">{post.description}</p>
                </div>
              );
            }
          })}
        </div>
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
      <LazyLoadImage
        src={ProfilePic}
        alt="profile-pic"
        effect="opacity"
        delayTime="1000"
      />

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
