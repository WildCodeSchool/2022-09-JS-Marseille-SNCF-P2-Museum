import React from "react";
import FooterMapButton from "./FooterMapButton";
import FooterModalMap from "./FooterModalMap";

const FooterMap = () => {
  return (
    <div className="footerMap">
      Google Map
      <FooterModalMap/>
      <FooterMapButton />
      
    </div>
  );
};

export default FooterMap;
