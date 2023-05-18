import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import style from "./Message.module.css";

const validationSchema = Yup.object().shape({
  newMessageBody: Yup.string()
    .min(2, "Минимум 2 символа")
    .required("Обязательно к заполнению"),
});

export const FormMessage = (props) => {
  const addNewMessageBody = (values) => {
    props.sendMessage(values.newMessageBody);
    console.log(values.newMessageBody )
  };
  return (
    <Formik
      initialValues={{
        newMessageBody: "",
      }}
      validationSchema={validationSchema}
      onSubmit={addNewMessageBody}
    >
      {({ errors, touched }) => (
        <Form>
          <Field
            name="newMessageBody"
            id="newMessageBody"
            placeholder="Write a message..."
            className={
              touched.newMessageBody && errors.newMessageBody
                ? style.input
                : style.input1
            }
          />
          {errors.newMessageBody && touched.newMessageBody && (
            <div className={style.newMessageBody}>{errors.newMessageBody}</div>
          )}
          <button type="submit">Отправить</button>
        </Form>
      )}
    </Formik>
  );
};
