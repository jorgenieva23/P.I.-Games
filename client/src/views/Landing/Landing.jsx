import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Landing.module.css";
import well from "../../Image/welcome2.png";

const Landing = () => {
  return (
    <div className={style.landing}>
      <div className={style.image}>
        <NavLink to="/home" style={{ textDecoration: "none" }}>
          <button className={style.button}>
            <img
              src={well}
              alt="Imagen"
            />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Landing;
