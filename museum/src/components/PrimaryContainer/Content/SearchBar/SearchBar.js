import React from "react";
//import Filter from "../../NavBar/Filter";
import "./SearchBar.css";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "Casimir", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
];

function SearchBar(props) {
  const { workOfArt, setWorkOfArt } = props;
  return (
    <div className="searchbar">
      <div className="wrap">
        <Autocomplete
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
          defaultValue={top100Films[3]}
          renderInput={(params) => (
            <TextField {...params} label="Size small" placeholder="Favorites" />
          )}
        />
      </div>
    </div>
  );
}

export default SearchBar;
