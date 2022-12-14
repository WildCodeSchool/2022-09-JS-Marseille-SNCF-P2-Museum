import React, { useState } from "react";

const FeatureImage = ({ image }) => {
  return <img src={image} alt="" style={{ animation: `fadeIn 1s` }}></img>;
};

export default FeatureImage;
