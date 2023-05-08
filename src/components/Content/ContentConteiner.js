import React, { useEffect } from "react";
import Content from "./Content";
import axios, * as others from "axios";
import { connect } from "react-redux";
import {
  setUserProfile,
  usersProfileThunk,
} from "../Redux/Reducer/profilePageReducer";
import { useParams } from "react-router-dom";
import { withAuthNavigate } from "../../HOC/withAuthNavigate";
import { compose } from "redux";

function ContentConteiner(props) {
  const { userId } = useParams();
  let UserId = userId || 2;
  useEffect(() => {
    props.usersProfileThunk(UserId);
  }, [UserId]);

  return (
    <div>
      <Content profile={props.profile} />
    </div>
  );
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default compose(
  connect(mapStateToProps, { setUserProfile, usersProfileThunk })
 , withAuthNavigate
  )(ContentConteiner )



