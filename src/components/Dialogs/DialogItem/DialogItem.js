import react from "react";
import { NavLink } from "react-router-dom";
import d from "./DialogItem.module.css";

function DialogItem(props) {
  return (
    <div className={d.dialog}>
      <NavLink to={`/Dialog/${props.id}`} className={d.ttt}>
        {props.name}
      </NavLink>
    </div>
  );
}

export default DialogItem;
