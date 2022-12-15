import React from "react";
import Filter from "./Filter";
import "./SearchBar.css";

function SearchBar({ BGcolor }) {
  console.log("BGcolor", BGcolor);

  return (
    <div
      className="searchbar"
      id="startGallery"
      style={{
        background: `${BGcolor}`,
      }}
    >
      
        <Filter className="wrap"/>
      
    </div>
  );
}

export default SearchBar;
