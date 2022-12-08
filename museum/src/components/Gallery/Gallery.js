import React, { useState, useEffect } from "react";
import CardBody from "./CardBody";
import GalleryButton from "./GalleryButton";
import GalleryFooter from "./GalleryFooter";
import axios from "axios";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";


const Gallery = () => {
  const [paintsItems, setPaintsItems] = useState([]);

  const getItems = () => {
    axios
      .get(
        'https://www.rijksmuseum.nl/api/nl/collection?key=DIccpaSN&p=1&ps=9'
      )
      .then((response) => response.data.artObjects)
      .then((data) => {
        setPaintsItems(data);
      })
  };

  useEffect (() => {
    getItems()
  }, []);
 
 
  return (
    <div className="gallery-body">
      <div className="wrap">
        <Masonry columns={3} spacing={2}>
        {paintsItems.map((item, index) =>
          <CardBody 
           image={item.webImage.url.replace('s0', 'w300')}

            title={item.title} 
          />
        )}
        </Masonry>
       
        </div>
    
        <GalleryButton/>
        <GalleryFooter />
      </div>
   
  )
};

export default Gallery;
