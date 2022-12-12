import React from "react";
import Filter from "./NavBar/Filter";
import "./SearchBar.css";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";



// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "Casimir", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
];

const darkTheme ={
  palette: {
    background: {
      gray: "gray",
      black: "#000000",
      transparent: "rgba(255, 255, 255, 0)",
    },
    border: {
      white: "#FDFDFB",
      black: "#000000",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    primary: {
      solidBg: "#FFF",
      solidHoverBg: "#2C7A7B",
      solidActiveBg: "#285E61",
      outlinedColor: "#2C7A7B",
      outlinedBorder: "#FFF",
      outlinedHoverBorder: undefined,
      outlinedHoverBg: "#FFF",
      outlinedActiveBg: "#B2F5EA",
    },
    focusVisible: "rgba(66, 153, 225, 0.6)",
  },
};


function SearchBar({}) {
  return (
    <div className="searchbar">
      <div className="wrap" theme={darkTheme}>
        <Autocomplete
          theme={darkTheme}
          variant="outlined"
          sx={{
            width: "30%",
            bgcolor: "background.gray",
            color: "primary.main",
            borderColor: "primary.outlinedColor",
            outlinedBorder: "border.white",
          }}
          size="small"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          defaultValue={top100Films[13]}
          renderInput={(params) => (
            <TextField {...params} label="Size small" placeholder="Favorites" />
          )}
        />
      </div>
    </div>
  );
}

export default SearchBar;
