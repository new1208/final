import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function TextFieldSizes() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h5" component="div">個人頁面</Typography><br/>
      <div>
      <TextField label="姓名" id="outlined-size-normal01" defaultValue="Name" /><br/>
      <TextField label="帳號" id="outlined-size-normal02" defaultValue="abctest" /><br/>
      <TextField label="密碼" id="outlined-size-normal03" defaultValue="123123123" /><br/>
      <TextField label="電話" id="outlined-size-normal04" defaultValue="0978555666" /><br/>

      <br/><Button color="success" align="right" variant="outlined" className="btn add-movie"  weigh="">儲存修改</Button>
      </div>
      
    </Box>
  );
}
