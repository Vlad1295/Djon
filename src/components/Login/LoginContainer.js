import React from "react";
import { connect } from "react-redux";
import { loginThunk } from "../Redux/Reducer/authReducer.ts";
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
    props.loginThunk(values.email, values.password, values.rememberMe, values.captcha)
  };
  if (props.isAuth) {
    return(
    <Navigate to={"/profile"} />) }
    
  
  return (
    <div>
      <Login captcha={props.captcha} 
      Submit={Submit} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    captcha:state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { loginThunk })(LoginContainer);
