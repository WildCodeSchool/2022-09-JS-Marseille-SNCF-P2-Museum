import React from 'react';
import TypeFilter from './filter/Type';
import Artist from './filter/Artist';
import DatingPeriod from './filter/DatingPeriod';

function Filter() {
    
    return(
        <box className='navFilter'>
            <TypeFilter/>
            <Artist/>
            <DatingPeriod/>
        </box>
    );
}

export default Filter;