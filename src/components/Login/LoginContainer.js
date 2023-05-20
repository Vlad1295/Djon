import React from "react";
import { connect } from "react-redux";
import { loginThunk } from "../Redux/Reducer/authReducer";
import { Login } from "./Login";
import { Navigate } from "react-router-dom";

const LoginContainer = (props) => {
  const Submit = (values) => {
    props.loginThunk(values.email, values.password, values.rememberMe);
  };
  if (props.isAuth) {
    return(
    <Navigate to={"/profile"} />) }
  return (
    <div>
      <Login Submit={Submit} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { loginThunk })(LoginContainer);
