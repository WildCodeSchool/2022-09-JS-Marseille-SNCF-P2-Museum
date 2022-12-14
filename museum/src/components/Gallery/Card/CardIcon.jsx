import React, { useState } from 'react';
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";


const CardIcon = (props) => {
 
      const [selected, setSelected] = useState(false);
      
      
    return (
    
       <IconButton
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
      <FavoriteIcon />
    </IconButton>
    );
};

export default CardIcon ;