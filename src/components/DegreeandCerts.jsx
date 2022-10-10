import React from "react";
import style from "../styles/layout.module.css";
const DegreeandCerts = () => {
  return (
    <div className={style.pageContent}>
      <h3>DEGREE</h3>
      <div className={style.well}>
        <div className={style.wellContainer}>
          <ul className={style.wellContainerTitle}>
            <li>Bachelor of Engineering, Mechanical(2007-2011)</li>
          </ul>
        </div>
      </div>
      <h3>CERTIFICATIONS</h3>
      <div className={style.well}>
        <div className={style.wellContainer}>
          <ul className={style.wellContainerTitle}>
            <li>1.AWS Solutions Architect Associate</li>
            <li>2.AWS Developer Associate</li>
            <li>3.Google Certified Profession UX Design</li>
            <li>4.Software Product Management Specialization from University of Alberta[Coursera]</li>
            <li>5.HashiCorp Terraform Associate</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DegreeandCerts;
