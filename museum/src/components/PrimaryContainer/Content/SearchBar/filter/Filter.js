import React from "react";
import TypeFilter from "./Type";
import Artist from "./Artist";
import DatingPeriod from "./DatingPeriod";
import Stack from "@mui/material/Stack";

function Filter() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      spacing={2}
      width={{ xs: "100%", md: "60%" }}
    >
      <TypeFilter />
      <Artist />
      <DatingPeriod />
    </Stack>
  );
}

export default Filter;
