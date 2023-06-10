import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { createrField } from "../../Login/LoginContainer";

const ProfileDataForm = (props) => {
  return (
    <Formik
      initialValues={{
        fullName: props.profile.fullName,
        lookingForAJob: props.profile.lookingForAJob,
        lookingForAJobDescription: props.profile.lookingForAJobDescription,
        aboutMe: props.profile.aboutMe,
      }}
      onSubmit={(values) => props.Submit(values)}
    >
      <Form>
        <div>
          <b>Full name:</b>
          {createrField("fullName", "Full name", null, { type: "textarea" })}
          <b>Looking for a job:</b>
          {createrField("lookingForAJob", "Job", null, { type: "checkbox" })}
          <b>My professional skills:</b>
          {createrField(
            "lookingForAJobDescription",
            "My professional skills",
            null,
            { type: "textarea" }
          )}
          <b>About me:</b>
          {createrField("aboutMe", "About me", null, { type: "textarea" })}
          <b>Contacts:</b>
          {Object.keys(props.profile.contacts).map((key) => {
            return (
              <div>
                <b>{key}:
                {createrField (`contacts.${key}` , "place hold", null, {
                  type: "textarea",
                })}</b>
              </div>
            );
          })}
          <button type="submit">Save</button>
        </div>
      </Form>
    </Formik>
  );
};
export default ProfileDataForm;
