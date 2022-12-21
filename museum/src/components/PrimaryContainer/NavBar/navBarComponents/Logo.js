import React from 'react';
import MuseumLogo from './museum-logo.png'

function Logo() {
    return(
        <div className='NavLogo'>
            <img src={MuseumLogo} alt="logo de Museum"/>
        </div>
    );
}

export default Logo;