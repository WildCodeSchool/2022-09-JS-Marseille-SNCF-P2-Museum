import React, { useContext } from 'react';
import UserButton from './contexts/UserButton';
import {useState} from 'react';
import Pagination from "@mui/material/Pagination";


const GalleryButton= () => {
const {page, setPage}= useContext(UserButton);
const handleChange=(e,p) => {
   setPage(p)
   console.log(p)
}
   return (
      <div className="GalleryButton"> 
      <Pagination count={10}color="primary" onChange={handleChange}>

      </Pagination>
    </div> 
   )
}
export default GalleryButton;
