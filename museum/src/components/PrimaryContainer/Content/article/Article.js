import React from "react";
import "./Article.css";

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
        <ul>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
        </ul>
      </header>

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
