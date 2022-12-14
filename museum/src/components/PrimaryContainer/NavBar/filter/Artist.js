import React, { useState, useEffect, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ListContext from '../../../../contexts/ListContext';

const artistList = [
  {label:"anoniem"},
  {label:"onbekend"},
  {label:"George Hendrik Breitner"},
  {label:"Jan Luyken"},
  {label:"Reinier Vinkeles (I)"},
  {label:"Rembrandt van Rijn"},
  {label:"Daniel Nikolaus Chodowiecki"},
  {label:"Bernard Picart"},
  {label:"Claes Jansz. Visscher (II)"},
  {label:"Lodewijk XIV (koning van Frankrijk)"},
  {label:"Printshop"},
  {label:"Hendrick Goltzius"},
  {label:"Franse kroon"},
  {label:"Philips Galle"},
  {label:"Antonio Tempesta"},
  {label:"Johannes Tavenraat"},
  {label:"Peter Paul Rubens"},
  {label:"Willem Witsen"},
  {label:"Pieter Schenk (I)"},
  {label:"Jacobus Buys"},
  {label:"Crispijn van de Passe (I)"},
  {label:"Romeyn de Hooghe"},
  {label:"Aat Veldhoen"},
  {label:"Jacob de Gheyn (II)"},
  {label:"Vincent Samuel Mentzel"},
  {label:"Maerten de Vos"},
  {label:"Willem Diepraam"},
  {label:"Simon Fokke"},
  {label:"Staten van Holland en West-Friesland"},
  {label:"Giovanni Giacomo de'Rossi"},
  {label:"Anthony van Dyck"},
  {label:"anoniem (Monumentenzorg)"},
  {label:"Johann Sadeler (I)"},
  {label:"Goupil & Cie."},
  {label:"Jacob Houbraken"},
  {label:"Adriaen Collaert"},
  {label:"Jacques Callot"},
  {label:"Carel Adolph Lion Cachet"},
  {label:"Eva Charlotte Pennink-Boelen"},
  {label:"Sébastien Leclerc (I)"},
  {label:"Frans Hogenberg"},
  {label:"Hieronymus Wierix"},
  {label:"Gerard de Jode"},
  {label:"Joseph Rose Lemercier"},
  {label:"Anna Beeck"},
  {label:"diverse vervaardigers"},
  {label:"Stefano della Bella"},
  {label:"Wenceslaus Hollar"},
  {label:"Jan van de Velde (II)"},
  {label:"Pieter van der Aa (I)"},
  {label:"Abraham Bloemaert"},
  {label:"Hieronymus Cock"},
  {label:"Giovanni Battista Piranesi"},
  {label:"Maarten van Heemskerck"},
  {label:"Richard Nicolaüs Roland Holst"},
  {label:"Crispijn van de Passe (II)"},
  {label:"Pieter Mortier (I)"},
  {label:"Jan Caspar Philips"},
  {label:"Meissener Porzellan Manufaktur"},
  {label:"Jan Veth"},
  {label:"Pauselijk hof"},
  {label:"Aegidius Sadeler (II)"},
  {label:"Adriaen van Ostade"},
  {label:"Hendrick Hondius (I)"},
  {label:"Martinus Nijhoff"},
  {label:"Boëtius Adamsz. Bolswert"},
  {label:"Jan Philipsz Schabaelje"},
  {label:"Caspar Luyken"},
  {label:"Gerrit Willem Dijsselhof"},
  {label:"Claude Mellan"},
  {label:"Reinier Willem Petrus de Vries (1874-1952)"},
  {label:"Theodoor Galle"},
  {label:"Theo van Hoytema"},
  {label:"Cornelis Pronk"},
  {label:"Israël Silvestre"},
  {label:"Charles Le Brun"},
  {label:"Frederik de Wit"},
  {label:"Albrecht Dürer"},
  {label:"Anton Mauve"},
  {label:"Virgilius Solis"},
  {label:"Israël Henriet"},
  {label:"Jacques Androuet"}
];

function Artist() {
  const {artist, setArtist} = useContext(ListContext);
  const [inputArtist, setInputArtist] = useState('');
    return (
        <Autocomplete
          disablePortal
          onChange={(event, newValue) => {
            setArtist(newValue);
          }}
          inputValue={inputArtist}
          onInputChange={(event, newInputValue) => {
            setInputArtist(newInputValue);
          }}
          id="artist"
          options={artistList}
          variant="outlined"
          sx={{
            width: "30%",
            bgcolor: "background.gray",
            color: "primary.main",
            borderColor: "primary.outlinedColor",
            outlinedBorder: "border.white",
          }}
          size="small"
          renderInput={(params) => 
          <TextField {...params} label="Artiste" />}
        />
      );
}

export default Artist