import React, { useState } from "react";
import "./Content.css";
import FeatureImage from "./FeatureImage/FeatureImage";
import Article from "./article/Article";

const Content = () => {
  return (
    <div className="content-container">
      <FeatureImage />
      <Article />
    </div>
  );
};

export default Content;