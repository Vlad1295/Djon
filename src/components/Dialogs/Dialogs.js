import react from "react";
import d from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import Message from "./DialogItem/Messages/message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import { Navigate } from "react-router-dom";
import { FormMessage } from "../Form/FormMessage";

function Dialog(props) {
  let dialogs = props.messagePage.dialogdata.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messages = props.messagePage.messagedata.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <div className={d.dialogs}>
      <div className={d.dialogItems}>{dialogs}</div>
      <div className={d.messages}>
        {messages}
          <div>
            <FormMessage sendMessage={props.sendMessage} />
          </div>
      </div>
    </div>
  );
}

export default Dialog;
