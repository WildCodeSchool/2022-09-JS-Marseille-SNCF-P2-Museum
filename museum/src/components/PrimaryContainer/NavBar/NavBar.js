import React from "react";
import "./NavBar.css";
import Logo from "./Logo";
import Filter from "./Filter";
import Icons from "./Icons";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="wrap">
        <Logo />
        <Filter />
        <Icons />
      </div>
    </div>
  );
}

export default NavBar;
