import React from "react";
import SingleBlogPic3 from "../../../assets/photo-3.png";
import ViewIcon from "../../../assets/view-icon.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
export default function BestPosts() {
  return (
    <div className="wrap-post">
      <LazyLoadImage
        className="best-single-blog-img"
        src={SingleBlogPic3}
        alt="blog-pic"
        effect="opacity"
        delayTime="1000"
      />
      <div className="single-post-info">
        <h2 className="single-blog-title">
          ВОЗ: молодые жители
          <br /> Европы стали меньше
          <br /> курить
        </h2>
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
      </div>
    </div>
  );
}
