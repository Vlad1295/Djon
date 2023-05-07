import react from "react";
import pi from "./Picture.module.css";

function Pictur(props) {
  return (
    <div>
      <div className={pi.content}>
        <img src="../ispan.jpg" alt="" />
      </div>
    </div>
  );
}

export default Pictur;
