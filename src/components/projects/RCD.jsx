import React from "react";
import style from "../../styles/layout.module.css";
import { useNavigate } from "react-router-dom";
const RCD = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/proj");
  }
  return (
    <div className={style.pageContent}>
      <div className={style.backBtn} onClick={handleClick}>
        <i className={style.arrow}></i> Back to projects
      </div>
      <h3>Remote Cheque Deposit</h3>

      <div className={style.well}>
        <div className={style.wellContainer}>
          <ul className={style.projectDetail}>
            <span className={style.techBtn}>Typescript</span>{" "}
            <span className={style.techBtn}>ReactJS</span>
            <span className={style.techBtn}>NestJS</span>{" "}
            <span className={style.techBtn}>Docker</span>{" "}
            <span className={style.techBtn}>PostrgreSQL</span>
            <h4>My Role</h4>
            <div>
              <li>Devised Front End Web Application Architecture </li>
              <li>
                Devised Security and Performance optimisation roadmap for the
                application
              </li>
              <li>
                Wrote Unit Test Cases, Integration Tests, End-to-End Tests for
                components{" "}
              </li>
              <li>
                Built performance optimised build for development and production
                environments{" "}
              </li>
              <li>Built React Front end Components </li>
              <li>Built web socket client(browser) </li>
              <li>Led team of engineers </li>
              <li>
                Managed the overall scope, resourcing and timelines of the
                project
              </li>
            </div>
            <div>
              <h4>Some Images from the application</h4>
              {/* <img src="../../assets/vms1.png" />
              <img src="../../assets/vms2.png" /> */}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RCD;
