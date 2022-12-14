import React from "react";
import "./NavBar.css";
import Filter from "./Filter";
import NavButton from "./NavButton";
import Logo from "./Logo";

function NavBar() {
  
  return (
    <div className="NavBar">
      <div className="wrap">
        <Logo/>
        <Filter/>
        <NavButton />
      </div>
    </div>
  );
}

export default NavBar;
