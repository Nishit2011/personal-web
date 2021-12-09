import React, { useContext, useState, useEffect } from "react";
import PrevEmployments from "./PrevEmployments";
import style from "../styles/layout.module.css";
import { LayoutContext } from "./Layout";
import DegreeandCerts from "./DegreeandCerts";
import Skillset from "./Skillset";
import Projects from "./Projects";
import Books from "./Books";

const Content = ({ children }) => {
  return (
    <div>
      <div className={style.timeline}>{children}</div>
    </div>
  );
};

export default Content;
