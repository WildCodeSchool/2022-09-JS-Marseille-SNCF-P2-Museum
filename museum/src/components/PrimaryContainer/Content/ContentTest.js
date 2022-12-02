import React, { useState } from "react";
import FeatureImage from "./FeatureImage/FeatureImage";
import Article from "./article/Article";
import "./Content.css";
import axios from "axios";


//on tire le JSON d'une seule oeuvre artObject
const uniqueArt = {
  artObject: {
    title: "De Nachtwacht",
    webImage: {
      url: "https://lh3.googleusercontent.com/J-mxAE7CPu-DXIOx4QKBtb0GC4ud37da1QK7CzbTIDswmvZHXhLm4Tv2-1H3iBXJWAW_bHm7dMl3j5wv_XiWAg55VOM=s0",
    },
    color: {
      hex: "#261808",
    },
    principalMakers: {
      name: "Rembrandt van Rijn",
      dateOfBirth: "1606-07-15",
      dateOfDeath: "1669-10-08",
      nationality: "Noord-Nederlands",
    },
    plaqueDescriptionEnglish:
      "Rembrandt’s largest, most famous canvas was made for the Arquebusiers guild hall. This was one of several halls of Amsterdam’s civic guard, the city’s militia and police. \r\nRembrandt was the first to paint figures in a group portrait actually doing something. The captain, dressed in black, is telling his lieutenant to start the company marching. The guardsmen are getting into formation. Rembrandt used the light to focus on particular details, like the captain’s gesturing hand and the young girl in the foreground. She was the company mascot.\r\n",
    label: {
      title: "De Nachtwacht",
      makerLine: "Rembrandt van Rijn (1606–1669), olieverf op doek, 1642",
      description:
        "Rembrandts beroemdste en grootste schilderij werd gemaakt voor de Kloveniersdoelen. Dit was een van de drie hoofdkwartieren van de Amsterdamse schutterij, de burgerwacht van de stad. Rembrandt was de eerste die op een schuttersstuk alle figuren in actie weergaf. De kapitein, in het zwart, geeft zijn luitenant opdracht dat de compagnie moet gaan marcheren. De schutters stellen zich op. Met behulp van licht vestigde Rembrandt de aandacht op belangrijke details, zoals het handgebaar van de kapitein en het kleine meisje op de voorgrond. Zij is de mascotte van de schutters. De naam Nachtwacht is pas veel later ontstaan, toen men dacht dat het om een nachtelijk tafereel ging.",
      notes: "Multimediatour, 500. Tekst aangeleverd door Jonathan Bikker.",
      date: "2019-07-05",
    },
  },
};

function ContentTest() {
  const [workOfArt, setWorkOfArt] = useState(uniqueArt);

  const getUser = () => {
    axios
      //ATTENTION BIENTOT FILTRE
      .get(
        `https://www.rijksmuseum.nl/api/nl/collection?key=DIccpaSN&involvedMaker=Rembrandt+van+Rijn&imgonly&ps=100`
      )
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        console.log("data ensemble des tableaux", data);

        //on random un nombre sur la totalité de la base de 100
        let randomNbr = Math.floor(Math.random() * data.artObjects.length);
        console.log("random number", randomNbr);

        //On sort l'ID du tableau random
        console.log("ID aléatoire", data.artObjects[randomNbr].objectNumber);
        let winID = data.artObjects[randomNbr].objectNumber;

        //on tente un truc de boucaque !
        axios
          .get(
            `https://www.rijksmuseum.nl/api/nl/collection/${winID}?key=DIccpaSN`
          )
          // Extract the DATA from the received response
          .then((response) => response.data)

          // Use this data to update the state
          .then((data) => {
            console.log("data d'une oeuvre unique : ", data);
            //console.log("URL d'une oeuvre unique", data.artObject.webImage.url);
            console.log("Title d'une oeuvre unique : ", data.artObject.title);

            setWorkOfArt(data);
          });
      });
  };

  return (
    <div className="content-container">
      <div className="wrap">
        <FeatureImage image={workOfArt.artObject?.webImage.url} />
        <Article
          title={workOfArt.artObject?.title}
          artist={workOfArt.artObject?.label.makerLine}
          description={workOfArt.artObject?.label.description}
        />
        <button type="button" onClick={getUser}>
          Autre tableau
        </button>
      </div>
    </div>
  );
}

export default ContentTest;
