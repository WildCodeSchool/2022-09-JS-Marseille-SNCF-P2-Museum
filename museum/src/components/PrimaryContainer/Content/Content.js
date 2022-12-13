import React, { useState, useEffect } from "react";
import FeatureImage from "./FeatureImage/FeatureImage";
import Article from "./article/Article";
import axios from "axios";
import "./Content.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SearchBar from "./SearchBar/SearchBar";

function Content(props) {
  const { workOfArt, setWorkOfArt } = props;

  const getTinderArt = () => {
    axios
      //ATTENTION BIENTOT FILTRE
      .get(
        `https://www.rijksmuseum.nl/api/en/collection?key=DIccpaSN&p=1&ps=50`
      )
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        //console.log("data ensemble des tableaux", data);

        //on random un nombre sur la totalité de la base de 100
        let randomNbr = Math.floor(Math.random() * data.artObjects.length);
        //console.log("random number", randomNbr);

        //On sort l'ID du tableau random
        //console.log("ID aléatoire", data.artObjects[randomNbr].objectNumber);
        let winID = data.artObjects[randomNbr].objectNumber;

        axios
          .get(
            `https://www.rijksmuseum.nl/api/en/collection/${winID}?key=DIccpaSN&type=painting`
          )
          // Extract the DATA from the received response
          .then((response) => response.data)

          // Use this data to update the state
          .then((data) => {
            setWorkOfArt(data);

            const bg = (document.getElementsByClassName(
              "PrimaryContainer"
            )[0].style.backgroundImage = `"url('${workOfArt.artObject?.webImage.url.replace(
              "s0",
              "w1200"
            )}')"`);

            console.log("machin : ", bg);
          });
      });
  };

  useEffect(() => {
    getTinderArt();
  }, []);

  return (
    <>
      <div className="content-container">
        <div className="wrap">
          <FeatureImage
            image={workOfArt.artObject?.webImage.url.replace("s0", "w500")}
          />
          <div className="content-article-container">
            <Article
              title={workOfArt.artObject?.title}
              artist={workOfArt.artObject?.label.makerLine}
              description={workOfArt.artObject?.label.description}
            />
            <Stack direction="row" spacing={2}>
              <Button variant="contained" onClick={getTinderArt}>
                Next
              </Button>
              <Button variant="contained">Favorite</Button>
            </Stack>
          </div>
        </div>
      </div>
      <SearchBar />
    </>
  );
}

export default Content;
