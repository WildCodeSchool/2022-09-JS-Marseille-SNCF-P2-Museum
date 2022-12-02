import React from 'react';
import Type from './filter/Type';
import Artist from './filter/Artist';
import DatingPeriod from './filter/DatingPeriod';

function Filter() {
    return(
        <div className='navFilter'>
            <div>Filtrer par:</div>
            <Type/>
            <Artist/>
            <DatingPeriod/>
        </div>
    );
}

export default Filter;