import React, { useState } from 'react';
import FavoriteIcon from "@mui/icons-material/Favorite";


const CardIcon = (props) => {
 
      const [isFavorite, setIsFavorite] = useState(props.isFavorite)
      
      function handleClickFavorite() {
        console.log('click');
         setIsFavorite(!isFavorite);
         console.log(isFavorite);
      }
      
    return (
       
         <div id="icon-gallery"className={isFavorite ? 'isFavorite' : 'notFavorite'}
          onClick={handleClickFavorite}>
            <FavoriteIcon  size='small'/>
          </div>
              
        
    );
};

export default CardIcon ;