import React from "react";
import './NavBar.css';
import Logo from "./Logo";
import Filter from "./Filter";
import Icons from "./Icons";

function NavBar () {
    return(
        <div className='NavBar'>
            <Logo/>
            <Filter/>
            <Icons/>
        </div>
    );
}

export default NavBar;