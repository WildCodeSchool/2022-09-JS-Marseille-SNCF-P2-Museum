import * as React from "react";
import Avatar from '@mui/material/Avatar';
import { ListItemAvatar } from "@mui/material";


const SelectedCardImage = ({ image, title }) => {
  
  return (
    <ListItemAvatar>
      <Avatar
        src={image}
        alt={title}
        variant="rounded"
      />
    </ListItemAvatar>
  );
};

export default SelectedCardImage;
