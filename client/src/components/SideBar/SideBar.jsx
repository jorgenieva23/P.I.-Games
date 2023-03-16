import React from "react";
import style from "./SideBar.module.css";
import { useSelector } from "react-redux";

const SideBar = ({handlerClick,handlerOrder,handlerRating,handlerClickOrigin,handlerFilterGenre}) => {

  const allGenres = useSelector((state) => state.genres);

  return (
    <div className={style.sidebar}>
      <ul className={style.sidebar_ul}>
        <li className={style.sidebar_li}></li>
        <li className={style.sidebar_li}>
          <div>
            <h4> Reload:</h4>
            <button
              onClick={(e) => {
                handlerClick(e);
              }}
            >
              Reload Page
            </button>
          </div>
        </li>
        <div key={allGenres.id}>
          <li className={style.sidebar_li}>
            <div>
              <h5>Order by name</h5>
              <select
                onChange={(e) => {
                  handlerOrder(e);
                }}
              >
                <option defaultValue value="all" hidden>
                  Order
                </option>
                <option value="asc">A - Z</option>
                <option value="desc">Z - A</option>
              </select>
            </div>
          </li>
          <li>
            <div>
              <h5>Filter by Racting</h5>
              <select className="select" onChange={(e) => handlerRating(e)}>
                <option>Rating</option>
                <option value="Top"> Top</option>
                <option value="Low"> Low</option>
              </select>
            </div>
          </li>
          <li>
            <div>
              <h5>Filter by source</h5>
              <select
                onChange={(e) => {
                  handlerClickOrigin(e);
                }}
              >
                <option defaultValue value="all">
                  All
                </option>
                <option value="created">Created </option>
                <option value="inDB">Existing </option>
              </select>
            </div>
          </li>
          <li>
            <div>
              <h5 className={style.filterHeader}>Filter by temperament</h5>
              <select onChange={(e) => handlerFilterGenre(e)}>
                <option key={0} value="temp">
                  all Genres
                </option>
                {allGenres
                  ?.sort(function (a, b) {
                    if (a < b) return -1;
                    if (a > b) return 1;
                    return 0;
                  })
                  .map((e) => {
                    return (
                      <option key={e} value={e}>
                        {e}
                      </option>
                    );
                  })}
              </select>
            </div>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
