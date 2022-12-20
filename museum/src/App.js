import React, { useState } from "react";
import "./App.css";
import PrimaryContainer from "./components/PrimaryContainer/PrimaryContainer";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import ListContext from "./contexts/ListContext";
import IsSelectedContext from "./contexts/IsSelectedContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#AE8E5F",
      contrastText: "#fff",
    },
    secondary: {
      main: "#E8DBCB",
      contrastText: "#000",
    },
    footerBG: {
      main: "#060403",
      contrastText: "#fff",
    },
  },
  typography: {
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    h2article: {
      fontSize: 40,
      color: "#FFF",
    },
    bodyarticle: {
      fontWeight: 500,
      color: "#FFF",
    },
    bodyartist: {
      fontSize: 20,
      fontWeight: 500,
      color: "#FFF",
    },
  },
});

function App() {
  const [type, setType] = useState("");
  const [datingPeriod, setDatingPeriod] = useState("");
  const [artist, setArtist] = useState("");
  const [isSelected, setIsSelected] = useState([]);
  return (
    <div className="App">
      <ListContext.Provider
        value={{
          type: type,
          setType: setType,
          datingPeriod: datingPeriod,
          setDatingPeriod: setDatingPeriod,
          artist: artist,
          setArtist: setArtist,
        }}
      >
        <IsSelectedContext.Provider
          value={{ isSelected: isSelected, setIsSelected: setIsSelected }}
        >
          <ThemeProvider theme={theme}>
            <PrimaryContainer />
            <Gallery />
          </ThemeProvider>
        </IsSelectedContext.Provider>
      </ListContext.Provider>
      <ThemeProvider theme={theme}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
          variant="footerBG"
          bcolor="footerBG"
        >
          <Footer />
        </Stack>
      </ThemeProvider>
    </div>
  );
}

export default App;
