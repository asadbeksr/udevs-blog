import React from "react";
import "./Menu.css";
export default function Menu() {
  return (
    <div className="menu-btns">
      <button className="active-btn">Вес потоки</button>
      <button>Разработка</button>
      <button>Администрирование</button>
      <button>Дизайн</button>
      <button>Менеджмент</button>
      <button>Маркетинг</button>
      <button>Научпоп</button>
    </div>
  );
}
