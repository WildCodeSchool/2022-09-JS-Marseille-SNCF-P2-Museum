import React from "react";
import Filter from "./Filter/Filter";
import "./SearchBar.css";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

function SearchBar({ BGcolor }) {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      pt={6}
      pb={4}
      sx={{
        width: "100%",
        backgroundColor: "backgroundGallery.main",
        color: "primary.main",
      }}
      id="startGallery"
    >
      <Typography variant="galeryH2" gutterBottom>
        Planifiez votre visite
      </Typography>
      <Typography
        variant="subtitle2"
        gutterBottom
        sx={{
          width: "60%",
          textAlign: "center",
        }}
      >
        Filtrez les œuvres par artiste, type ou époque, et ajoutez-les à vos
        favoris pour planifier votre visite de manière ciblée les œuvres qui
        vous intéressent le plus.
      </Typography>
      <Filter className="wrap" />
    </Stack>
  );
}

export default SearchBar;
