import React from "react";
import "./Article.css";
import Chip from "@mui/material/Chip";

function Article({ title, artist, description, objectCollection }) {
  return (
    <>
      <p className="departement">{objectCollection}</p>
      <h1>{title}</h1>
      <p>{artist}</p>
      <p>{description}</p>
    </>
  );
}

export default Article;
