import React, {useContext, useEffect, useState} from "react";
import CardImage from "./CardImage";

import CardTitle from "./CardTitle";
import CardIcon from "./CardIcon";
import "../Gallery.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Stack } from "@mui/system";
import IsSelectedContext from "../../../contexts/IsSelectedContext"

const CardBody = (props) => {
  //import de selected et isSelected depuis le contexte pour stocker les oeuvres favorites dans le drawer
  const {isSelected, setIsSelected} = useContext(IsSelectedContext);
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    const item = props.item;
    if (selected === true && !isSelected.includes(item)) {
      setIsSelected([...isSelected, item])
    }else if (selected === false && isSelected.includes(item)) {
      let index = isSelected.indexOf(item);
      console.log("index", index);
      isSelected.splice(index,1);
    };
  }, [selected]);

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
            <CardIcon selected={selected} setSelected={setSelected}/>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};
export default CardBody;
