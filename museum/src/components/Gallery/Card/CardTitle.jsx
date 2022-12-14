import React from 'react';
import {ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import theme from "../../../App";
import Box from "@mui/material/Box";
const CardTitle = ({title, artist}) => {
    return (
   
      <Box>
        <Typography>{title}</Typography>
        <Typography variant="subtitle1">{artist}</Typography>
      </Box>
  
    );
};

export default CardTitle ;
