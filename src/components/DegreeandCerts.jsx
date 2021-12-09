import React from "react";
import style from "../styles/layout.module.css";
const DegreeandCerts = () => {
  return (
    <div>
      <h3>Degrees and Certifications</h3>
      <div className={style.projects}>
        <div className={style.project}>
          <ul className={style.projectRole}>
            <li>Bachelor of Engineering, Mechanical(2007-2011)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DegreeandCerts;
