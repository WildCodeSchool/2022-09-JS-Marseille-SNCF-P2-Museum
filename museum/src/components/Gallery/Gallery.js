import React, { useState, useEffect } from "react";
import CardBody from "./CardBody";
import GalleryButton from "./GalleryButton";
import GalleryFooter from "./GalleryFooter";
import axios from "axios";
import ReactPaginate from 'react-paginate';

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
