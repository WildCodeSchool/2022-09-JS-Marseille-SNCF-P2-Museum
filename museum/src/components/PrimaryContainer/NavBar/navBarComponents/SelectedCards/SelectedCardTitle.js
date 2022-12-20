import React from 'react';
import { ListItemText } from '@mui/material';

const SelectedCardTitle = ({title, artist}) => {
    return (
      <ListItemText
        primary={artist}
        secondary={
          <React.Fragment>
           {title}
          </React.Fragment>
        }  
      />
    );
};

export default SelectedCardTitle ;
