import React from "react";
import "./Header.css";
import UdevsLogo from "../../assets/udevs-logo.svg";
import Notifications from "../../assets/notifications.svg";
import CountNot from "../../assets/num1.svg";
import { Link } from "react-router-dom";
import Sign from "../Register/Sign";

export default function Header() {
  return (
    <div className="header">
      <div className="wrap">
        <Link to="/">
          <img
            src={UdevsLogo}
            width="130"
            alt="udevs-logo-icon"
            className="logo-icon"
          />
        </Link>
        <div className="left-nav">
          <img
            className="not-icon"
            src={Notifications}
            width="25"
            alt="notification-icon"
          />
          <img
            className="count-notification"
            src={CountNot}
            width="28"
            alt="new-notification-icon"
          />

          <Sign />
        </div>
      </div>
    </div>
  );
}
