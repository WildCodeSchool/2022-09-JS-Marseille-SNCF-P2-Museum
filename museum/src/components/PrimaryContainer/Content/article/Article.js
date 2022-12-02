import React, { useState } from "react";
import "./Article.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function Article({ title, artist, description }) {
  return (
    <div className="content-article-container">
      <p className="departement">Département</p>
      <h1>{title}</h1>
      <p>{artist}</p>
      <p>{description}</p>
      <Stack direction="row" spacing={2}>
        <Button variant="contained">Next</Button>
        <Button variant="contained">Favorite</Button>
      </Stack>
    </div>
  );
}

export default Article;
