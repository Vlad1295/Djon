import react from "react";
import na from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import Friend from "./Friend/Friend";

function nav(props) {
  return (
    <nav className={na.nav}>
      <div className={na.item}>
        <NavLink to="profile" activeClassName={na.active}>
          Посты
        </NavLink>
      </div>
      <div className={na.item}>
        <NavLink to="Dialog/id" activeClassName={na.active}>
          Мои диалоги
        </NavLink>
      </div>
      <div className={na.users}>
        <NavLink to="Users" activeClassName={na.active}>
          Люди
        </NavLink>
      </div>
      <div className={na.item}>
        <a href="#">Новости</a>
      </div>
      <div>
        <a href="#">Реклама</a>
      </div>
      <div className={na.friend}>
        <a href="#"> Мои друзья</a>
        <Friend state={props.state} />
      </div>
    </nav>
  );
}
export default nav;
