import React, { useState, useEffect, useContext } from "react";
import FeatureImage from "./FeatureImage/FeatureImage";
import Article from "./article/Article";
import axios from "axios";
import "./Content.css";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PauseIcon from "@mui/icons-material/Pause";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Stack from "@mui/material/Stack";
import SearchBar from "./SearchBar/SearchBar";
import IsSelectedContext from "../../../contexts/IsSelectedContext";

function Content(props) {
  const { workOfArt, setWorkOfArt } = props;

  const getTinderArt = () => {
    axios
      //ATTENTION BIENTOT FILTRE
      .get(
        `https://www.rijksmuseum.nl/api/en/collection?key=DIccpaSN&p=1&ps=100&type=painting`
      )
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {

        //on random un nombre sur la totalité de la base de 100
        let randomNbr = Math.floor(Math.random() * data.artObjects.length);
        
        //On sort l'ID du tableau random
        let winID = data.artObjects[randomNbr].objectNumber;

        axios
          .get(
            `https://www.rijksmuseum.nl/api/en/collection/${winID}?key=DIccpaSN`
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
          });
      });
  };

  //slider !
  // 1 - losque je clique le bouton play, un compteur se lance
  // 2 - si je reclique le bouton play il stoppe le compteur
  // 3 - lorsque le compteur arrive à 4 secondes, la fonction getTinderArt est lancé pour changer le tableau
  const {isSelected, setIsSelected} = useContext(IsSelectedContext);
  //const myFavorites = !isSelected.includes(workOfArt.artObject);
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isNext, setIsNext] = useState();
  console.log("myFaisSelectedvorites", isSelected );

  useEffect(() => {
    setIsFavorite(false);
    if (isNext) {
      getTinderArt();
      console.log("workofart",workOfArt.artObject)
    }    
  }, [isNext]);

 useEffect(() => {
    console.log("1 useEffect", isSelected)
    if (isFavorite === true && !isSelected.includes(workOfArt.artObject)) {
      setIsSelected([...isSelected, workOfArt.artObject])
    } /*else {let index = isSelected.indexOf(workOfArt.artObject);
    console.log("index", index);
    isSelected.splice(index,1);} ;*/
  }
  , [isFavorite]);
  //si je clique sur favorite j'ajoute au tableau isSelected le tableau
  //si je clique a nouveau sur le favorite, on l'enleve du isSelected
  //si j'appuie sur next je conseve le tableau
  console.log("selected", isSelected);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setCount(count + 1);

        // redémarre le compteur à zéro et recommence à compter indéfiniment toutes les 4 secondes
        if (count === 0) {
          setTimeout(() => {
            setCount(0);
          }, 4000);
          getTinderArt();
        }
      }, 1000);
      // retourne une fonction de nettoyage pour arrêter l'intervalle lorsque le composant est désactivé
      return () => clearInterval(interval);
    }
  }, [count, isRunning]);

 
  return (
    <>
      <div className="content-container">
        <div className="wrap">
          <FeatureImage
            image={workOfArt.artObject?.webImage.url.replace("s0", "w600-h350")}
            imagePopup={workOfArt.artObject?.webImage.url.replace(
              "s0",
              "w2000"
            )}
            title={workOfArt.artObject?.title}
            artist={workOfArt.artObject?.label.makerLine}
          />
          <div className="content-article-container">
            <Article
              title={workOfArt.artObject?.title}
              artist={workOfArt.artObject?.label.makerLine}
              description={workOfArt.artObject?.label.description}
              objectCollection={workOfArt.artObject?.objectCollection}
            />
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                onClick={setIsNext}
                startIcon={<NavigateNextIcon />}
              >
                Next
              </Button>

              <Button
                variant="contained"
                selected={isFavorite}
                startIcon={
                  isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />
                }
                onClick={() => {
                  setIsFavorite(!isFavorite);
                }}
              >
                Favorite
              </Button>

              <Button
                variant="contained"
                selected={isRunning}
                startIcon={isRunning ? <PauseIcon /> : <PlayArrowIcon />}
                onClick={() => {
                  setIsRunning(!isRunning);
                }}
              >
                {isRunning ? "Stop" : "Play"}
              </Button>
            </Stack>
          </div>
        </div>
      </div>
      <SearchBar />
    </>
  );
}

export default Content;
// <SearchBar />
// BGcolor={workOfArt.artObject?.colors[0].hex}
//workOfArt.artObject?.colors.hex
