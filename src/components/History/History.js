import React from "react";
import HistoryItem from "../HistoryItem/HistoryItem";
import "./History.css";
import HistoryPic1 from "../../assets/photo-1.png";
import HistoryPic2 from "../../assets/photo-2.png";
import HistoryPic3 from "../../assets/photo-3.png";
export default function History() {
  return (
    <div className="history-wrap">
      <h1 className="history-title">История последних новостей</h1>
      <div className="histories">
        <HistoryItem src={HistoryPic1} />
        <HistoryItem src={HistoryPic2} />
        <HistoryItem src={HistoryPic3} />
        <HistoryItem src={HistoryPic1} />
        <HistoryItem src={HistoryPic2} />
      </div>
    </div>
  );
}
