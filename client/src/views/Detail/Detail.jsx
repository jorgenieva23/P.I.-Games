import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGame } from "../../redux/actions";
import { Link } from "react-router-dom";
import style from "../Detail/Detail.module.css";
import img from "../../Image/avatar-default.png";

export default function Detail(props) {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getGame(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  return (
    <div className={style.back}>
    <div key={game.id} className={style.container}>
      <div className={style.mainContainer}>
        <h2 className={style.mainTitle}>{game.name}</h2>
        <img
          className={style.image}
          src={game.image ? game.image : img}
          alt="Imagen"
        />
        <div className={style.detailsContainer}>
          <div className={style.Gender}>
            <div className={style.infoSection}>
              <div>
                <h3>Gender: {game.createdInDB ? game.genres : game.genres}</h3>
                {/* <p>{game.createdInDB ? game.genres : game.genres}</p> */}
              </div>
            </div>
          </div>

          <div className={style.description}>
            <div className={style.infoSection}>
              <div>
                <h3>description: {game.description}</h3>
                {/* <p>{game.description}</p> */}
              </div>
            </div>
          </div>

          <div className={style.released}>
            <div className={style.infoSection}>
              <div>
                <h3>released: {game.released}</h3>
                {/* <p>{game.released}</p> */}
              </div>
            </div>
          </div>

          <div className={style.rating}>
            <div className={style.infoSection}>
              <div>
                <h3>rating: {game.rating}</h3>
              </div>
            </div>
          </div>

          <div className={style.platforms}>
            <div className={style.infoSection}>
              <div>
                <h3>platforms: {game.createdInDB ? game.platforms : game.platforms}</h3>
                {/* <p>{game.createdInDB ? game.platforms : game.platforms}</p> */}
              </div>
            </div>
          </div>
        </div>
        <Link
            to={`/home/${props.id}`}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <button className={style.button} type="submit">
              Back
            </button>
          </Link>
      </div>
    </div>
    </div>
  );
}