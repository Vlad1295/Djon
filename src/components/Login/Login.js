import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import style from "./Login.module.css";
import {createrField} from "./LoginContainer" 

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Обязательно к заполнению"),
  password: Yup.string().required("Обязательно к заполнению"),
});
export const Login = (props) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        rememberMe: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => props.Submit(values)}
    >
      {({ errors, touched }) => (
        <Form>
          <div className={style.box}>
            <h1>Добро пожаловать!!!</h1>
            <label>Email</label>
            {createrField(
              "email",
              "Email",
              errors.email && touched.email ? style.inputlogin : null
            )}

            {errors.email && touched.email && (
              <div className={style.errors}>{errors.email} </div>
            )}
            <label>Password</label>
            {createrField(
              "password",
              "Password",
              errors.password && touched.password ? style.inputpassword : null,
              { type: "password" }
            )}

            {errors.password && touched.password && (
              <div className={style.errorspassword}>{errors.password}</div>
            )}
            {createrField("rememberMe", null, null, { type: "checkbox" })}

            <button type="submit">Send</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
