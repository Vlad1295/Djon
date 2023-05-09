import React, { useEffect } from "react";
import Content from "./Content";
import axios, * as others from "axios";
import { connect } from "react-redux";
import {
  setUserProfile,
  usersProfileThunk,
  getUserStatusThunk,
  updateUserStatusThunk
} from "../Redux/Reducer/profilePageReducer";
import { useParams } from "react-router-dom";
import { withAuthNavigate } from "../../HOC/withAuthNavigate";
import { compose } from "redux";

function ContentConteiner(props) {
  const { userId } = useParams();
  let UserId =userId|| 28814;
  useEffect(() => {
    props.usersProfileThunk(UserId);
  }, [UserId]);
  props.getUserStatusThunk(UserId);

  return (
    <div>
      <Content updateUserStatusThunk={props.updateUserStatusThunk} status={props.status} profile={props.profile} />
    </div>
  );
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    usersProfileThunk,
    getUserStatusThunk,
    updateUserStatusThunk
  }),
  withAuthNavigate
)(ContentConteiner);
