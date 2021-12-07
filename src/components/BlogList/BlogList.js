import React from "react";
import BlogListItem from "../BlogLitItem/BlogListItem";
import Pagination from "../Pagination/Pagination";
import "./BlogList.css";
import SingleBlogPic1 from "../../assets/photo-1.png";
import axios from "axios";
import { useEffect, useState } from "react";

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => setPosts(data))
      .catch((error) => {
        console.error(error);
      });
    setLoading(false);
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="blog-list">
        {currentPosts.map((item) => (
          <BlogListItem
            src={SingleBlogPic1}
            PostTitle={item.title}
            key={item.id}
            id={item.id}
            loading={loading}
          ></BlogListItem>
        ))}
      </div>
      <div className="pagination-wrap">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </>
  );
}
