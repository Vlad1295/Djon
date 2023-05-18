import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import style from "./PostForm.module.css";

const validationSchema = Yup.object().shape({
  newPostBody: Yup.string().min(2, "Минимум 2 символа"),
});

export const FormPost = (props) => {
  const addNewPostBody = (values) => {
    props.addPostt(values.newPostBody);
  };
  return (
    <Formik
      initialValues={{
        newPostBody: "",
      }}
      validationSchema={validationSchema}
      onSubmit={addNewPostBody}
    >
      {({ errors, touched }) => (
        <Form>
          <Field
            name="newPostBody"
            id="newPostBody"
            placeholder="Write a post..."
            className={errors.newPostBody ? style.inputpost : null}
          />
          {errors.newPostBody && (
            <div className={style.errorspost}>{errors.newPostBody} </div>
          )}

          <button type="submit">Отправить</button>
        </Form>
      )}
    </Formik>
  );
};
