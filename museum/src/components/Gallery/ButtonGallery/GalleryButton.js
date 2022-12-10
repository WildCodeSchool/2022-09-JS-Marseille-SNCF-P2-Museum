import React, {useEffect, useState } from 'react';
import Pagination from "@mui/material/Pagination";





function GalleryButton(props) {
   const getItems=(props);
   const { page, setPage } = (props);
  /* const [rowsPerPage, setRowsPerPage] = useState(10)*/

     const handleChangePage=(event) => {
     setPage(parseInt(event.target.value));
     
       console.log(page,"button");
   }
   /*const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };*/
    useEffect (() => {
      setPage(0)
    }, [getItems]);
   return (
      <div className="GalleryButton"> 
         <Pagination count={10}color="primary" 
            value={page} 
             onPageChange={handleChangePage}
           /* rowsPerPage={rowsPerPage}*/
          /*  onRowsPerPageChange={handleChangeRowsPerPage}*/
            >
         </Pagination>
     </div> 
   )
}
export default GalleryButton;


  

 
  

  
