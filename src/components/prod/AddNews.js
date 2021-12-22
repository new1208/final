import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Autocomplete from '@mui/material/Autocomplete';
export default function AddNews() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },];
  return (
      
    <div>

    
      <Button variant="outlined" onClick={handleClickOpen}>
        新增一則新聞
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>新增一則新聞</DialogTitle>
        <DialogContent>
          <DialogContentText>
            請填寫下列新聞資訊
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="新聞標題"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="新聞連結"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="圖片連結"
            type="text"
            fullWidth
            variant="standard"
          />
          {/* <Autocomplete
            id="grouped-demo"
            options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
            groupBy={(option) => option.firstLetter}
            getOptionLabel={(option) => option.title}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="With categories" />}
            /> */}

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>

  );
}
