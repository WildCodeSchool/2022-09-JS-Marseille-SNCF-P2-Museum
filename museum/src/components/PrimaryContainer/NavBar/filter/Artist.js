import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import test from './testList';

function Artist() {
    return (
        <Autocomplete
          disablePortal
          id="artist"
          options={test}
          sx={{ width: 100 }}
          renderInput={(params) => <TextField {...params} label="Artiste" />}
        />
      );
}

export default Artist