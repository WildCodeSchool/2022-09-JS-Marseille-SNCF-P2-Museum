import React, { useState, useEffect, useContext } from "react";
import ListContext from "../../../contexts/ListContext";
import Pagination from "@mui/material/Pagination";
import axios from "axios";

function GalleryButton(props) {
   //const { page, setPage } = (props);
   const page = props.page;
   const setPage = props.setPage;

   //creation du state totalNumber pour actualiser la pagination
   const [totalNumber, setTotalNumber] = useState([])
   //import de type, datingPeriod et artist depuis le contexte pour actualiser la pagination
   const {type, setType} = useContext(ListContext);
   const {datingPeriod, setDatingPeriod} = useContext(ListContext);
   const {artist, setArtist} = useContext(ListContext);

  //getItems fait la requete API
  const getItems = () => {
    //variables de type string qui vont composer mon appel à l'API de manière dynamique selon les filtres cliqués
    let myStr = "";
    
    let myTypeStr= `&type=${type?.label}`;
    if(type?.label != undefined ){
      myStr += myTypeStr; 
    }

    let myArtistStr=`&involvedMaker=${artist?.label}`;
    if(artist?.label != undefined ){
      myStr += myArtistStr; 
    }

    let myPeriodStr= `&f.dating.period=${datingPeriod?.id}`;
    if(datingPeriod?.id != undefined ){
      myStr += myPeriodStr; 
    }
    
    //requête API qui prend en compte les filtres 
    axios
      .get(
        `https://www.rijksmuseum.nl/api/en/collection?key=DIccpaSN&ps=100${myStr}`
      )
      .then(({ data: { artObjects } }) => {
        setTotalNumber(artObjects);
      });
   };
   //écoute la modification des filtres et relance getItems lors d'un changement
   useEffect(() => {
      getItems();
   }, [type?.label, artist?.label, datingPeriod?.id]);

   const handleChangePage=(event,page) => {
     setPage(page);
     const startGallery=document.getElementById("startGallery")
      
     startGallery.scrollIntoView();
      
   }
  
 

 
   return (
      <div className="GalleryButton" > 
         <Pagination 
            /*count = nombre total d'éléments à paginer en divisant le nombre total d éléments par 9(nombre d oeuvres par page) et en arrondissant le résultat à l entier supérieur.*/
            count={Math.ceil(totalNumber.length /9)}
            color="primary" 
           
            value={page} 
            onChange={handleChangePage}>
         </Pagination>
     </div> 
   )
}
export default GalleryButton;


  

 
  

  
