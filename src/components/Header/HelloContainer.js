import React from "react";
import { connect } from "react-redux";
import axios, * as others from "axios";
import { setUserData, registrationMeThunk } from "../Redux/Reducer/authReducer";
import Hello from "./Hello";
import { usersAPI } from "../../API/getUsers";

class HelloContainer extends React.Component {
  componentDidMount() {
   this.props.registrationMeThunk()
  } 
  render() {
    return <Hello {...this.props} />;
  }
}


const mapStateToprops = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapStateToprops, { setUserData,registrationMeThunk })(HelloContainer);
