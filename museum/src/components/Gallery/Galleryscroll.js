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
top:20,
behavior:"auto",
})
} 
    return <div className= "top">
   {backToTop && (
    <button style={{
        position:"fixed",
        bottom:"40px",
        right:"40px",
        height:"40px",
        width:"40px",
        fontSize:"40px",
        borderRadius:"10px",
    }}
    onClick={scrollUp}>
    ^</button>
   
   )}
   </div>

 };
        



export default GalleryFooter;