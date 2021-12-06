import React from "react";
import "./HistoryItem.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function HistoryItem(props) {
  return (
    <div className="border-wrap">
      <div className="border-wrap-white">
        <LazyLoadImage
          className="his-pic"
          src={props.src}
          alt="story-img"
          delayTime="1000"
          effect="blur"
        />
      </div>
    </div>
  );
}
