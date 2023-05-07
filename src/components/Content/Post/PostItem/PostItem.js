import react from "react";
import s from "./PostItem.module.css";

const PostItem = (props) => {
  return (
    <div className={s.item}>
      <img src="../../../../960.jpeg" />
      <div>
        {props.message}
        <span>{props.like}</span>
      </div>
    </div>
  );
};
export default PostItem;
