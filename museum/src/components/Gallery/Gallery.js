import React, { useState, useEffect } from "react";
import CardBody from "./Card/CardBody";
import GalleryButton from "./ButtonGallery/GalleryButton";
import GalleryFooter from "./Galleryscroll";
import axios from "axios";
import Masonry from "@mui/lab/Masonry";

import "./Gallery.css";


const Gallery = () => {
  const [paintsItems, setPaintsItems] = useState([]);
  const [page, setPage] = useState(1);

  const getItems = () => {
    axios
      .get(
        `https://www.rijksmuseum.nl/api/en/collection?key=DIccpaSN&p=${page}&ps=9`
      )
      .then((response) => response.data.artObjects)
      .then((data) => {
        console.log("data :", data)
        setPaintsItems(data);
      });
  };

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
              image={item?.webImage.url.replace("s0", "w310")}
              imagePopup={item?.webImage.url.replace("s0", "w3000")}
              title={item.title}
              artist={item.principalOrFirstMaker}
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
