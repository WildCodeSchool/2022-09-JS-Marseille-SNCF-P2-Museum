import React from "react";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import CardIcon from "./CardIcon";
import "./Gallery.css";

const CardBody = () => {
  return (
    <div className="gallery-card-body">
      <CardImage />

      <div className="gallery-card-footer">
        <CardTitle />
        <CardIcon isFavorite={"isFavorite"} />
      </div>
    </div>
  );
};
export default CardBody;
