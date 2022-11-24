import React from "react";

import "./Footer.css";

import FooterContent from "./FooterContent";
import FooterLegacy from "./FooterLegacy";

const Footer = () => {
  return (
    <div className="footer">
      <h2>Mon Footer</h2>
          <FooterContent/>
          <FooterLegacy/>
      
    </div>
  );
};

export default Footer;
