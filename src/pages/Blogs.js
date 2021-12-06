import "../App.css";
import React from "react";
import SecondHeader from "../components/Header/SecondHeader";
import Footer from "../components/Footer/Footer";
import SinglePost from "../components/SinglePost/SinglePost";

export default function Blogs() {
  return (
    <div>
      <>
        <SecondHeader />
        <div className="app-wrap">
          <SinglePost />
        </div>
        <Footer />
      </>
    </div>
  );
}
