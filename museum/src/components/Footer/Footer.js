import React from "react";

import FooterContent from "./FooterContent/FooterContent";
import FooterLegacy from "./FooterLegacy/FooterLegacy";
import Stack from "@mui/material/Stack";

const Footer = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      mt={3}
      sx={{ maxWidth:  "1200px" }}
    >
      <FooterContent />
      <FooterLegacy />
    </Stack>
  );
};

export default Footer;
