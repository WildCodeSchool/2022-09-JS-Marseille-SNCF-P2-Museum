import React, { useState} from "react";
import './App.css';
import PrimaryContainer from './components/PrimaryContainer/PrimaryContainer';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import ListContext from "./contexts/ListContext";
import IsSelectedContext from "./contexts/IsSelectedContext"
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#AE8E5F",
      contrastText: "#fff",
    },
    secondary: {
      main: "#E8DBCB",
      contrastText: "#000",
    },
  },
  typography: {
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
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
      <ListContext.Provider value={{type:type, setType:setType, datingPeriod:datingPeriod, setDatingPeriod:setDatingPeriod, artist:artist, setArtist:setArtist}}>
        <IsSelectedContext.Provider value={{isSelected:isSelected, setIsSelected:setIsSelected}}>
          <ThemeProvider theme={theme}>
            <PrimaryContainer />
            <Gallery />
          </ThemeProvider>
        </IsSelectedContext.Provider> 
      </ListContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
