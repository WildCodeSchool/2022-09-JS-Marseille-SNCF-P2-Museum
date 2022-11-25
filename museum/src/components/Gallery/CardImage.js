import React from "react";

const CardImage = (props) => {
  return (
    <div className="gallery-card-image">
      <img src={props.picture} alt="tableau"></img>
    </div>
  );
};

export default CardImage;
