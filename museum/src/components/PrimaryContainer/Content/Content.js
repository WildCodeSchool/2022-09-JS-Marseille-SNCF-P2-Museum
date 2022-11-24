import React, { useState } from "react";
import "./Content.css";
import FeatureImage from "./FeatureImages/FeatureImage";
import Article from "./article/Article";

//import foodItems from "./data.js"; //le tableau d'objet
import FeatureImage from "./FeatureImages/FeatureImage";

const Content = () => {
  return (
    <div>
      <FeatureImage />
      <Article />
    </div>
  );
};

export default Content;
