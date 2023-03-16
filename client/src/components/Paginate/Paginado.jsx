import React from "react";
import style from "./paginado.module.css"

export default function Paginado ({gamesPerPage, allGames, paginado, currentPage}){
    const pageNumber = []
    
    for (let i = 0; i <= Math.ceil(allGames/gamesPerPage); i++) {
        pageNumber.push(i+1)   
    }
    return (
        <nav className={style.nav}>
          <ul className={style.pagination}>
            {pageNumber &&
              pageNumber.map((number) => {
                return (
                  <li className={`${style.list} ${currentPage === number && style.active}`} key={number}>
                    <button className={style.button} onClick={() => paginado(number)}>
                      {number}
                    </button>
                  </li>
                );
              })}
          </ul>
        </nav>
    );
}