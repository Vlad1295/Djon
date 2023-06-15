import React from "react";
import { connect } from "react-redux";
import axios, * as others from "axios";
import { setUserData, logoutThunk } from "../Redux/Reducer/authReducer.ts";
import Header from "./Hello";
import { usersAPI } from "../../API/getUsers";
import { withRouter } from "../../HOC/withRouter";

class HelloContainer extends React.Component {
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
  
  logoutThunk,
})(withRouter(HelloContainer));
