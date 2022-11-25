import React from "react";
import FooterLogo from "./FooterLogo";
import FooterAbout from "./FooterAbout";
import FooterAddress from "./FooterAddress";
import FooterMap from "./FooterMap";

const FooterContent = () => {

  return (
    <div className="footerContent">
        <FooterLogo />
        <FooterAbout />
        <FooterAddress />
        <FooterMap />
    </div>
  );
};

export default FooterContent;
