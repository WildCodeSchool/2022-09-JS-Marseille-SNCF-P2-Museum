import React, { useState, useContext } from 'react';
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IsSelectedContext from "../../../contexts/IsSelectedContext"


const CardIcon = (props) => {
 
  const {selected, setSelected} = props;
  const iconButton = selected ? <FavoriteIcon /> : <FavoriteBorderIcon />;
     
      
  return (
    <IconButton
      value="check"
      selected={selected}
      onClick={() => {
        setSelected(!selected);
      }}
    >
      {iconButton}
    </IconButton>
  );
};

export default CardIcon ;