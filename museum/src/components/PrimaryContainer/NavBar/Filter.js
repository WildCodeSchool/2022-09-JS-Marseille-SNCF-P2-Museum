import React from 'react';
import TypeFilter from './filter/Type';
import Artist from './filter/Artist';
import DatingPeriod from './filter/DatingPeriod';

function Filter() {
    
    return(
        <div className='navFilter'>
            <div>Filtrer par:</div>
            <TypeFilter/>
            <Artist/>
            <DatingPeriod/>
        </div>
    );
}

export default Filter;