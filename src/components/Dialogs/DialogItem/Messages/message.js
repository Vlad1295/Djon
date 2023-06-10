
import m from "./message.module.css";

function Message(props) {
  return <div className={m.message}>{props.message}</div>;
}
export default Message;
