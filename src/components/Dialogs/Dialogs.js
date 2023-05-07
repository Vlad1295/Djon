import react from "react";
import d from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import Message from "./DialogItem/Messages/message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import { Navigate } from "react-router-dom";


function Dialog(props) {
  let dialogs = props.messagePage.dialogdata.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messages = props.messagePage.messagedata.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let newMesBody = props.messagePage.newMessageBody;

  let onSendMesClick = () => {
    props.sendMessage();
  };

  let onNewMesChange = (e) => {
    let body = e.target.value;
    props.newMessageBody(body);
  };
  
  return (
    <div className={d.dialogs}>
      <div className={d.dialogItems}>{dialogs}</div>
      <div className={d.messages}>
        {messages}
        <div>
          <textarea
            onChange={onNewMesChange}
            value={props.newMesBody}
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMesClick}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
