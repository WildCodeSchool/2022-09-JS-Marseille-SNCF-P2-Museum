
import Pagination from "@mui/material/Pagination";

function GalleryButton(props) {
   //const { page, setPage, getItems } = (props);
   const page = props.page;
   const setPage = props.setPage;
   

     const handleChangePage=(event,page) => {
     setPage(page);
     const startGallery=document.getElementById("startGallery")
   // window.scrollTo(0,0);
     startGallery.scrollIntoView();
       console.log({page},"button");
   }
  
 

 
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


  

 
  

  
