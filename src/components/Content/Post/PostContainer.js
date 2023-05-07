import react from "react";
import React from "react";
import {
  updateNewPostActionCreater,
  addPostActionCreater,
} from "../../Redux/Reducer/profilePageReducer";
import MyPosts from "./Post";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
    pos: state.profilePage.pos,
    newPostText: state.profilePage.newPostText,
    isAuth: state.auth.isAuth
  };
};


const MyPostsContainer = connect(mapStateToProps, {addPostActionCreater, updateNewPostActionCreater})(MyPosts);
export default MyPostsContainer;
