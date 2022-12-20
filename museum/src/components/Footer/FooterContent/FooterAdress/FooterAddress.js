import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const FooterAddress = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={6} sm={12}>
          <h3>Coordonnées</h3>
          <p>Museumstraat 1, Amsterdam</p>
          
        </Grid>
        <Grid item xs={6} sm={12}>
          <h3>Horaires des visites:</h3>
          <p>Tous les jours de 9h à 17h</p>
        </Grid>
      </Grid>
    </>
  );
};

export default FooterAddress;
