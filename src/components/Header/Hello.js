import react from "react";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./Header.css"

function Header(props) {
  return (
    <div className="box">
      <div className="img">
        <img width="20px" src="../../fac.png" />
      </div>
      <div>
        {props.isAuth ? (
          <div>
            {props.login} <button onClick={props.logoutThunk} >logout</button>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </div>
  );
}

export default Header;
