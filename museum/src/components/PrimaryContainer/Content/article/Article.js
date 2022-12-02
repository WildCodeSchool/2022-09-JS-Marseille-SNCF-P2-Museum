import React from "react";
import "./Article.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function Article() {
  return (
    <div className="content-article-container">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <header>
        <p className="departement">Département</p>
        <h1>Titre de l'oeuvre</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took.
        </p>
      </header>
      <Stack direction="row" spacing={2}>
        <Button variant="contained">Next</Button>
        <Button variant="contained">Favorite</Button>
      </Stack>
      <div className="content-button">
        <p>
          <span class="material-symbols-outlined">arrow_forward_ios</span>
          Next
        </p>
        <p>
          <span class="material-symbols-outlined">favorite</span>Favorite
        </p>
      </div>
    </div>
  );
}

export default Article;
