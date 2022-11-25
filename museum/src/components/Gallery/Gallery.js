import React, {useState} from "react";
import CardBody from "./CardBody";

const Gallery = () => {
   const [paintsItems,setPaintsItems]= useState([]);
   



    return (

        <div className="gallery-body">
           <CardBody/>
           <CardBody/>
           <CardBody/>
           <CardBody/>
           <CardBody/>
           <CardBody/>
        </div>
    );
};

export default Gallery;