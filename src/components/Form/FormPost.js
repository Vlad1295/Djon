import React from "react";
import { Field, Form, Formik } from "formik";

type TNewPostBody = {
  newPostBody: string,
};
export const FormPost = (props: any) => {
  const addNewPostBody = (values: TNewPostBody) => {
    props.addPostt(values.newPostBody);
  };
  return (
    <Formik
      initialValues={{
        newPostBody: "",
      }}
      onSubmit={addNewPostBody}
    >
      <Form>
        <Field
          name="newPostBody"
          id="newPostBody"
          placeholder="Write a post..."
        />
        <button type="submit">Отправить</button>
      </Form>
    </Formik>
  );
};
