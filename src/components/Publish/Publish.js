import React, { useState } from "react";
import style from "./Publish.module.css";
import { db } from "../../firebase";
import { collection, addDoc } from "@firebase/firestore";
import { Link } from "react-router-dom";

export default function Publish() {
  const postsCollectionRef = collection(db, "posts");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");

  const [redirect, setRedirect] = useState(false);

  const PublishPost = async (e) => {
    e.preventDefault();
    if (!title || !body || !image) {
      alert("Please fill all froms");
    } else {
      await addDoc(postsCollectionRef, {
        title: title,
        description: body,
        image: image,
      });
      console.log(postsCollectionRef);
      setRedirect(true);
    }
  };

  return (
    <div className={style.publish_wrap}>
      <h1>Настройки публикации </h1>
      <h3>Название</h3>
      <textarea
        type="text"
        className={style.title_input}
        placeholder="название публикации"
        onChange={(e) => setTitle(e.target.value)}
      ></textarea>{" "}
      <h3>Url изображения</h3>
      <input
        type="text"
        className={style.title_input}
        placeholder="Url изображения"
        onChange={(e) => setImage(e.target.value)}
      ></input>
      <h3>Описание</h3>
      <textarea
        type="text"
        className={style.body_input}
        placeholder="расскажите о ..."
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <div>
        <button onClick={PublishPost} className={style.post_btn} type="submit">
          Post
        </button>
      </div>
      {redirect && (
        <div style={{ marginTop: "40px" }}>
          <h1 style={{ color: "#4fc922", marginBottom: "40px" }}>
            Succesfully Published{" "}
          </h1>
          <h1>
            <Link style={{ color: "#1b5bf7" }} to="/">
              Back Home{" "}
            </Link>
          </h1>
        </div>
      )}
    </div>
  );
}
