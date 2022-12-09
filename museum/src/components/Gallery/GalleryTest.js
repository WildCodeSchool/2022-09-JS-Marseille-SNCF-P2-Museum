import React, { useState, useEffect } from "react";
import CardBody from "./CardBody";
import GalleryButton from "./GalleryButton";
import GalleryFooter from "./GalleryFooter";
import axios from "axios";



   

  return (
    <div className="gallery-body">
      <div className="wrap">
        <CardBody image={paintsItems[0].artObjects.webImage.url} />
        <CardBody image={paintsItems[1].artObjects.webImage.url} />
        <CardBody image={paintsItems[2].artObjects.webImage.url} />
        <CardBody image={paintsItems[3].artObjects.webImage.url} />
        <CardBody image={paintsItems[4].artObjects.webImage.url} />
        <CardBody image={paintsItems[5].artObjects.webImage.url} />
        <CardBody image={paintsItems[6].artObjects.webImage.url} />
        <CardBody image={paintsItems[7].artObjects.webImage.url} />
        <CardBody image={paintsItems[8].artObjects.webImage.url} />
       

        <GalleryButton/>
        <GalleryFooter />
      
    </div>
   </div>
  );
  };

  
export default GalleryTest;
