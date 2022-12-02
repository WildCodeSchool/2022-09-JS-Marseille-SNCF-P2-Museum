import React from "react";

const CardImage = (props) => {
  return (
      <img className="gallery-card-image" src={props.picture} alt="tableau"></img>
  );
};

export default CardImage;
