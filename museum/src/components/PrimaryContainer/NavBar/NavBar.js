import React from "react";
import "./NavBar.css";
import NavButton from "./navBarComponents/NavButton";
import NavTitle from "./navBarComponents/NavTitle";
import Logo from "./navBarComponents/Logo";
import Stack from "@mui/material/Stack";

function NavBar() {
  return (
    <Stack
      direction="row"
      spacing={2}
      className={"NavBar"}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        className={"NavBarwrap"}
        pt={3}
        pb={3}
      >
        <Logo />
        <NavTitle />
        <NavButton />
      </Stack>
    </Stack>
  );
}

export default NavBar;
