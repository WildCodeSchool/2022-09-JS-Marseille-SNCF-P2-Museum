import React from "react";

import "./Footer.css";

import FooterContent from "./FooterContent";
import FooterLegacy from "./FooterLegacy";

const Footer = () => {

  return (
    <div className="footer">
      <div className="wrap">
        <FooterContent />
        <FooterLegacy />
      </div>
    </div>
  );
};

export default Footer;
