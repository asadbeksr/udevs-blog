import React from "react";
import "./Header.css";
import UdevsLogo from "../../assets/udevs-logo.svg";
import Notifications from "../../assets/notifications.svg";
import CountNot from "../../assets/num1.svg";
export default function Header() {
  return (
    <div className="header">
      <div className="wrap">
        <img src={UdevsLogo} width="130" alt="udevs-logo-icon" />
        <div className="left-nav">
          <img src={Notifications} width="25" alt="notification-icon" />
          <img
            className="count-notification"
            src={CountNot}
            width="28"
            alt="new-notification-icon"
          />
          <button>Войти</button>
        </div>
      </div>
    </div>
  );
}
