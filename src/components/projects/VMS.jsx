import React from "react";
import style from "../../styles/layout.module.css";

import { useNavigate } from "react-router-dom";
import ImageContainer from "../reusables/ImageContainer";
const VMS = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/proj");
  }
  return (
    <div className={style.pageContent}>
      <div className={style.backBtn} onClick={handleClick}>
        <i className={style.arrow}></i> Back to projects
      </div>
      <h3>Voucher Management System</h3>

      <div className={style.well}>
        <div className={style.wellContainer}>
          <span className={style.techBtn}>Typescript</span>{" "}
          <span className={style.techBtn}>ReactJS</span>
          <span className={style.techBtn}>Docker</span>{" "}
          <span className={style.techBtn}>Kubernetes</span>{" "}
          <span className={style.techBtn}>NestJS</span>{" "}
          <ul className={style.projectDetail}>
            {/* <h4>Techonology Stack</h4> */}

            <h4>My Role</h4>
            <div>
              <li>Devised front end application architecture</li>
              <li>Built front end application</li>
              <li>
                Wrote Unit Test Cases, Integration and End-To-End Testing for
                components
              </li>
              <li>Led a team of engineers</li>
              <li>
                Managed the overall scope, resourcing and timelines of the
                project
              </li>
            </div>
          </ul>
          <div className={style.projectImageContainer}>
            <h4>Some Images from the application</h4>
            <ImageContainer imageTitle="vms" totalImages={3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VMS;
