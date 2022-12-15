import React from "react";
import Filter from "../../NavBar/Filter";
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
      <div className="wrap">
        <Filter />
      </div>
    </div>
  );
}

export default SearchBar;
