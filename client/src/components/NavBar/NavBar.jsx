import React from "react";
import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import { useLocation } from "react-router-dom";
import Logo from "../../Image/wonder-day-among-us-6.png"

const NavBar = () => {
  const location = useLocation();

  return (
    <nav
      className={location.pathname === "/home" ? style.navbar : style.navbar2}
    >
      <div className={style.navbarContainer}>
        <img
          id="logoHenry"
          src={Logo}
          alt="a happy dog icon"
          className={style.logo}
        />
        <ul className={style.navLinks}>
          <li>
            <NavLink
              to="/home"
              className={style.navLink}
              activeClassName={style.activeLink}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/create"
              className={style.navLink}
              activeClassName={style.activeLink}
            >
              Create game
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={style.navLink}
              activeClassName={style.activeLink}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
