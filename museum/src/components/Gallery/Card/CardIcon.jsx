import React, { useState } from 'react';


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
          </div>
              
        
    );
};

export default CardIcon ;