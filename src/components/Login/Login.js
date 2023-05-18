import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import style from "./Login.module.css";

const validationSchema = Yup.object().shape({
  login: Yup.string().required("Обязательно к заполнению"),
  password: Yup.string().required("Обязательно к заполнению"),
});
export const Login = (props) => {
  const Submit = (values) => {
    console.log(values.login, values.password);
  };

  return (
    <Formik
      initialValues={{
        login: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={Submit}
    >
      {({ errors, touched }) => (
        <Form>
          <div className={style.box}>
            <h1>Добро пожаловать!!!</h1>
            <label>Email</label>
            <Field
              name="login"
              placeholder="Login"
              className={
                errors.login && touched.login ? style.inputlogin : null
              }
            />
            {errors.login && touched.login && (
              <div className={style.errors}>{errors.login} </div>
            )}
            <label>Password</label>
            <Field
              name="password"
              type="password"
              placeholder="Password"
              className={
                errors.password && touched.password ? style.inputpassword : null
              }
            />
            {errors.password && touched.password && (
              <div className={style.errorspassword}>{errors.password}</div>
            )}

            <button type="submit">Send</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
