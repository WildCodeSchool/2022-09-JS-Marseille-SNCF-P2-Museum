import React, { useState} from "react";
import './App.css';
import PrimaryContainer from './components/PrimaryContainer/PrimaryContainer';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import ListContext from "./contexts/ListContext";


function App() {
  const [type, setType] = useState("");
  const [datingPeriod, setDatingPeriod] = useState("");
  const [artist, setArtist] = useState("");
  console.log("App",type)
  return (
    <div className="App">
      <ListContext.Provider value={{type:type, setType:setType, datingPeriod:datingPeriod, setDatingPeriod:setDatingPeriod, artist:artist, setArtist:setArtist}}>
        <PrimaryContainer />
        <Gallery/>
      </ListContext.Provider>
        <Footer />
    </div>      
  );
}

export default App;
