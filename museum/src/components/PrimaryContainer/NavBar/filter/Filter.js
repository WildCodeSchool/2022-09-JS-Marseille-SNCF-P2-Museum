import React from 'react';
import Type from './Type';
import Artist from './Artist';
import DatingPeriod from './DatingPeriod';

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