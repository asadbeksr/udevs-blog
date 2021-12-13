import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import prfoilePic from "../../assets/ProfilePic.png";
import style from "./Sign.module.css";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";

export default function Login() {
  const [IsOpen, setIsOpen] = useState(false);
  const [IsRegOpen, setRegIsOpen] = useState(false);
  const [IsLogged, setIsLogged] = useState(false);
  const [User, setUser] = useState({});
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPass, setRegisterPass] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  //local storage
  // const isAuthorized = localStorage.getItem("isAuthorized");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  // Regiter
  async function registerUser() {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPass
      );
      console.log(user);
      setRegIsOpen(false);
      setIsLogged(true);
      localStorage.setItem("isAuthorized", true);
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  }
  //Login
  async function loginUser() {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPass
      );
      console.log(user);
      setIsOpen(false);
      setIsLogged(true);
      localStorage.setItem("isAuthorized", true);
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  }
  //Log Out
  async function logoutUser() {
    await signOut(auth);
    localStorage.removeItem("isAuthorized");
  }

  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      {User && !IsLogged && (
        <button
          onClick={() => {
            setIsOpen(true);
          }}
          className="login-btn"
        >
          Войти
        </button>
      )}
      {User && IsLogged && (
        <div className="logged-in-wrap">
          <div className={style.dropdown}>
            <img src={prfoilePic} alt="profile-pic" className="profile-img" />
            <div className={style.dropdown_items}>
              <Link to="/profile">{User.email}</Link>
              <Link to="/"> Все публикации</Link>
              <Link to="/publish">Написать публикацию</Link>
              <Link to="/">Избранные</Link>
              <Link onClick={logoutUser} to="/">
                Выйти
              </Link>
            </div>
          </div>
        </div>
      )}
      {!User && (
        <button
          onClick={() => {
            setRegIsOpen(true);
          }}
          className="register-btn"
        >
          Регистрация
        </button>
      )}

      <div className="modal">
        <h1>Login</h1>
      </div>
      <div>
        <div className={`modal ${IsOpen ? "visible" : ""}`}>
          <button id="close" onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h1>Вход </h1>
          <form className="form" onSubmit={onSubmit}>
            <input
              onChange={(e) => setLoginEmail(e.target.value)}
              type="text"
              placeholder="Email"
            />
            <input
              onChange={(e) => {
                setLoginPass(e.target.value);
              }}
              type="password"
              placeholder="Пароль"
            />
            <button className="login-btn" type="submit" onClick={loginUser}>
              Войти
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                setRegIsOpen(true);
              }}
            >
              Нет аккаунта? Регистрация
            </button>
          </form>
        </div>
        {IsOpen && (
          <div
            onClick={() => {
              setIsOpen(false);
            }}
            className="overlay"
          />
        )}
      </div>

      <div>
        <div className={`modal ${IsRegOpen ? "visible" : ""}`}>
          <button id="close" onClick={() => setRegIsOpen(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h1>Регистрация </h1>
          <form className="form" onSubmit={onSubmit}>
            <input
              onChange={(e) => setRegisterEmail(e.target.value)}
              type="text"
              placeholder="Email"
            />
            <input
              onChange={(e) => setRegisterPass(e.target.value)}
              type="password"
              placeholder="Пароль"
            />
            <button onClick={registerUser} className="login-btn">
              Регистрация
            </button>
            <button
              onClick={() => {
                setRegIsOpen(false);
                setIsOpen(true);
              }}
            >
              Есть аккаунт ? Вход
            </button>
          </form>
        </div>
        {IsRegOpen && (
          <div
            onClick={() => {
              setIsOpen(false);
            }}
            className="overlay"
          />
        )}
      </div>
    </div>
  );
}
