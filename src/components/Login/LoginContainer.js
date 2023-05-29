import React from "react";
import { connect } from "react-redux";
import { loginThunk } from "../Redux/Reducer/authReducer";
import { Login } from "./Login";
import { Navigate } from "react-router-dom";
import { Field } from "formik"

export const createrField = (name, placeholder, style, props) => (
  <div>
    <Field name={name} placeholder={placeholder} className={style} {...props} />
  </div>
);

const LoginContainer = (props) => {
  const Submit = (values) => {
    props.loginThunk(values.email, values.password, values.rememberMe)
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
