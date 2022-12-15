import React, { useState } from 'react';
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { color } from '@mui/system';


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