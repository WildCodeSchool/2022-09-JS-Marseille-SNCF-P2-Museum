import React from "react";
import FooterLogo from "./FooterLogo";
import FooterAbout from "./FooterAbout";
import FooterAddress from "./FooterAddress";
import FooterMap from "./FooterMap";
import { Stack } from "@mui/system";
import { Divider } from "@mui/material";

const FooterContent = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      divider={<Divider orientation="vertical" flexItem />}
      spacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <FooterLogo />
      <FooterAbout />
      <FooterAddress />
      <FooterMap />
    </Stack>
  );
};

export default FooterContent;
