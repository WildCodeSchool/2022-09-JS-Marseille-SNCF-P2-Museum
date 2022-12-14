import * as React from "react";

const FeatureImage = ({ image }) => {
  return (
    <div>
      <img src={image} alt="" style={{ animation: `fadeIn 1s` }}></img>
    </div>
  );
};

export default FeatureImage;
