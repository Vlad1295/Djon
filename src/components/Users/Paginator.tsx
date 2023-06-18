import React, { useState } from "react";
import style from "./Users.module.css";


type PropsType = {
  totalUsersCount: number;
  pageSize: number;
  portionCount: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
};
 const Paginator :React.VFC<PropsType>= (totalUsersCount, pageSize, currentPage, onPageChange) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionSize = 5;
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, changePageNumber] = useState(1);

  let leftBorderPortion = (portionNumber - 1) * portionSize + 1;
  let rightBorderPortion = portionNumber * portionSize;

  return   (  
    <div>
      <div>
        {portionNumber > 1 && (
          <button
            onClick={() => {
              changePageNumber(portionNumber - 1);
            }}
          >
            Назад
          </button>
        )}
        {pages
          .filter((p) => p >= leftBorderPortion && p <= rightBorderPortion)
          .map((p) => {
            return (
              <button
                className={currentPage === p && style.page}
                onClick={(e) => {
                  onPageChange(p);
                }}
              >
                {p}
              </button>
            );
          })}
        {pagesCount > portionNumber && (
          <button
            onClick={() => {
              changePageNumber(portionNumber + 1);
            }}
          >
            Вперед
          </button>
        )}
      </div>
      </div>
      ) 
}  
export default Paginator 