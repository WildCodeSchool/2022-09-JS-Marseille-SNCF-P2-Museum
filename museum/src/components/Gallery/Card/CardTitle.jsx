import React from 'react';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import { red } from '@mui/material/colors';
const CardTitle = ({title, artist}) => {
    return (
      <Box>
        <Typography>{title}</Typography>
        <Typography variant="subtitle1">{artist}</Typography>
      </Box>
    );
};

export default CardTitle ;
