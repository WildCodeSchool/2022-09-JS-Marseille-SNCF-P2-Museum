import React from "react";
import "./Article.css";

function Article({ title, artist, description }) {
  return (
    <>
      <p className="departement">Département</p>
      <h1>{title}</h1>
      <p>{artist}</p>
      <p>{description}</p>
    </>
  );
}

export default Article;
