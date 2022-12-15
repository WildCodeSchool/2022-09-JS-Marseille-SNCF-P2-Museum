import React from 'react';
import Rijksmuseum from './rijksmuseum.svg'

function NavTitle() {
    return(
        <>
        <div>Plan your visit at </div>
        <img src={Rijksmuseum} alt="logo de rijksmuseum"/>
        </>
    );
}

export default NavTitle;