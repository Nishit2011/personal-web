import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import style from "../styles/layout.module.css";
const Menu = ({ handleClick, active }) => {
  return (
    <div className={style.menu}>
      <Link to="/">
        <li>Employments</li>
      </Link>
      <Link to="/deg">
        <li>Degree and Certificates</li>
      </Link>
      <Link to="/skill">
        <li>Skillset</li>
      </Link>
      <Link to="/proj">
        <li>Projects</li>
      </Link>
      {/* <li className={style.projectList}>Professional</li>{" "}
     
      <li className={style.projectList}>Hobby</li> */}

      <Link to="/blogs">
        <li>Blogs</li>
      </Link>
      <Link to="/books">
        <li>Books</li>
      </Link>
    </div>
  );
};

export default Menu;
