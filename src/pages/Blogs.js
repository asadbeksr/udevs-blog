import "../App.css";
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SinglePost from "../components/SinglePost/SinglePost";

export default function Blogs() {
  return (
    <div>
      <>
        <Header />
        <div className="app-wrap">
          <SinglePost />
        </div>
        <Footer />
      </>
    </div>
  );
}
