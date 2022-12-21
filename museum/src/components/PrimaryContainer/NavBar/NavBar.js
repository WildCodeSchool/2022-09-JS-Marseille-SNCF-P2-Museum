import React from "react";
import "./NavBar.css";
import NavButton from "./navBarComponents/NavButton";
import NavTitle from "./navBarComponents/NavTitle";
import Logo from "./navBarComponents/Logo";
import Stack from "@mui/material/Stack";

function NavBar() {
  return (
    <Stack direction="row" spacing={2} className={"NavBar"}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        className={"NavBarwrap"}
        pt={3}
        pb={3}
        pl={2}
        pr={2}
      >
        <Logo />
        <NavTitle sx={{ display: { xs: "none", sm: "block" } }} />
        <NavButton />
      </Stack>
    </Stack>
  );
}

export default NavBar;
