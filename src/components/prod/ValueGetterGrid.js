import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import background  from './test130098.png';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import {styled, Drawer, Button, Container, Card, CardContent, CardMedia, Typography, CardActionArea, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, CircularProgress} from '@mui/material';
import { initializeApp } from "firebase/app";
import {config} from '../../firebaseConfig';
import { getFirestore } from "firebase/firestore";
import {AuthContext, STATUS} from '../../AuthContext';
import {useEffect, useState, useContext} from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc} from "firebase/firestore";


const firebaseApp = initializeApp(config);
const db = getFirestore();


export default function TablePaginationActions(props) {
  
  const authContext = useContext(AuthContext);

  const [news, setNews] = useState([
    {title:"", newslink:""}
  ]);

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
      });
      console.log(temp);
      setNews([...temp]);
      setIsLoading(false);
    }
    readData();
  }, [db]);


  return (

    !isLoading ? 

      <Container maxWidth="sm">

          <Box sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper'}}>
              <List sx={{border: 1, borderRadius: 10, borderColor: 'primary.main'}}>
              {news.map((n, index) => 
                <ListItem disablePadding>
                  <ListItemButton component="a" href={n.newslink}>
                      <ListItemText primary={n.title}/>
                  </ListItemButton>
                </ListItem>
              )}
              </List>
              
          </Box>

        </Container>
    : <CircularProgress/>

  );
}