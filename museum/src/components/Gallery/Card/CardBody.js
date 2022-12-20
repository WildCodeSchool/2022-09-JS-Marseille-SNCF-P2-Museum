import React from "react";
import CardImage from "./CardImage";

import CardTitle from "./CardTitle";
import CardIcon from "./CardIcon";
import "../Gallery.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Stack } from "@mui/system";

const CardBody = (props) => {
  return (
    <>
      <Card
        elevation={4}
        sx={{
          maxWidth: { xs: "100%", sm: "50%", md: "33%", lg: "25%" },
          backgroundColor: "bgCard.main",
        }}
      >
        <CardImage
          image={props.image}
          alt={props.title}
          imagePopup={props.imagePopup}
          title={props.title}
          artist={props.artist}
        />
        <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={2}
          >
            <CardTitle title={props.title} artist={props.artist} />
            <CardIcon selected={"setSelected"} />
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};
export default CardBody;
