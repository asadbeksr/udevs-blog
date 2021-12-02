import React from "react";
import BlogListItem from "../BlogLitItem/BlogListItem";
import "./BlogList.css";
import SingleBlogPic1 from "../../assets/photo-1.png";
import SingleBlogPic2 from "../../assets/photo-2.png";
import SingleBlogPic3 from "../../assets/photo-3.png";

export default function BlogList() {
  return (
    <div className="blog-list">
      <BlogListItem src={SingleBlogPic1} />
      <BlogListItem src={SingleBlogPic2} />
      <BlogListItem src={SingleBlogPic3} />
      <BlogListItem src={SingleBlogPic1} />

      <BlogListItem src={SingleBlogPic2} />
      <BlogListItem src={SingleBlogPic3} />
      <BlogListItem src={SingleBlogPic1} />
      <BlogListItem src={SingleBlogPic2} />

      <BlogListItem src={SingleBlogPic3} />
      <BlogListItem src={SingleBlogPic1} />
      <BlogListItem src={SingleBlogPic2} />
      <BlogListItem src={SingleBlogPic3} />
    </div>
  );
}
