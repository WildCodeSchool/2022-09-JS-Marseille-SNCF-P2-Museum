import React from "react";
import "./Article.css";

function Article() {
  return (
    <div className="content-article-container">
      <header>
        <p className="departement">Département</p>
        <h2>Titre de l'oeuvre</h2>
        <ul>
          <li>Coucou Fanny</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
        </ul>
      </header>

      <div className="content-button">
        <p>Next</p>
        <p>Favorite</p>
      </div>
    </div>
  );
}

export default Article;
