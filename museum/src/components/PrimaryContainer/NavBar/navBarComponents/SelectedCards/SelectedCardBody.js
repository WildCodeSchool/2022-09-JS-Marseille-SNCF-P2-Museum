import React from "react";
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import SelectedCardImage from "../SelectedCards/SelectedCardImage";
import SelectedCardTitle from "../SelectedCards/SelectedCardTitle";




const SelectedCardBody = (props) => {
  return (
    <>
      <ListItem alignItems="flex-start">
        <SelectedCardImage
          image={props.image}
          imagePopup={props.imagePopup}
        />
        <SelectedCardTitle title={props.title} artist={props.artist} /> 
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};
export default SelectedCardBody;