import React from "react";
import FooterLogo from "./Footerlogo/FooterLogo";
import FooterAbout from "./FootrAbout/FooterAbout";
import FooterAddress from "./FooterAdress/FooterAddress";
import FooterMap from "./FooterMap/FooterMap";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";



const FooterContent = () => {
  return (
    <>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 3, md: 2 }}>
        <Grid item lg={2} md={2} sm={2} xs={2} ml={2}>
          <FooterLogo />
        </Grid>
        <Grid item lg={3} md={3} sm={4} xs={8} ml={2} mr={2}>
          <FooterAbout />
        </Grid>
        <Grid item lg={3} md={3} sm={4} xs={12} ml={2} mr={2}>
          <FooterAddress />
        </Grid>
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <FooterMap />
        </Grid>
      </Grid>
    </>
  );
};

export default FooterContent;

// les Divider n'apparaissent pas !!