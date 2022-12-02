import React from "react";
import "./PrimaryContainer.css";
import NavBar from "./NavBar/NavBar";
import Content from "./Content/Content";

function PrimaryContainer() {
  return (
    <div className="PrimaryContainer">
      <NavBar />
      <Content />
    </div>
  );
}

export default PrimaryContainer;
