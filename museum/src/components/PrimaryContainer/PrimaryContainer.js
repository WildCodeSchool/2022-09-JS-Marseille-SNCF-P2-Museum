import React, { useState } from "react";
import "./PrimaryContainer.css";
import NavBar from "./NavBar/NavBar";
import Content from "./Content/Content";

//on tire le JSON d'une seule oeuvre artObject
const uniqueArt = {
  artObject: {
    title: "De Nachtwacht",
    webImage: {
      url: "https://lh3.googleusercontent.com/J-mxAE7CPu-DXIOx4QKBtb0GC4ud37da1QK7CzbTIDswmvZHXhLm4Tv2-1H3iBXJWAW_bHm7dMl3j5wv_XiWAg55VOM=w500",
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
      colors: {
        hex: "#eeeeee",
      },
    },
  },
};

function PrimaryContainer() {
  const [workOfArt, setWorkOfArt] = useState(uniqueArt);

  return (
    <div
      className="PrimaryContainer"
      style={{
        backgroundImage: `url(${workOfArt.artObject?.webImage.url.replace(
          "s0",
          "w1200"
        )})`,
      }}
    >
      <NavBar />
      <Content workOfArt={workOfArt} setWorkOfArt={setWorkOfArt} />
    </div>
  );
}

export default PrimaryContainer;
