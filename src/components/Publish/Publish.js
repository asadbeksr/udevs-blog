import React from "react";
import style from "./Publish.module.css";
export default function Publish() {
  return (
    <div className={style.publish_wrap}>
      <h1>Настройки публикации </h1>
      <h3>Название</h3>
      <textarea
        type="text"
        className={style.title_input}
        placeholder="название публикации"
      ></textarea>

      <h3>Описание</h3>
      <textarea
        type="text"
        className={style.body_input}
        placeholder="расскажите о ..."
      ></textarea>
      <div>
        <button className={style.post_btn} type="submit">
          Post
        </button>
      </div>
    </div>
  );
}
