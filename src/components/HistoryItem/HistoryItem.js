import React from "react";
import "./HistoryItem.css";
export default function HistoryItem(props) {
  return (
    <div className="single-history">
      <div className="img-wrap">
        <img src={props.src} width="100%" height="100%" />
      </div>
    </div>
  );
}
