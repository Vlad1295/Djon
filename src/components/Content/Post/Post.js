import style from "./Post.module.css";
import PostItem from "./PostItem/PostItem";
import React from "react";
import { Navigate } from "react-router-dom";
import { FormPost } from "../../Form/FormPost";



function MyPosts(props) {
  let postsElements = props.pos.map((p) => (
    <PostItem message={p.message} like={p.like} />
  ));

  return (
    <div className={style.postBlack}>
      <h3>My posts</h3>
      <div className={style.post}>{postsElements}</div>
      <div>
        <FormPost addPostt={props. addPostActionCreater} />
      </div>
    </div>
  );
}

export default MyPosts;
