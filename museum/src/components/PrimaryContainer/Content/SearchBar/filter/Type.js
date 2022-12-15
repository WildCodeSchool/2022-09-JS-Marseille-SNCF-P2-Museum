import React, { useState, useEffect, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ListContext from '../../../../../contexts/ListContext';

const typesList = [
  {label:'coin'},
  {label:'painting'},
  {label:'sculpture'},
  {label:'jewellery'},
  {label:'print'},
  {label:'photograph'},
  {label:'medal'},
  {label:'musical instrument'},
  {label:'plate (dishes)'},
  {label:'carte-de-visite'},
  {label:'text sheet'},
  {label:'furniture'},
  {label:'frame'},
  {label:'vase'},
  {label:'bowl'},
  {label:'box'},
  {label:'tile'},
  {label:'service (set)'},
  {label:'tissue stereograph'},
  {label:'figure'},
  {label:'demonstration model'},
  {label:'pot'},
  {label:'poem'},
  {label:'ship model'},
  {label:'award medal'},
  {label:'braid'},
  {label:'candlestick'},
  {label:'copy'},
  {label:'siege coin'},
  {label:'half model'},
  {label:'Oriental rug'},
  {label:'brocade paper'},
  {label:'miniature (painting)'},
  {label:'Ektachrome'},
  {label:'cup'},
  {label:'gameboard'},
  {label:'tureen'},
  {label:'wind instrument'},
  {label:'pipe'},
  {label:'calendar'},
  {label:'table'},
  {label:'textile materials'},
  {label:'hat'},
  {label:'photomontage'},
  {label:'percussion instrument'},
  {label:'color slide'},
  {label:'salt (condiment vessel)'},
  {label:'cloth'},
  {label:'locket'},
  {label:'steel (alloy)'},
  {label:'pendant (jewelry)'},
  {label:'toy'}
] 

function TypeFilter() {
  const {type, setType} = useContext(ListContext);
  const [inputType, setInputType] = useState('');
  console.log(setType, "setType");
  
    return (
      <Autocomplete
          disablePortal
          value={type}
          onChange={(event, newValue) => {
            setType(newValue);            
          }}
          inputValue={inputType}
          onInputChange={(event, newInputValue) => {
            setInputType(newInputValue);
          }}
          id="type"
          options={typesList}
          variant="outlined"
          sx={{
            width: "30%",
            bgcolor: "background.gray",
            color: "primary.main",
            borderColor: "primary.outlinedColor",
            outlinedBorder: "border.white",
          }}
          size="small"
          renderInput={(params) => <TextField {...params} label="Type" />}
    />
      );
}

export default TypeFilter;