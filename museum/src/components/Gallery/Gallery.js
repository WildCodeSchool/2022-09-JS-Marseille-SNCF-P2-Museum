import React, { useState, useEffect, useContext } from "react";
import CardBody from "./Card/CardBody";
import GalleryButton from "./ButtonGallery/GalleryButton";
import GalleryFooter from "./Galleryscroll";
import axios from "axios";
import Masonry from "@mui/lab/Masonry";
import ListContext from "../../contexts/ListContext";
//import "./Gallery.css";//

const Gallery = () => {
  //paintsItems permet de remplir la gallerie avec des oeuvres
  const [paintsItems, setPaintsItems] = useState([]);
  //page permet de changer les oeuvres affichées en fonction de la page
  const [page, setPage] = useState(1);
  //type, datingPeriod et artist sont importés depuis le contexte pour filtrer les oeuvres
  const { type, setType } = useContext(ListContext);
  const { datingPeriod, setDatingPeriod } = useContext(ListContext);
  const { artist, setArtist } = useContext(ListContext);

  //getItems fait la requete API
  const getItems = () => {
    //variables de type string qui vont composer mon appel à l'API de manière dynamique
    let myStr = "";

    let myTypeStr = `&type=${type?.label}`;
    if (type?.label != undefined) {
      myStr += myTypeStr;
    }

    let myArtistStr = `&involvedMaker=${artist?.label}`;
    if (artist?.label != undefined) {
      myStr += myArtistStr;
    }

    let myPeriodStr = `&f.dating.period=${datingPeriod?.id}`;
    if (datingPeriod?.id != undefined) {
      myStr += myPeriodStr;
    }

    //requête API
    axios
      .get(
        `https://www.rijksmuseum.nl/api/en/collection?key=DIccpaSN&p=${page}&ps=9${myStr}`
      )
      .then(({ data: { artObjects } }) => {
        setPaintsItems(artObjects);
      });
  };

  //au changement de page et/ou type.label et/ou artist?.label et/ou datingPeriod?.id, relance la requete à l'API (via getItems)
  useEffect(() => {
    getItems();
  }, [page, type?.label, artist?.label, datingPeriod?.id]);

  return (
    <div className="gallery-body">

          <Masonry columns={{ xs: 1, sm: 2, md:3,lg:4 }} spacing={4} >
            {paintsItems.map((item, index) => (
              <CardBody
                image={item?.webImage.url.replace("s0", "w310")}
                imagePopup={item?.webImage.url.replace("s0", "w3000")}
                title={item.title}
                artist={item.principalOrFirstMaker}
              />
            ))}
          </Masonry>
       
        <GalleryButton
          page={page}
          setPage={setPage}
          paintsItems={paintsItems}
        />
      

      <GalleryFooter />
    </div>
  );
};

export default Gallery;
