import React from "react";
import BlogListItem from "../BlogLitItem/BlogListItem";
import "./BlogList.css";
import SingleBlogPic1 from "../../assets/photo-1.png";
// import SingleBlogPic2 from "../../assets/photo-2.png";
// import SingleBlogPic3 from "../../assets/photo-3.png";
import axios from "axios";
import { useEffect, useState } from "react";
export default function BlogList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => setPosts(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="blog-list">
      {posts.map((item, id) => (
        <BlogListItem
          src={SingleBlogPic1}
          PostTitle={item.title}
          key={item.id}
          id={item.id}
        ></BlogListItem>
      ))}
    </div>
  );
}
