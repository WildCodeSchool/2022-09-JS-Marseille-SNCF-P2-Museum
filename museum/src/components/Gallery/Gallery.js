 import React, { useState } from "react";
import CardBody from "./CardBody";
import GalleryButton from "./GalleryButton";
import GalleryFooter from "./GalleryFooter"

const Gallery = () => {
  const [paintsItems, setPaintsItems] = useState([
    {
      title: "tableau 1",
      isFavorite: "",
      picture: "https://picsum.photos/198/150",
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
      <div className="wrap">
        <CardBody picture={paintsItems[0].picture} />
        <CardBody picture={paintsItems[0].picture} />
        <CardBody picture={paintsItems[0].picture} />
        <CardBody picture={paintsItems[0].picture} />
        <CardBody picture={paintsItems[0].picture} />
        <CardBody picture={paintsItems[0].picture} />
        <CardBody picture={paintsItems[0].picture} />
        <CardBody picture={paintsItems[0].picture} />
        <CardBody picture={paintsItems[0].picture} />
        <CardBody picture={paintsItems[0].picture} />
        <CardBody picture={paintsItems[0].picture} />
        <CardBody picture={paintsItems[0].picture} />
        <CardBody picture={paintsItems[0].picture} />
        <CardBody picture={paintsItems[0].picture} />
        <CardBody picture={paintsItems[0].picture} />
       <CardBody picture={paintsItems[0].picture} /> 
       <GalleryButton/>
       <GalleryFooter />
      
    </div>
   </div>
  )
};

export default Gallery;
