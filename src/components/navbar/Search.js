// import React from 'react'

import "./search.css"

// const Search = () => {
//     return (
//         <div>
//             <div className="navbar">
//             
//             </div>
//         </div>
//     )
// }

// export default Search
import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function CustomizedInputBase() {
  return (


<div className="navbar" >
        
      <InputBase
        sx={{ ml: 80, flex: 1 }}
        placeholder="Search For NEWs"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <h3>輔大｜行動裝置程式設計｜第五組｜The NEWS app</h3>
      </div>
  );
}