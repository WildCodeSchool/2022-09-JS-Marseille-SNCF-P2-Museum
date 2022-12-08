import React from "react";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import CardIcon from "./CardIcon";
import "./Gallery.css";


const CardBody = (props) => {
  return (
    
    <div className="gallery-card-body">
      <CardImage image={props.image} />
     
      <div className="gallery-card-footer">
        <CardTitle title={props.title}/>
        <CardIcon isFavorite={"isFavorite"} />  
      </div>
    </div>
   
  );
};
export default CardBody;
