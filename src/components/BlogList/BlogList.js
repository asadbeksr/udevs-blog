import React from "react";
import BlogListItem from "../BlogLitItem/BlogListItem";
import Pagination from "../Pagination/Pagination";
import "./BlogList.css";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "@firebase/firestore";

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  useEffect(() => {
    const postsCollectionRef = collection(db, "posts");
    setLoading(true);
    function getPostsfromFirebase() {
      getDocs(postsCollectionRef).then((res) => {
        setPosts(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log(res);
      });
    }
    getPostsfromFirebase();
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
            src={item.image}
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
