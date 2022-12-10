import React, { useState, useEffect } from "react";
import CardBody from "./Card/CardBody";
import GalleryButton from "./ButtonGallery/GalleryButton";
import GalleryFooter from "./Galleryscroll";
import axios from "axios";
import Masonry from "@mui/lab/Masonry";
import"./Gallery.css";

const Gallery = () => {
  const [paintsItems, setPaintsItems] = useState([]);
  const [page, setPage] = useState(1);
 
  console.log(page,"gallery")
  const getItems = () => {
    axios
      .get(
        `https://www.rijksmuseum.nl/api/en/collection?key=DIccpaSN&p=${Number(page)}&ps=9`
      )
      .then((response) => response.data.artObjects)
      .then((data) => {
        setPaintsItems(data);
      })
  };

  useEffect (() => {
    getItems()
  },[]);
 
 
  return (
    <div className="gallery-body">
      <div className="wrap">
        <Masonry columns={3} spacing={1}>
        {paintsItems.map((item, index) =>
  
          <CardBody 
           image={item?.webImage.url.replace('s0', 'w300')}

            title={item.title} 
          />
        )}
        </Masonry>
        <GalleryButton page={page} setPage={setPage} getItems={getItems} />
        </div>
      
        <GalleryFooter />
      </div>
   
  )
};

export default Gallery;
