import React from "react";
import Content from "./Content";
import Menu from "./Menu";
import Photo from "./Photo";
import style from "../styles/layout.module.css";

export const LayoutContext = React.createContext();
const Layout = ({ children }) => {
  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        <div className={style.sideNav}>
          <Photo />
          <div className={style.menu}>
            <Menu />
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
