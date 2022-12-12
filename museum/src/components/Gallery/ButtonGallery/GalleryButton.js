import React, {useEffect } from 'react';
import Pagination from "@mui/material/Pagination";

function GalleryButton(props) {
   //const { page, setPage, getItems } = (props);
   const page = props.page;
   const setPage = props.setPage;
   

     const handleChangePage=(event,page) => {
     setPage(page);
    
     
       console.log({page},"button");
   }
  
  /* useEffect (( )=> {
     getItems()
    }, [setPage]);*/

   return (
      <div className="GalleryButton"> 
         <Pagination count={10}color="primary" 
            value={page} 
             onChange={handleChangePage}
      
            >
         </Pagination>
     </div> 
   )
}
export default GalleryButton;


  

 
  

  
