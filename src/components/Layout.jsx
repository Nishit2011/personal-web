import React, { useState } from "react";
import Content from "./Content";
import Menu from "./Menu";
import Photo from "./Photo";
import style from "../styles/layout.module.css";
import bgImage from "../assets/sea-beach.jpeg";

export const LayoutContext = React.createContext();
const Layout = ({ children }) => {
  const [menu, setMenu] = useState("PrevEmployments");
  const handleClick = (menu) => {
    console.log(menu);
    setMenu(menu);
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        <div className={style.sideNav}>
          <Photo />
          <div className={style.menu}>
            <Menu handleClick={handleClick} active={menu} />
          </div>
        </div>
        <div className={style.content}>
          <Content children={children} />
        </div>
      </div>
      {/* <footer>Footer</footer> */}
    </div>
  );
};

export default Layout;
