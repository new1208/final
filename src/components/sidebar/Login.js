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
import {AuthContext, STATUS} from '../../AuthContext';
import {getApps, initializeApp} from "firebase/app";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {config} from '../../firebaseConfig';

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


const Login = (props) => {

    if(getApps().length===0){
      initializeApp(config);
    }
    

    const [account, setAccount] = useState({email:"",password:"", displayName:""});
    const [message, setMessage] = useState("");
    const authContext = useContext(AuthContext);

    const handleChange = function(e){
      setAccount({...account,[e.target.name]:e.target.value});
    }

    const handleSubmit = async function() {
      try {
          const auth = getAuth();
          const res = await signInWithEmailAndPassword(auth, account.email, account.password);
          if (res){
              
              props.setStatus(2);
          }
          setMessage("");
          authContext.setStatus(STATUS.toSignOut);
      }catch(error) {
          setMessage(""+error);
      }
    }

    const dispatch = useDispatch();

    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false);
      }
    function closeModal_and_submit(){
      
      handleSubmit();
      setIsOpen(false);
    }

const [form, setForm] = useState({
    name:'',
    objective:'',
    inprogress:''
});

const changeStatus = function() {
  props.setStatus(0);
 // authContext.setStatus(STATUS.toSignUp);
}

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
&nbsp;&nbsp;  </Box>
);
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

    return (
      <div>{bull}
        {/* <Button variant="contained" color="success" onClick={openModal} className="btn add-movie" >登入</Button> */}
        <Button color="secondary" align="right" variant="outlined" className="btn add-movie" onClick={openModal} align="right"
        style={{
          borderRadius: 20,
          backgroundColor: "#70CD8A",
          padding: "6px 35px",
          fontSize: "18px"
      }}
      >登入</Button>
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

                <p color='white'>登入</p>
                <TextField id="standard-basic01" name="email" value={account.email} label="Email" variant="standard" onChange={handleChange}/> <br/> <br/>
                <TextField id="standard-basic02" name="password" value={account.password} label="密碼" variant="standard" onChange={handleChange} autoComplete="current-password"/> <br/>{message} <br/>
                
                <div align="center"> <br/>
                  <Button variant="contained" color="success" onClick={closeModal_and_submit}>LOGIN </Button>
                  &nbsp;&nbsp;
                  <Button variant="contained" color="success" onClick={changeStatus}>註冊 </Button>
                </div>
          
            </form>
          
          </Modal>
    </div>
    )
}

export default Login