import React from 'react';
import Rijksmuseum from './rijksmuseum.png'

function NavTitle() {
    return(
        <div className='NavTitle'>
            <p>Plan your visit at </p>
            <img src={Rijksmuseum} alt="logo de rijksmuseum"/>
        </div>
    );
}

export default NavTitle;