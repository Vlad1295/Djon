import React from "react";
import { NavLink } from "react-router-dom";
import us from "./Users.module.css";
import photo from "../../Imgs/i.jpeg";
import { usersAPI } from "../../API/getUsers";


const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <button
              className={props.currentPage === p && us.page}
              onClick={(e) => {
                props.onPageChange(p);
              }}
            >
              {p}
            </button>
          );
        })}
      </div>

      {props.users.map((u) => (
        <div key={u.id}>
          <div className={us.text}>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  className={us.photo}
                  src={u.photos.small ? u.photos.small : photo}
                />
              </NavLink>

              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.toggleIsFollowingProgress(true, u.id);
                    usersAPI.unfollowUser(u.id).then((data) => {
                      if (data.resultCode === 0) {
                        props.unfollow(u.id);
                      }
                    });
                    props.toggleIsFollowingProgress(false, u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.toggleIsFollowingProgress(true, u.id);
                    usersAPI.followUser(u.id).then((data) => {
                      if (data.resultCode === 0) {
                        props.follow(u.id);
                      }
                    });
                    props.toggleIsFollowingProgress(false, u.id);
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
  );
};
export default Users;
