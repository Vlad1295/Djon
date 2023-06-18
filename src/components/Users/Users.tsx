import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Users.module.css";
import photo from "../../Imgs/i.jpeg";
import Paginator from "./Paginator"



const Users = (props) => {
  
  return(
<div>
<div>
  <Paginator/>
    </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <div className={style.text}>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  className={style.photo}
                  src={u.photos.small ? u.photos.small : photo}
                />
              </NavLink>

              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.unfollowThunk(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.followThunk(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
            <div>{u.name} </div>
            <div>{u.status} </div>
            <div>"u.location.city" </div>
            <div>"u.location.country" </div>
          </div>
        </div>
      ))}
    </div>
    
) 
};
export default Users;
