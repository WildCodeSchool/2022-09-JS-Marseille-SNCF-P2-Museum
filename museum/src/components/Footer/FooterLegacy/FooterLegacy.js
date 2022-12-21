import React from "react";
import { Stack } from "@mui/system";


const FooterLegacy = () => {

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      alignItems="center"
      spacing={{ xs: 1, sm: 2, md: 10 }}
      borderTop={1}
      paddingTop={2}
    >
      <img src="./R.png" alt="M entouré pointille dans carré blanc" />
      <h5>En partenariat avec Musée de France</h5>
      <h5>Mentions Legales</h5>
      <h5>Données Personnelles</h5>
      <h5>Crédits Photographiques</h5>
    </Stack>
  );
};

export default FooterLegacy;
