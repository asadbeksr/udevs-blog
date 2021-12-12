import React from "react";
import "./Header.css";
import UdevsLogo from "../../assets/udevs-logo.svg";
import Notifications from "../../assets/notifications.svg";
import CountNot from "../../assets/num1.svg";
import { Link } from "react-router-dom";
import Sign from "../Register/Sign";

export default function Header() {
  // const [open, setOpen] = useState(false);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const isAuthorized = localStorage.getItem("isAuthorized");

  // function onSubmit(event) {
  //   event.preventDefault();
  //   const key = {
  //     email: "udevs@gmail.com",
  //     password: "udevs",
  //   };
  //   if (key.email === email && key.password === password) {
  //     localStorage.setItem("isAuthorized", true);
  //     setOpen(false);
  //   } else {
  //     alert("Incorrect Password or Email");
  //   }
  // }

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
          {/* {isAuthorized && (
            <button
              onClick={() => {
                localStorage.removeItem("isAuthorized");
                window.location.reload(false);
              }}
              id="logut-btn"
            >
              Выйти
            </button>
          )}{" "}
          {!isAuthorized && (
            <button onClick={() => setOpen(true)} id="login_btn">
              Войти
            </button>
          )}
        </div>
        <div className={`modal ${open ? "visible" : ""}`}>
          <button id="close" onClick={() => setOpen(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h1>Вход на udevs news</h1>
          <form onSubmit={onSubmit} autoComplete="off">
            <input
              onChange={(event) => setEmail(event.target.value)}
              type="text"
              name="email"
              placeholder="Email"
            />
            <input
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              name="password"
              placeholder="Пароль"
              autoComplete="on"
            />
            <button id="login-btn" type="submit">
              Войти
            </button>
          </form>
        </div>
        {open && <div className="overlay" />} */}
          <Sign />
        </div>
      </div>
    </div>
  );
}
