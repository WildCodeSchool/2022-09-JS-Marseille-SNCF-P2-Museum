import React, { useState } from "react";
import "./App.css";
import PrimaryContainer from "./components/PrimaryContainer/PrimaryContainer";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import ListContext from "./contexts/ListContext";
import IsSelectedContext from "./contexts/IsSelectedContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

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
    backgroundGallery: {
      main: "#E8DBCB",
    },
    bgCard: {
      main: "#FDFDFB",
      contrastText: "#fff",
    },
    footerBG: {
      main: "#060403",
      contrastText: "#fff",
    },
    searhSelect: {
      main: "#e8dbcb00",
      contrastText: "#fff",
    },
    myFavoriteSelect: {
      main: "#e8dbcb00",
      contrastText: "#fff",
    },
  },
  typography: {
    subtitle1: {
      fontSize: 12,
      color: "#AE8E5F",
    },
    galeryH2: {
      fontSize: 40,
      color: "#060403",
    },
    subtitle2: {
      fontSize: 18,
      color: "#060403",
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
    footerBG: {
      color: "#E8DBCB",
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
      <ThemeProvider theme={theme} pb={2}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
          sx={{ backgroundColor: "footerBG.main" }}
        >
          <Typography variant="footerBG" gutterBottom>
            <Footer />
          </Typography>
        </Stack>
      </ThemeProvider>
    </div>
  );
}

export default App;
