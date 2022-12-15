import React from "react";
import Filter from "../../NavBar/Filter";
import "./SearchBar.css";

function SearchBar({ BGcolor }) {
  console.log("BGcolor", BGcolor);

  return (
    <div
      className="searchbar"
      style={{
        background: `${BGcolor}`,
      }}
    >
      
        <Filter className="wrap"/>
      
    </div>
  );
}

export default SearchBar;
