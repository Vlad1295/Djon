import react from "react";
import s from "./ProfileInfo.module.css";

const Contact = ({ contact, contactValue = "hi" }) => {
  return (
    <div>
      <div className={s.contacts}>{contact}:{contactValue} </div>
    </div>
  );
};
export default Contact;
