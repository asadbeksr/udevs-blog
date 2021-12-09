import React from "react";
import "./BlogListItem.css";
import ViewIcon from "../../assets/view-icon.svg";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function BlogListItem(props) {
  return (
    <div className="single-blog-wrap">
      <Link to={`/post/${props.id}`}>
        <LazyLoadImage
          src={props.src}
          className="single-blog-img"
          alt="blog-pic"
          delayTime="1000"
          effect="blur"
        />
      </Link>
      <div className="single-post-info">
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
        <Link to={`/post/${props.id}`} href="!#">
          <h2 className="single-blog-title">{props.PostTitle}</h2>
        </Link>
      </div>
    </div>
  );
}
