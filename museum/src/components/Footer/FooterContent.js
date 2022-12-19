import React from "react";
import FooterLogo from "./FooterLogo";
import FooterAbout from "./FooterAbout";
import FooterAddress from "./FooterAddress";
import FooterMap from "./FooterMap";

import { Stack } from "@mui/system";
import Divider from "@mui/material/Divider";

const FooterContent = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "column", md: "row" }}
      spacing={{ xs: 1, sm: 2, md: 3 }}
      justifyContent={{ xs: "center", sm: "space-around" }}
      alignItems={{ xs: "center", sm: "center", md: "start" }}
      
    >
      <FooterLogo />
      <Divider orientation="vertical" />
      <FooterAbout />
      <Divider orientation="vertical" flexItem />
      <FooterAddress />
      <Divider orientation="vertical" flexItem />
      <FooterMap />
    </Stack>
  );
};

export default FooterContent;
