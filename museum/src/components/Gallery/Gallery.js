import React, { useState, useEffect, useContext } from "react";
import CardBody from "./CardBody";
import GalleryButton from "./GalleryButton";
import GalleryFooter from "./GalleryFooter";
import axios from "axios";
import ReactPaginate from 'react-paginate';
import ListContext from "../../contexts/ListContext";

const Gallery = () => {
  const [paintsItems, setPaintsItems] = useState([]);
  const {type, setType} = useContext(ListContext);
  const {datingPeriod, setDatingPeriod} = useContext(ListContext);
  const {artist, setArtist} = useContext(ListContext);

  console.log("artist",artist.label)
  console.log("periode:",datingPeriod.id);
  console.log("type:",type.label)

  const getItems = () => {
    console.log("get item", type.label)
    if (type?.label == null){
      console.log("test if")
      axios
      .get(
        `https://www.rijksmuseum.nl/api/en/collection?key=DIccpaSN&p=1&ps=9`
      )
      .then(({ data: { artObjects } }) => {
        setPaintsItems(artObjects);
      });
    }else{
      console.log(type?.label, "else")
    axios
      .get(
        `https://www.rijksmuseum.nl/api/en/collection?key=DIccpaSN&p=1&ps=9&type=${type?.label}`
      )
      .then(({ data: { artObjects } }) => {
        setPaintsItems(artObjects);
      });}
  };

  //au changement de type.label (depuis artist.js) relance la requete à l'API
  useEffect (() => {
    getItems()
  }, [type?.label]);
 
  
  return (
    
    <div className="gallery-body">
      <div className="wrap">
        {paintsItems.map((item, index) =>
          <CardBody 
          image={item.webImage.url.replace('s0', 'w300')}
          title={item.title} 
          />
        )}
        <GalleryButton/>
        <GalleryFooter />
      
    </div>
   </div>
  )
};

export default Gallery;
