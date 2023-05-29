import React,  { useState }  from "react";
import { NavLink } from "react-router-dom";
import style from "./Users.module.css";
import photo from "../../Imgs/i.jpeg";
import { usersAPI } from "../../API/getUsers";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionSize = 5;
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, changePageNumber] = useState(1);

  let leftBorderPortion = (portionNumber - 1) * portionSize + 1;
  let rightBorderPortion = portionNumber * portionSize;

  return (
    <div>
      <div>
        {portionNumber>1&&<button onClick={()=>{changePageNumber(portionNumber-1)}} >Назад</button>} 
        {pages
          .filter((p) => p >= leftBorderPortion && p <= rightBorderPortion)
          .map((p) => {
            return (
              <button
                className={props.currentPage === p && style.page}
                onClick={(e) => {
                  props.onPageChange(p);
                }}
              >
                {p}
              </button>
            );
          })}
         {pagesCount>portionNumber&&<button onClick={()=>{changePageNumber(portionNumber+1)}} >Вперед</button>}  
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
  );
};
export default Users;
