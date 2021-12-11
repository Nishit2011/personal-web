import React, { useState } from "react";
import style from "../../styles/layout.module.css";
const ImageContainer = ({ imageTitle, totalImages }) => {
  const [imgNum, setImgNum] = useState(1);
  const nextHandler = () => {
    if (imgNum === totalImages) return false;
    setImgNum((imgNum) => imgNum + 1);
  };
  const prevHandler = () => {
    if (imgNum === 1) return false;
    setImgNum((imgNum) => imgNum - 1);
  };
  return (
    <div>
      <img
        src={`images/${imageTitle}${imgNum}.jpg`}
        alt={`cdc${imgNum}Img`}
        id={imgNum}
      ></img>
      {/* <div>{`images/${imageTitle}${imgNum}.jpg`}</div> */}
      <div className={style.btnContainer}>
        <button onClick={prevHandler}>Previous</button>
        <button onClick={nextHandler}>Next</button>
      </div>
    </div>
  );
};

export default ImageContainer;
