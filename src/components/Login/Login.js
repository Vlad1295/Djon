import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import style from "./Login.module.css";

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
      onSubmit={values=>props.Submit(values)}
    >
      {({ errors, touched }) => (
        <Form>
          <div className={style.box}>
            <h1>Добро пожаловать!!!</h1>
            <label>Email</label>
            <Field
              name="email"
              placeholder="email"
              className={
                errors.email && touched.email ? style.inputlogin : null
              }
            />
            {errors.email && touched.email && (
              <div className={style.errors}>{errors.email} </div>
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

            <Field component="input" name="rememberMe" type="checkbox" />
            <button type="submit">Send</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
