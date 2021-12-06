import React from "react";
import "./Header.css";
import UdevsLogo from "../../assets/udevs-logo.svg";
import "../Menu/Menu.css";
import { Link } from "react-router-dom";
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
        <div className="second-menu-btns">
          <button>Вес потоки</button>
          <button>Разработка</button>
          <button>Администрирование</button>
          <button>Дизайн</button>
          <button>Менеджмент</button>
          <button>Маркетинг</button>
          <button>Научпоп</button>
        </div>
        <div className="left-nav">
          <button>Войти</button>
        </div>
      </div>
    </div>
  );
}
