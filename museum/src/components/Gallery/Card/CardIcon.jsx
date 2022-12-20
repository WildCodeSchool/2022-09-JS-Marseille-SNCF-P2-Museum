import React, { useState } from 'react';
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";


const CardIcon = (props) => {
 
      const [selected, setSelected] = useState(false);
     const iconButton = selected ? <FavoriteIcon /> : <FavoriteBorderIcon />;
     console.log("patate : ",iconButton);

    
      
    return (
      <IconButton
        value="check"
        selected={selected}
        onClick={() => {
          setSelected(!selected);
        }}
        color="primary"
      >
        {iconButton}
      </IconButton>
    );
};

export default CardIcon ;