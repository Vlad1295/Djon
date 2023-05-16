import react from "react";
import { addPostActionCreater } from "../../Redux/Reducer/profilePageReducer";
import MyPosts from "./Post";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    pos: state.profilePage.pos,
    isAuth: state.auth.isAuth,
  };
};

const MyPostsContainer = connect(mapStateToProps, { addPostActionCreater })(
  MyPosts
);
export default MyPostsContainer;
