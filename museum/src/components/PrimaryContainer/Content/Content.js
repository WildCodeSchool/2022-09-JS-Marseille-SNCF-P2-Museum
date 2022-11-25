import React, { useState } from "react";
import "./Content.css";
import FeatureImage from "./FeatureImage/FeatureImage";
import Article from "./article/Article";

const Content = () => {
  return (
      <div className="content-container">
        <div className="wrap">
          <FeatureImage />
          <Article />
        </div>
      </div>
  );
};

//document.querySelector(".blurBG").style.filter = "blur(10px)";

export default Content;
