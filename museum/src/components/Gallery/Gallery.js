import React, { useState } from "react";
import CardBody from "./CardBody";

const Gallery = () => {
  const [paintsItems, setPaintsItems] = useState([
    {
      title: "tableau 1",
      isFavorite: "",
      picture: "https://picsum.photos/200/150",
    },
    {
        title: "",
        isFavorite: "",
        picture: "https://picsum.photos/200/150",
      },
      {
        title: "",
        isFavorite: "",
        picture: "https://picsum.photos/200/150",
      },
      {
        title: "",
        isFavorite: "",
        picture: "https://picsum.photos/200/150",
      }, 
      {
        title: "",
        isFavorite: "",
        picture: "https://picsum.photos/200/150",
      },
      {
        title: "",
        isFavorite: "",
        picture: "https://picsum.photos/200/150",
      },
      {
        title: "",
        isFavorite: "",
        picture: "https://picsum.photos/200/150",
      },
      

  ]);

  return (
    <div className="gallery-body">
      <CardBody picture={paintsItems[0].picture} />
      <CardBody picture={paintsItems[0].picture}/>
      <CardBody picture={paintsItems[0].picture} />
      <CardBody picture={paintsItems[0].picture}/>
      <CardBody picture={paintsItems[0].picture} />
      <CardBody picture={paintsItems[0].picture}/>
      <CardBody picture={paintsItems[0].picture} />
      <CardBody picture={paintsItems[0].picture}/>
      <CardBody picture={paintsItems[0].picture} />
      <CardBody picture={paintsItems[0].picture}/>
      <CardBody picture={paintsItems[0].picture} />
      <CardBody picture={paintsItems[0].picture}/>
      <CardBody picture={paintsItems[0].picture} />
      <CardBody picture={paintsItems[0].picture}/>
      <CardBody picture={paintsItems[0].picture} />
      <CardBody picture={paintsItems[0].picture}/>
      <CardBody picture={paintsItems[0].picture} />
      <CardBody picture={paintsItems[0].picture}/>
    </div>
  );
};

export default Gallery;
