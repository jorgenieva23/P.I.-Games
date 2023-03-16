import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import SideBar from "../../components/SideBar/SideBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import Paginado from "../../components/Paginate/Paginado";
import style from "./Home.module.css";
import {
  getGames,
  getGenres,
  orderByName,
  orderByRating,
  filterByGenres,
  filterByBddOrApi,
} from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.games);

  // const [render, setRender] = useState(1);

  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage, ] = useState(15);

  const indexOfLastGames = currentPage * gamesPerPage;
  const indexOfFirstGames = indexOfLastGames - gamesPerPage;

  const currentGames = allGames.slice(indexOfFirstGames, indexOfLastGames);

  const paginado = (pageNumber) => {   
    if(pageNumber < 1 || pageNumber > 7){
        
    } else {
    setCurrentPage(pageNumber)
}
}

  const [, /*order*/ setOrder] = useState("");

  useEffect(() => {
    dispatch(getGames());
    dispatch(getGenres());
  }, [dispatch]);

  if(!allGames.length) {
    return ( <Loader/> )
}

  function handlerClick(e) {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(getGames());
  }

  function handlerOrder(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  }

  function handlerRating(e) {
    e.preventDefault();
    dispatch(orderByRating(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  }

  function handlerClickOrigin(e) {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(filterByBddOrApi(e.target.value));
  }

  function handlerFilterGenre(e) {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(filterByGenres(e.target.value));
    // setRender(render + 1);
  }

  return (
    <div className={style.back}>
      <div>
        <SideBar
          handlerClick={handlerClick}
          handlerOrder={handlerOrder}
          handlerRating={handlerRating}
          handlerClickOrigin={handlerClickOrigin}
          handlerFilterGenre={handlerFilterGenre}
        />
      </div>
      <div className={style.container121212}>
        <div className={style.search}>
          <SearchBar />
        </div>
        <div className={style.div_cards}>
          {currentGames.map((c) => {
            return (
              <Card
                key={c.id}
                id={c.id}
                name={c.name}
                released={c.released}
                rating={c.rating}
                genres={c.genres}
                platforms={c.platforms}
                image={c.image}
              />
            );
          })}
        </div>
        <div>
          <Paginado
            gamesPerPage={gamesPerPage}
            allGames={allGames.length}
            paginado={paginado}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
