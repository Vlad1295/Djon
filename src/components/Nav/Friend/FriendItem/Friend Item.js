import react from "react";
import fr from "./FriendItem.module.css";

function FriendItem(props) {
  return (
    <div className={fr.avaitem}>
      <img src={props.src} alt="каа" />
      <div>{props.name} </div>
    </div>
  );
}

export default FriendItem;
