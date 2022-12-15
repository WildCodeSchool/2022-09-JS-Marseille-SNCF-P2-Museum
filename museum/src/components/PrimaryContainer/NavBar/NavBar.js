import React from "react";
import "./NavBar.css";
import NavButton from "./navBarComponents/NavButton";
import NavTitle from "./navBarComponents/NavTitle";
import Logo from "./navBarComponents/Logo";

function NavBar() {
  
  return (
    <div className="NavBar">
      <div className="wrap">
        <Logo/>
        <NavTitle />
        <NavButton />
      </div>
    </div>
  );
}

export default NavBar;
