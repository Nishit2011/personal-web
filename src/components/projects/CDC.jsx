import React from "react";
import style from "../../styles/layout.module.css";
import cdc1Img from "../../assets/cdc1.jpg";
import cdc2Img from "../../assets/cdc2.jpg";
import cdc3Img from "../../assets/cdc3.jpg";
import cdc4Img from "../../assets/cdc4.jpg";
import { useNavigate } from "react-router-dom";
const CDC = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/proj");
  }
  return (
    <div>
      <div className={style.backBtn} onClick={handleClick}>
        <i className={style.arrow}></i> Back to projects
      </div>
      <h3>Corporate Digital Center</h3>

      <div className={style.projects}>
        <div className={style.project}>
          <ul className={style.projectDetail}>
            <h4>Techonology Stack</h4>
            <li>Typescript, ReactJS, NodeJS, MongoDB</li>
            <h4>My Role</h4>
            <div>
              <li>Built Front End themes on React Material </li>
              <li>Built Front End screens in ReactJS</li>
              <li>Built Data Visualization ChartJS</li>
              <li>Built backend server application in NodeJS</li>
              <li>Developed data models of the application</li>
            </div>
            <div className={style.projectImageContainer}>
              <h4>Some Images from the application</h4>
              <img src={cdc1Img} />
              <img src={cdc2Img} />
              <img src={cdc3Img} />
              <img src={cdc4Img} />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CDC;
