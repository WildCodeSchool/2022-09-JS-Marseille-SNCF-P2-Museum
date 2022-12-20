import React from 'react';
import TypeFilter from './Type';
import Artist from './Artist';
import DatingPeriod from './DatingPeriod';

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