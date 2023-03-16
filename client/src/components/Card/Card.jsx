import style from "./Card.module.css";
import { NavLink } from "react-router-dom";
import img from "../../Image/avatar-default.png";

const Card = (props) => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <img
          className={style.image}
          src={props.image? props.image : img}
          alt="Imagen"
        />
        <div className={style.cardinfo}>
          <h1 className={style.cardtitle}>{props.name}</h1>
          <p className={style.carddescription}>{props.genres}</p>
          <NavLink
            to={`/detail/${props.id}`}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <button className={style.button} type="submit">
              ver info
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};


export default Card;
