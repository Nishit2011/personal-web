import React from "react";
import style from "../../styles/layout.module.css";
import vms1Img from "../../assets/vms1.png";
import vms2Img from "../../assets/vms2.png";
import vms3Img from "../../assets/vms3.png";
import { useNavigate } from "react-router-dom";
const VMS = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/proj");
  }
  return (
    <div>
      <div className={style.backBtn} onClick={handleClick}>
        <i className={style.arrow}></i> Back to projects
      </div>
      <h3>Voucher Management System</h3>

      <div className={style.projects}>
        <div className={style.project}>
          <ul className={style.projectDetail}>
            <h4>Techonology Stack</h4>
            <li>Typescript, ReactJS, Docker, Kubernetes, NestJS</li>
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
            <img src={vms1Img} />
            <img src={vms2Img} />
            <img src={vms3Img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VMS;
