import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Autocomplete5 from '@mui/material/Autocomplete';

import InputAdornment from '@material-ui/core/InputAdornment';


export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 600 }}
      renderInput={(params) => <TextField {...params} label="選擇新聞類別" />}
      defaultValue="台灣"
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: '台灣'},
  { label: '國際'},
  { label: '體育'},
  { label: 'Covid'},

];
