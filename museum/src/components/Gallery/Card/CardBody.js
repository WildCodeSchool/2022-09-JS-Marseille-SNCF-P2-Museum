import React from "react";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import CardIcon from "./CardIcon";
import "../Gallery.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";

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
        <ListItem alignItems="flex-start">
          <CardTitle title={props.title} artist={props.artist} />

          <ListItemAvatar alignItems="flex-end">
            <CardIcon selected={"setSelected"} />
          </ListItemAvatar>
        </ListItem>
      </CardContent>
    </Card>
  );

 



};
export default CardBody;

