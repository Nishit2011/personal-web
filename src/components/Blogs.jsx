import React from "react";
import style from "../styles/layout.module.css";
const Blogs = () => {
  return (
    <div className={style.pageContent}>
      <h3>BLOGS</h3>
      <div className={style.well}>
        <div className={style.wellContainer}>
          <ul className={style.wellContainerTitle}>
            <li>Bachelor of Engineering, Mechanical(2007-2011)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
