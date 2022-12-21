import React, { useState, useContext }  from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ListContext from '../../../../../contexts/ListContext';

const DatingPeriodList = [
  {label:"1st century",
  id:1},
  {label:"2nd century",
  id:2},
  {label:"3rd century",
  id:3},
  {label:"4th century",
  id:4},
  {label:"5th century",
  id:5},
  {label:"6th century",
  id:6},
  {label:"7th century",
  id:7},
  {label:"8th century",
  id:8},
  {label:"9th century",
  id:9},
  {label:"10th century",
  id:10},
  {label:"11th century",
  id:11},
  {label:"12th century",
  id:12},
  {label:"13th century",
  id:13},
  {label:"14th century",
  id:14},
  {label:"15th century",
  id:15},
  {label:"16th century",
  id:16},
  {label:"17th century",
  id:17},
  {label:"18th century",
  id:18},
  {label:"19th century",
  id:19},
  {label:"20th century",
  id:20},
  {label:"21th century",
  id:21}
]
function DatingPeriod() {
  const {datingPeriod, setDatingPeriod} = useContext(ListContext);
  const [inputDatingPeriod, setInputDatingPeriod] = useState('');
    return (
      <Autocomplete
        disablePortal
        value={datingPeriod}
        onChange={(event, newValue) => {
          setDatingPeriod(newValue);
        }}
        inputValue={inputDatingPeriod}
        onInputChange={(event, newInputValue) => {
          setInputDatingPeriod(newInputValue);
        }}
        id="artist"
        options={DatingPeriodList}
        variant="outlined"
        sx={{
          width: "30%",
          backgroundColor: "searhSelect.main",
          color: "primary.main",
          borderColor: "primary.outlinedColor",
          outlinedBorder: "border.white",
        }}
        size="small"
        renderInput={(params) => <TextField {...params} label="Période" />}
      />
    );
}

export default  DatingPeriod;