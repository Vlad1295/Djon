import React from "react";
import { connect } from "react-redux";
import axios, * as others from "axios";
import {
  setUserData,
  registrationMeThunk,
  logoutThunk,
} from "../Redux/Reducer/authReducer";
import Header from "./Hello";
import { usersAPI } from "../../API/getUsers";

class HelloContainer extends React.Component {
  componentDidMount() {
    this.props.registrationMeThunk();
  }
  render() {
    return (
      <div>
        <Header {...this.props} />
      </div>
    );
  }
}

const mapStateToprops = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapStateToprops, {
  setUserData,
  registrationMeThunk,
  logoutThunk,
})(HelloContainer);
