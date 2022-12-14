import React, { useState, useEffect, useContext } from "react";
import CardBody from "./Card/CardBody";
import GalleryButton from "./ButtonGallery/GalleryButton";
import GalleryFooter from "./Galleryscroll";
import axios from "axios";
import Masonry from "@mui/lab/Masonry";
import ListContext from "../../contexts/ListContext";
import "./Gallery.css";

const Gallery = () => {
  //paintsItems permet de remplir la gallerie avec des oeuvres
  const [paintsItems, setPaintsItems] = useState([]);
  //page permet de changer les oeuvres affichées en fonction de la page
  const [page, setPage] = useState(1);
  //type, datingPeriod et artist sont importés depuis le contexte pour filtrer les oeuvres
  const {type, setType} = useContext(ListContext);
  const {datingPeriod, setDatingPeriod} = useContext(ListContext);
  const {artist, setArtist} = useContext(ListContext);

  console.log("artist",artist?.label)
  console.log("periode:",datingPeriod?.id);
  console.log("type:",type?.label)

  //getItems fait la requete API
  const getItems = () => {
    console.log("get item", type?.label)
    //si le type est null, fait la requête sans utiliser le type
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
      //si type a un contenu, fait la requête API en utilisant la variable type?.label
      console.log(type?.label, "else")
    axios
      .get(
        `https://www.rijksmuseum.nl/api/en/collection?key=DIccpaSN&p=${page}&ps=9&type=${type?.label}`
      )
      .then(({ data: { artObjects } }) => {
        setPaintsItems(artObjects);
      });}
  };

  //au changement de page et/ou type.label et/ou artist?.label et/ou datingPeriod?.id, relance la requete à l'API (via getItems)
  useEffect(() => {
    getItems();
    console.log(page, "gallery");
  }, [page, type?.label, artist?.label, datingPeriod?.id]);
 
  
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
