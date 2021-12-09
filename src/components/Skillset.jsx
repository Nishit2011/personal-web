import React from "react";
import style from "../styles/layout.module.css";
const Skillset = () => {
  return (
    <div>
      <div>
        <h3>Skills</h3>
        <div className={style.projects}>
          <div className={style.project}>
            <h2>
              <span className={style.projectRole}>Programming Languages</span>{" "}
            </h2>

            <div className={style.roleDescription}>JavaScript, TypeScript</div>
          </div>
        </div>
        <div className={style.project}>
          <h2>
            <span className={style.projectRole}>
              FrontEnd Development Tools and Technologies
            </span>{" "}
          </h2>

          <div className={style.roleDescription}>
            HTML, CSS, ReactJS, Redux, NextJS
          </div>
        </div>
      </div>

      <div className={style.project}>
        <h2>
          <span className={style.projectRole}>
            BackEnd Development Tools and Technologies
          </span>{" "}
        </h2>

        <div className={style.roleDescription}>NodeJS, NestJS</div>
      </div>

      <div className={style.project}>
        <h2>
          <span className={style.projectRole}>DevOps</span>{" "}
        </h2>

        <div className={style.roleDescription}>Docker, Kuberenetes</div>
      </div>

      <div className={style.project}>
        <h2>
          <span className={style.projectRole}>Cloud</span>{" "}
        </h2>

        <div className={style.roleDescription}>AWS, GCP, Azure</div>
      </div>

      <div className={style.project}>
        <h2>
          <span className={style.projectRole}>Databases</span>{" "}
        </h2>

        <div className={style.roleDescription}>MySQL, PostgreSQL, MongoDB</div>
      </div>
      <div className={style.project}>
        <h2>
          <span className={style.projectRole}>
            Application Programming Interface
          </span>{" "}
        </h2>

        <div className={style.roleDescription}>REST, GraphQL</div>
      </div>

      <div className={style.project}>
        <h2>
          <span className={style.projectRole}>Protocols</span>{" "}
        </h2>

        <div className={style.roleDescription}>HTTP, gRPC, WebSocket</div>
      </div>
    </div>
  );
};

export default Skillset;
