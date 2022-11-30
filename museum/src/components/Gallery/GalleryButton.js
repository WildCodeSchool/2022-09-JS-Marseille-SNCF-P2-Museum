import React from 'react';



const GalleryButton = (props) => {
    return (
        <div>
            <button className="button" type={props.type || "button"}
            onClick={props.onClick}>
 
            {props.children}
            Ajoutez +</button>
        </div> 
    );
};

export default GalleryButton;