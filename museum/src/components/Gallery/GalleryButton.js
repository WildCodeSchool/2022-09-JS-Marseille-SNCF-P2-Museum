
import {useState} from 'react';
import Pagination from "@mui/material/Pagination";


const GalleryButton= () => {
const [page, setPage]= useState(1)
const handleChange=(e,p) => {
   console.log(e,p)
   setPage(p)
}
   return (
      <div className="GalleryButton"> 
      <Pagination count={10}color="primary" onChange={handleChange}>

      </Pagination>
    </div>
   );
   
}
export default GalleryButton;