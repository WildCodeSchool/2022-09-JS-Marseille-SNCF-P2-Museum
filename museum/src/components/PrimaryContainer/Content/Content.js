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
  const { isSelected, setIsSelected } = useContext(IsSelectedContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function displayIcon() {
    return isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />;
  }

  const getTinderArt = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://www.rijksmuseum.nl/api/en/collection?key=DIccpaSN&p=1&ps=100&type=painting`
      );
      const data = response.data;

      //on random un nombre sur la totalité de la base de 100
      let randomNbr = Math.floor(Math.random() * data.artObjects.length);

      //On sort l'ID du tableau random
      let winID = data.artObjects[randomNbr].objectNumber;

      const response2 = await axios.get(
        `https://www.rijksmuseum.nl/api/en/collection/${winID}?key=DIccpaSN`
      );
      const data2 = response2.data;
      setWorkOfArt(data2);
      console.log("data2", data2);
      if (!isSelected.includes(data2.artObject)) {
        setIsFavorite(false);
        console.log("gettinder isfavorite", isFavorite);
        displayIcon(!isFavorite);
      }
      setIsLoading(false);
      const bg = (document.getElementsByClassName(
        "PrimaryContainer"
      )[0].style.backgroundImage = `"url('${workOfArt.artObject?.webImage.url.replace(
        "s0",
        "w1200"
      )}')"`);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("début useEffect is loading", isLoading);
    if (isLoading) return;
    console.log("début useEffect isFavorite selected", isSelected);
    console.log("début useEffect isFavorite isFavorite", isFavorite);
    console.log(
      "début useEffect isFavorite workOfArt",
      workOfArt.artObject?.title
    );
    if (isFavorite === true && !isSelected.includes(workOfArt.artObject)) {
      setIsSelected([...isSelected, workOfArt.artObject]);
    } else if (
      isFavorite == false &&
      isSelected.includes(workOfArt.artObject)
    ) {
      let index = isSelected.indexOf(workOfArt.artObject);
      console.log("index", index);
      isSelected.splice(index, 1);
    }
  }, [isFavorite]);
  console.log(" fin use effect isFavorite selected", isSelected);

  //slider !
  // 1 - losque je clique le bouton play, un compteur se lance
  // 2 - si je reclique le bouton play il stoppe le compteur
  // 3 - lorsque le compteur arrive à 4 secondes, la fonction getTinderArt est lancé pour changer le tableau

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
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
        pt={10}
        pb={8}
        pl={3}
        pr={3}
        className={"content-container"}
      >
        <FeatureImage
          image={workOfArt.artObject?.webImage.url.replace("s0", "w600-h350")}
          imagePopup={workOfArt.artObject?.webImage.url.replace("s0", "w2000")}
          title={workOfArt.artObject?.title}
          artist={workOfArt.artObject?.label.makerLine}
          width={{ sm: "100%", md: "50%" }}
        />
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
          width={{ sm: "100%", md: "50%" }}
        >
          <Article
            title={workOfArt.artObject?.title}
            artist={workOfArt.artObject?.label.makerLine}
            description={workOfArt.artObject?.label.description}
            objectCollection={workOfArt.artObject?.objectCollection}
          />
          <Stack direction={"row"} spacing={2}>
            <Button
              variant="contained"
              selected={isFavorite}
              startIcon={displayIcon()}
              onClick={() => {
                setIsFavorite(!isFavorite);
              }}
            >
              Favori
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setIsLoading(true);
                getTinderArt();
              }}
              startIcon={<NavigateNextIcon />}
            >
              Suivant
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
        </Stack>
      </Stack>
      <SearchBar />
    </>
  );
}

export default Content;
// <SearchBar />
// BGcolor={workOfArt.artObject?.colors[0].hex}
//workOfArt.artObject?.colors.hex
