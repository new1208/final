import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import EditNEWs from './EditNEWs';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import AddNews from "./AddNews";
import {useState, useEffect, useContext} from 'react'
import {config} from '../../firebaseConfig';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc} from "firebase/firestore";
import {AuthContext, STATUS} from '../../AuthContext';


import {setDeleted,deleted,FontAwesomeIcon} from '@material-ui/icons/Delete';
const firebaseApp = initializeApp(config);
const db = getFirestore();
function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));



export default function InteractiveList() {

  const authContext = useContext(AuthContext);
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [news, setNews] = useState([]);

const [isLoading, setIsLoading] = useState(false);
const [delete_id, setDelete_id] = useState(0);


  useEffect(()=>{
    async function readData() {
  
      setIsLoading(true);
      const querySnapshot = await getDocs(collection(db, "news"));
      const temp = [];
      
      querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        temp.push({title:doc.data().title, newslink:doc.data().newslink, id:doc.id});
       // setNews((current)=> [...current, {title:doc.data().title, newslink:doc.data().newslink, id:doc.id}])
      });
      console.log("List",temp);
      setNews([...temp]);
      setIsLoading(false);
    }
    readData();
  }, [db]);
  console.log("news", news)
  
  const handleChange =(e) => setNews({...news, [e.target.name]: e.target.value});
  // 透過id進行刪除
  const deleteData = async function(id){
    try{
      setIsLoading(true);
      await deleteDoc(doc(db, "news", id));

      console.log("deleted");
      setDeleted(deleted+1);
      setIsLoading(false);
    }
    catch (error){
      console.log(error);
    }
  }
  return (

    <div align="center">
    <Box sx={{ flexGrow: 1, maxWidth: "90%"}} >

        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            新聞編輯列表介面
          </Typography>
          <Demo>
            <List dense={dense}>
            
              {news.map((n, index) => 
                <ListItem key={n.id}> 
                {/* <ListItemAvatar><Avatar><FolderIcon /></Avatar></ListItemAvatar> */}
                  <ListItemText primary={n.title}/>
                    <EditNEWs edit_id={n.id}/>        
                    <IconButton edge="end" aria-label="delete" onClick={()=>deleteData(n.id)}>
                      <DeleteIcon />
                    </IconButton> 
                  </ListItem> 
              )}
            
            </List>
          </Demo>
          {/* <AddIcon variant="contained" href="#contained-buttons"/> */}
          <AddNews/>    
        </Grid>
    </Box>
    </div>
  );
}
