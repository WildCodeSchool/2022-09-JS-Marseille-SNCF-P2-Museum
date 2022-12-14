import React, { useState, useEffect, useContext } from "react";
import CardBody from "./Card/CardBody";
import GalleryButton from "./ButtonGallery/GalleryButton";
import GalleryFooter from "./Galleryscroll";
import axios from "axios";
import Masonry from "@mui/lab/Masonry";
import ListContext from "../../contexts/ListContext";
import "./Gallery.css";

const Gallery = () => {
  const [paintsItems, setPaintsItems] = useState([]);
  const [page, setPage] = useState(1);
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
        `https://www.rijksmuseum.nl/api/en/collection?key=DIccpaSN&p=${page}&ps=9`
      )
      .then(({ data: { artObjects } }) => {
        setPaintsItems(artObjects);
      });
    }else{
      console.log(type?.label, "else")
    axios
      .get(
        `https://www.rijksmuseum.nl/api/en/collection?key=DIccpaSN&p=${page}&ps=9&type=${type?.label}`
      )
      .then(({ data: { artObjects } }) => {
        setPaintsItems(artObjects);
      });}
  };

  //au changement de type.label (depuis artist.js) relance la requete à l'API
  useEffect(() => {
    getItems();
    console.log(page, "gallery");
  }, [page]);
 
  
  return (
    <div className="gallery-body" id="startGallery">
      <div className="wrap">
        <Masonry columns={3} spacing={4}>
          {paintsItems.map((item, index) => (
            <CardBody
              image={item?.webImage.url.replace("s0", "w300")}
              title={item.title}
            />
          ))}
        </Masonry>

        <GalleryButton page={page} setPage={setPage} />
      </div>

      <GalleryFooter />
    </div>
  );
};

export default Gallery;
