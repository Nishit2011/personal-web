import React from "react";
import style from "../styles/layout.module.css";
const PrevEmployments = () => {
  return (
    <div style={{ marginLeft: "5%" }}>
      <h3>EMPLOYMENTS</h3>
      <div clasName={style.miniDescription}>
        Total Professional Experience: 10+ years
      </div>
      <div className={style.projects}>
        <div className={style.project}>
          <h2>
            <span className={style.projectRole}>
              Fullstack Cloud-DevOps Developer and Manager
            </span>{" "}
            <span className={style.projectTimeline}>NOW</span>@ Deloitte
          </h2>

          <div className={style.roleDescription}>
            I worked(and have been working) on digital transformation projects
            for Indian and Gulf Client. As a developer, I developed React JS
            based Front End Applications, scalable microservices in NodeJS and
            NestJS As a Cloud-DevOps Engineer, I designed cloud based
            architecture on AWS, wrote Docker and Kubernetes manifest files
          </div>
          {/* <ul className={style.projectDescription}>
            <li>1. ABC</li>
            <li>2.</li>
            <li>3.</li>
          </ul> */}
        </div>

        <div className={style.project}>
          <h2>
            <span className={style.projectRole}>
              Fullstack Web Developer and Team Lead
            </span>{" "}
            <span className={style.projectTimeline}>2016-2018</span>@ Accenture
          </h2>

          <div className={style.roleDescription}>
            I worked as a fullstack developer(reactJS-NodeJS) and played
            significant role in the successful delivery of a German e-commerce
            B2B application.
          </div>
        </div>

        <div className={style.project}>
          <h2>
            <span className={style.projectRole}>Web Developer </span>
            <span className={style.projectTimeline}>2015-2016</span>@ Wipro
          </h2>

          <div className={style.roleDescription}>
            I worked as a web developer on two projects: A Dutch E-Commerce web
            application and a Swedish Telecommunication project
          </div>
        </div>

        <div className={style.project}>
          <h2>
            <span className={style.projectRole}> Web Developer</span>
            <span className={style.projectTimeline}>2011-2015</span>@ Mindtree
          </h2>

          <div className={style.roleDescription}>
            I worked as a Web Developer and developed web applications for the
            Research and Development Division. The application involved building
            web application for surveillance softwares.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrevEmployments;
