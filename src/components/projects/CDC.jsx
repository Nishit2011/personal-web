import React, { useState } from "react";
import style from "../../styles/layout.module.css";

import { useNavigate } from "react-router-dom";
import ImageContainer from "../reusables/ImageContainer";
const CDC = () => {
  const [imgNum, setImgNum] = useState(1);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/proj");
  };

  return (
    <div className={style.pageContent}>
      <div className={style.backBtn} onClick={handleClick}>
        <i className={style.arrow}></i> Back to projects
      </div>
      <h3>Corporate Digital Center</h3>

      <div className={style.well}>
        <div className={style.wellContainer}>
          <ul className={style.projectDetail}>
            <span className={style.techBtn}>Typescript</span>{" "}
            <span className={style.techBtn}>ReactJS</span>
            <span className={style.techBtn}>NodeJS</span>{" "}
            <span className={style.techBtn}>Docker</span>{" "}
            <span className={style.techBtn}>Kubernetes</span>{" "}
            <span className={style.techBtn}>MongoDB</span> <h4>My Role</h4>
            <div>
              <li>Built Front End themes on React Material </li>
              <li>Built Front End screens in ReactJS</li>
              <li>Built Data Visualization ChartJS</li>
              <li>Built backend server application in NodeJS</li>
              <li>Developed data models of the application</li>
            </div>
            <div className={style.projectImageContainer}>
              <h4>Some Images from the application</h4>
              {console.log("***--", `../../assets/cdc${imgNum}.jpg`)}
              <ImageContainer imageTitle="cdc" totalImages={4} />

              {/* <img src={cdc2Img} alt="cdc2Img" />
              <img src={cdc3Img} alt="cdc3Img" />
              <img src={cdc4Img} alt="cdc4Img" /> */}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CDC;
