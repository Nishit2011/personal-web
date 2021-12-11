import React from "react";
import style from "../styles/layout.module.css";
const Skillset = () => {
  return (
    <div className={style.pageContent}>
      <div>
        <h3>SKILLS</h3>
        <div className={style.well}>
          <div className={style.wellContainer}>
            <h2>
              <span className={style.wellContainerTitle}>
                Programming Languages
              </span>{" "}
            </h2>

            <div className={style.roleDescription}>JavaScript, TypeScript</div>
          </div>
        </div>
        <div className={style.wellContainer}>
          <h2>
            <span className={style.wellContainerTitle}>
              FrontEnd Development Tools and Technologies
            </span>{" "}
          </h2>

          <div className={style.roleDescription}>
            HTML, CSS, ReactJS, Redux, NextJS
          </div>
        </div>
      </div>

      <div className={style.wellContainer}>
        <h2>
          <span className={style.wellContainerTitle}>
            BackEnd Development Tools and Technologies
          </span>{" "}
        </h2>

        <div className={style.roleDescription}>NodeJS, NestJS</div>
      </div>

      <div className={style.wellContainer}>
        <h2>
          <span className={style.wellContainerTitle}>DevOps</span>{" "}
        </h2>

        <div className={style.roleDescription}>Docker, Kuberenetes</div>
      </div>

      <div className={style.wellContainer}>
        <h2>
          <span className={style.wellContainerTitle}>Cloud</span>{" "}
        </h2>

        <div className={style.roleDescription}>AWS, GCP, Azure</div>
      </div>

      <div className={style.wellContainer}>
        <h2>
          <span className={style.wellContainerTitle}>Databases</span>{" "}
        </h2>

        <div className={style.roleDescription}>MySQL, PostgreSQL, MongoDB</div>
      </div>
      <div className={style.wellContainer}>
        <h2>
          <span className={style.wellContainerTitle}>
            Application Programming Interface
          </span>{" "}
        </h2>

        <div className={style.roleDescription}>REST, GraphQL</div>
      </div>

      <div className={style.wellContainer}>
        <h2>
          <span className={style.wellContainerTitle}>Protocols</span>{" "}
        </h2>

        <div className={style.roleDescription}>HTTP, gRPC, WebSocket</div>
      </div>
    </div>
  );
};

export default Skillset;
