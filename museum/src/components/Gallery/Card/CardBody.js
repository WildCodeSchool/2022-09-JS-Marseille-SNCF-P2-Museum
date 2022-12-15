import React from "react";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import CardIcon from "./CardIcon";
import "../Gallery.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ListItemIcon from '@mui/material/ListItemIcon';
import { flexbox } from "@mui/system";

const CardBody = (props) => {


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardImage
        image={props.image}
        imagePopup={props.imagePopup}
        title={props.title}
        artist={props.artist}
      />
      
      <CardContent>
        <CardIcon selected={"setSelected"} />
        <CardTitle title={props.title} artist={props.artist} />
      </CardContent>
    </Card>
  );
};
export default CardBody;
