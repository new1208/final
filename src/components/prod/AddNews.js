import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { initializeApp } from "firebase/app";
import {Input} from '@mui/material';
import {config} from '../../firebaseConfig';
import { getFirestore } from "firebase/firestore";
import {AuthContext, STATUS} from '../../AuthContext';
import {useEffect, useState, useContext} from 'react';
import { collection, addDoc, getDocs, setDoc, deleteDoc, doc, updateDoc} from "firebase/firestore";
import Autocomplete from '@mui/material/Autocomplete';

const firebaseApp = initializeApp(config);
const db = getFirestore();

export default function AddNews() {
  const [open, setOpen] = React.useState(false);
  const [news, setNews] = useState([
    {title:"", newslink:""}

  ]);

  const insert = function(newNew) {
    setNews(oldNews=>[...oldNews, newNew]);
}

const add_data = async function() {
    await addDoc(collection(db,"news"),{
      title:news.title,
      newslink:news.newslink
    });
}


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClose_and_add = () => {
    //insert();
    add_data();
    setOpen(false);
    
  };

  const handleClick = function(e) {
    setNews({...news, [e.target.name]:e.target.value} )
  }

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

          新聞標題：<Input type="text" name="title" value={news.title} onChange={handleClick}/><br/>
          新聞網址：<Input type="text" name="newslink" value={news.newslink} onChange={handleClick}/><br/>

          {/*<TextField
            autoFocus
            margin="dense"
            
            type="text"
            value={news.title}
            onChange={handleClick}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            
            type="text"
            value={news.newslink}
            onChange={handleClick}
            fullWidth
            variant="standard"
          />*/}
       

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose_and_add}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>

  );
}
