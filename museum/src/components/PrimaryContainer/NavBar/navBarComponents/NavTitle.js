import React from 'react';
import Rijksmuseum from './rijksmuseum.png'

function NavTitle() {
    return(
        <div className='NavTitle'>
            <img src={Rijksmuseum} alt="logo de rijksmuseum"/>
        </div>
    );
}

export default NavTitle;