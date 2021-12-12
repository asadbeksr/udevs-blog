import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  async function registerHandler() {
    try {
      // eslint-disable-next-line
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPass
      );
      setRegIsOpen(false);
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  }

  async function loginHandler() {
    try {
      // eslint-disable-next-line
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPass
      );
      closeHandler();
      setIsLogged(true);
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  }

  async function logoutHandler() {
    await signOut(auth);
  }

  function modalHandler() {
    setIsOpen(true);
  }
  function regModalHandler() {
    setRegIsOpen(true);
  }

  function closeHandler() {
    setIsOpen(false);
  }

  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      {User && !IsLogged && (
        <button onClick={modalHandler} className="login-btn">
          Войти
        </button>
      )}
      {User && IsLogged && (
        <button onClick={logoutHandler} className="logout-btn">
          Выйти
        </button>
      )}
      {!User && (
        <button onClick={regModalHandler} className="register-btn">
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
            <button className="login-btn" type="submit" onClick={loginHandler}>
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
        {IsOpen && <div onClick={closeHandler} className="overlay" />}
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
            <button onClick={registerHandler} className="login-btn">
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
        {IsRegOpen && <div onClick={closeHandler} className="overlay" />}
      </div>
    </div>
  );
}
