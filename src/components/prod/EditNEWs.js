import React from 'react'
import Modal from 'react-modal';
import { useDispatch } from "react-redux";
import {addOperator} from '../redux/actions';
import {useState, useEffect, useContext} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import Box from '@mui/material/Box';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ComboBox from './FormEditor'
import {List, ListItem, ListItemText, ListItemButton, Fab, AddIcon, Dialog, Input, CircularProgress} from '@mui/material';
import {config} from '../../firebaseConfig';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs, getDoc, deleteDoc, doc, updateDoc, setDoc} from "firebase/firestore";
import {AuthContext, STATUS} from '../../AuthContext';

const firebaseApp = initializeApp(config);
const db = getFirestore();


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  Modal.setAppElement('#root')



const EditNews = (props) => {
    

    const authContext = useContext(AuthContext);

    const [news, setNews] = useState([
        {title:"", newslink:"", id:""}
      ]);

    const [before, setBefore] = useState("0");
    const [beforelink, setBeforelink] = useState("0");
    
    const [idd, setIdd] = useState("0");

    const [isLoading, setIsLoading] = useState(false);
    const [delete_id, setDelete_id] = useState(0);
    
    
    useEffect(()=>{
      async function readData() {
        

        const db = getFirestore();
        
        console.log("readdata", props.edit_id);
        const querySnapshot = await getDoc(doc(db, "news", props.edit_id)); 
        console.log("after", querySnapshot.id);
        setIdd(querySnapshot.id);
        console.log("after1");
        setBefore(querySnapshot.data().title);
        console.log("after2");
        setBeforelink(querySnapshot.data().newslink);
        console.log("after3");

      }
      readData();
    }, [db]);


   /* const read_data_once = async function() {
      const db = getFirestore();
      const docSnap = await getDoc(doc(db, "news", props.edit_id));
    }
    read_data_once();*/

    
    const update = async function(){

      const db = getFirestore();
      try{
        console.log("before");
        await updateDoc(doc(db,"news",idd),{

          title:news.title,

          newslink:news.newslink

        });

        console.log("after");
      }catch{

      }
    }

    const handleClick = function(e) {
      setNews({...news, [e.target.name]:e.target.value} )
    }

    const dispatch = useDispatch();

    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false);
      }

const [form, setForm] = useState({
    name:'',
    objective:'',
    inprogress:''
});
const handleChange =(e) => setNews({...news, [e.target.name]: e.target.value});



const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
◆  </Box>
);
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

    return (
      <div align="center">
        {/* <Button variant="contained" color="success" onClick={openModal} className="btn add-movie" >登入</Button> */}
        {/* <Button color="secondary" align="right" variant="outlined" className="btn add-movie" onClick={openModal} align="right"
        style={{
          borderRadius: 20,
          backgroundColor: "#70CD8A",
          padding: "6px 35px",
          fontSize: "18px"
      }}
      >登入</Button> */}
      <Box sx={{ flexGrow: 1, maxWidth: "90%"}} ></Box>
      <IconButton edge="end" aria-label="delete" onClick={openModal}><BorderColorIcon /></IconButton>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}>

            <form onSubmit={(e)=>{
              e.preventDefault();
              let newOperator = {
                ...form, 
                id:Math.random(),
              };
              dispatch(addOperator(newOperator));
              closeModal();
              }}>

              <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                新聞編輯
              </Typography>  
          
              新聞標題：<Input type="text" name="title" value={news.title} defaultValue={before} onChange={handleClick}/><br/>
              新聞網址：<Input type="text" name="newslink" value={news.newslink} defaultValue={beforelink} onChange={handleClick}/><br/>

              
              {/*<ComboBox/>*/}<br/><br/>
            {/* 這個是類別選擇器，不要可以碼掉 */}

            <Button onClick={update} variant="contained" href="#contained-buttons">
              儲存
            </Button>     
            <Button variant="text" href="#contained-buttons">
              取消
            </Button>      
            </form>
          
          </Modal>
    </div>
    )
}

export default EditNews