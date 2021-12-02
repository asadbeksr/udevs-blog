import React from "react";
import "./BlogListItem.css";
import ViewIcon from "../../assets/view-icon.svg";

export default function BlogListItem(props) {
  return (
    <div className="single-blog-wrap">
      <img src={props.src} alt="blog-pic" width="350" height="290" />
      <div className="blog-time-stats">
        <span>
          <p>
            18:26 11.01.2021 |{" "}
            <span>
              <img src={ViewIcon} alt="view-icon" /> 365
            </span>
          </p>
        </span>
      </div>
      <h2 className="single-blog-title">
        ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....
      </h2>
    </div>
  );
}
