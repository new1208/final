import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
  ◆  </Box>
  );
  const [value, setValue] = React.useState('Controlled');

  return (
    <div>{bull}
      <Button variant="outlined" onClick={handleClickOpen} color="secondary">
       個人介面編輯
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"編輯個人資料"}</DialogTitle>
        
        <DialogContent><br/>

          <DialogContentText id="alert-dialog-slide-description">

          </DialogContentText>
          <TextField
          required
          id="outlined-required"
          sx={{ m: 1, width: '25ch' }}
          label="姓名"
          defaultValue="Rita Shih"
          />
  
          <TextField
          required
          label="電話"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          defaultValue="976888952"

          InputProps={{
            startAdornment: <InputAdornment position="start">+886</InputAdornment>,
          }}
        />
          <TextField
          required
          id="outlined-required"
          sx={{ m: 1, width: '25ch' }}
          label="帳號"
          defaultValue="R1122rrrr"
          />
                    <TextField
          required
          id="outlined-required"
          sx={{ m: 1, width: '25ch' }}
          label="密碼"
          type="password"
          defaultValue="12345678"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleClose}>儲存</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
