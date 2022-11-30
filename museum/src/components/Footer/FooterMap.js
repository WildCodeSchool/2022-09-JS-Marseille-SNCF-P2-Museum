import React from "react";
import FooterMapButton from "./FooterMapButton";
import FooterModalMap from "./FooterModalMap";

const FooterMap = () => {
  return (
    <div className="footerMap">
      <img src="./plan-google.png" alt="plan gris" />
      <FooterMapButton />
      <FooterModalMap />
    </div>
  );
};

export default FooterMap;
