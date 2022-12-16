import React from "react";
import { Stack } from "@mui/system";
import { Divider } from "@mui/material";


const FooterLegacy = () => {

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="space-around"
      alignItems="center"
      divider={<Divider orientation="horizontal" flexItem />}
      spacing={{ xs: 1, sm: 2, md: 7 }}
    >
      <Divider component="" />
      <img src="./R.png" alt="" />
      <p>En partenariat avec Musée de France</p>
      <p>Mentions Legales</p>
      <p>Données Personnelles</p>
      <p>Crédits Photographiques</p>
    </Stack>
  );
};

export default FooterLegacy;
