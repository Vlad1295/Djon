import react from "react";
import he from "./Helloheader.module.css";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";


function Hello(props) {
 
  return (
    <div className={he.hello}>
      <img width="40px" src="../../fac.png" alt="#" />
      {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
    </div>
  );
}

export default Hello;
