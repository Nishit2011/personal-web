import React from "react";
import style from "../styles/layout.module.css";

const Content = ({ children }) => {
  return (
    <div>
      <div className={style.contentChildren}>{children}</div>
    </div>
  );
};

export default Content;
