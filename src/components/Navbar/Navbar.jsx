import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

const setActive = ({ isActive }) => (isActive ? style.active : undefined);

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink to="/profile" className={setActive}>
          Profile
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/dialogs" className={setActive}>
          Massages
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="news" className={setActive}>
          News
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="music" className={setActive}>
          Music
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="settings" className={setActive}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
