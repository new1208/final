import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
export default function Personal_Interface(){
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
     <text />註冊頁面內容
          <Box sx={{}}>
            {/* <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}

            <TextField  id="inputAccount" label="帳號" variant="standard" /><br/>

            {/* 密碼欄位start */}
            <FormControl sx={{m: 1, width: '23ch'}} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">密碼</InputLabel>
              <Input
                id="standard-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl><br/>
            {/* 密碼欄位end*/}
            <TextField id="inputName" label="姓名" variant="standard" /><br/>
            <TextField id="inputPhone" label="電話" variant="standard" /><br/>
            <TextField id="inputEmail" label="Email" variant="standard" /><br/>

          </Box>
        </Box>
    
  );
}
