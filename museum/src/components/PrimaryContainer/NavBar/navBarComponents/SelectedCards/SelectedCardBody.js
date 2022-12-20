import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Stack } from "@mui/system";
import SelectedCardImage from "../SelectedCards/SelectedCardImage";
import SelectedCardTitle from "../SelectedCards/SelectedCardTitle";


const SelectedCardBody = (props) => {
  return (
    <Card  >
      <SelectedCardImage
        image={props.image}
        imagePopup={props.imagePopup}
      />
      <CardContent>
        <Stack
          direction="raw"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <SelectedCardTitle title={props.title} artist={props.artist} />
        </Stack>
      </CardContent>
    </Card>
  );
};
export default SelectedCardBody;