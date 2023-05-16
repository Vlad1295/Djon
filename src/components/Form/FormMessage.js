import React from "react";
import { Field, Form, Formik } from "formik";

type TNewMessageBody = {
  newMessageBody: string,
};
export const FormMessage = (props: any) => {
  const addNewMessageBody = (values: TNewMessageBody) => {
    props.sendMessage(values.newMessageBody);
  };
  return (
    <Formik
      initialValues={{
        newMessageBody: "",
      }}
      onSubmit={addNewMessageBody}
    >
      <Form>
        <Field
          name="newMessageBody"
          id="newMessageBody"
          placeholder="Write a message..."
        />
        <button type="submit">Отправить</button>
      </Form>
    </Formik>
  );
};
