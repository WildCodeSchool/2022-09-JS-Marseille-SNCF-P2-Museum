import React, { useEffect, useState } from 'react';


const GalleryFooter = () => {
const [backToTop, setBackToTop]=useState(false);
useEffect(()=>{
    window.addEventListener("scroll", ()=>{
        if (window.scrollY>100){
            setBackToTop(true)
        } else{
            setBackToTop(false)
        }
    }
    )
},[])
const scrollUp=()=>{
window.scrollTo({
top:16,
behavior:"auto",
})
} 
    return <div className= "top">
   {backToTop && (
    <button style={{
        position:"fixed",
        bottom:"50px",
        right:"50px",
        height:"50px",
        width:"50px",
        fontSize:"50px",
    }}
    onClick={scrollUp}>
    ^</button>
   
   )}
   </div>

 };
        



export default GalleryFooter;