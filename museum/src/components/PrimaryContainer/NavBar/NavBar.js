import React from "react";
import "./NavBar.css";
import Logo from "./Logo";
import Filter from "./filter/Filter"
import NavButton from "./NavButton";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="wrap">
        <Logo />
        <Filter />
        <NavButton />
      </div>
    </div>
  );
}

export default NavBar;
