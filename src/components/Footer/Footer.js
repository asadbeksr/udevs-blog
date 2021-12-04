import React from "react";
import UdevsLogo from "../../assets/udevs-logo.svg";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrap">
        <div className="col-2">
          <img src={UdevsLogo} width="90" alt="udevs-logo-footer" />
          <p className="f-info">
            Помощник в публикации статей, журналов. Список популярных
            международных конференций. Всё для студентов и преподавателей.
          </p>

          <p className="p-light ">
            Copyright © 2020. Udevs. All rights reserved.
          </p>
        </div>
        <div className="col">
          <p className="bold">Ресурсы</p>
          <p>Статьи</p>
          <p>Журналы</p>
          <p>Газеты</p>
          <p>Дипломы</p>
        </div>
        <div className="col">
          <p className="bold">О нас</p>
          <p>Контакты</p>
          <p>Помощь</p>
          <p>Заявки</p>
          <p>Политика</p>
        </div>
        <div className="col">
          <p className="bold">Помощь</p>
          <p>
            Часто задаваемые <br />
            вопросы
          </p>
        </div>
      </div>
    </div>
  );
}
