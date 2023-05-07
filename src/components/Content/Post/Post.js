import react from "react";
import pa from "./Post.module.css";
import PostItem from "./PostItem/PostItem";
import React from "react";
import { Navigate } from "react-router-dom";

function MyPosts(props) {
  let postsElements = props.pos.map((p) => (
    <PostItem message={p.message} like={p.like} />
  ));

  let newPostElement = React.createRef();

  let addPostt = () => {
    props.addPostActionCreater();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostActionCreater(text);
  };

  return (
    <div className={pa.postBlack}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText}
          ></textarea>
        </div>
        <div>
          <button onClick={addPostt}>Добавить </button>
        </div>
      </div>
      <div className={pa.post}>{postsElements}</div>
    </div>
  );
}

export default MyPosts;
