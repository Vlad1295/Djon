import react from "react";
import fr from "./Friend.module.css";
import FriendItem from "./FriendItem/Friend Item";
let frr = {
  fri: [
    { src: "../../imf.jpeg", name: "петя" },
    { src: "../../imf.jpeg", name: "вася" },
    { src: "../../imf.jpeg", name: "лёлик" },
    { src: "../../imf.jpeg", name: "болик" },
  ],
};

function Friend(props) {
  let friendI = frr.fri.map((f) => <FriendItem src={f.src} name={f.name} />);
  return <div className={fr.ava}>{friendI}</div>;
}
export default Friend;
