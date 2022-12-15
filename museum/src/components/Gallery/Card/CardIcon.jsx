import React, { useState } from 'react';
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";


const CardIcon = (props) => {
 
      const [selected, setSelected] = useState(false);
      
      
    return (
      <FavoriteBorderIcon
        value="check"
        selected={selected}
        onChange={() => {
          setSelected(!selected);
        }}
      >
        <FavoriteIcon />
      </FavoriteBorderIcon>
    );
};

export default CardIcon ;