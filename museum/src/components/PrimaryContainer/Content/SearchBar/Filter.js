import React from 'react';
import TypeFilter from './filter/Type';
import Artist from './filter/Artist';
import DatingPeriod from './filter/DatingPeriod';
import Box from "@mui/material/Box";

function Filter() {
    
    return(
        <Box className='navFilter'>
            <TypeFilter/>
            <Artist/>
            <DatingPeriod/>
        </Box>
    );
}

export default Filter;