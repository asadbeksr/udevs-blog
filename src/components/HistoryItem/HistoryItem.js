import React from "react";
import "./HistoryItem.css";
export default function HistoryItem(props) {
  return (
    <div className="border-wrap">
      <div className="border-wrap-white">
        <img className="his-pic" src={props.src} alt="story-img" />
      </div>
    </div>
  );
}
