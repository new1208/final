import React from 'react'
import Modal from 'react-modal';
import { useDispatch } from "react-redux";
import {addOperator} from '../redux/actions';
import {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';

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



const Login = () => {
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
const handleChange =(e) => setForm({...form, [e.target.name]: e.target.value});
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
      <div>{bull}
        <Button color="secondary" align="right" variant="outlined" className="btn add-movie" onClick={openModal} align="right">註冊</Button>


            
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

              <p color='white'>註冊</p>

              <TextField id="standard-basic01" label="帳號" variant="standard" /> <br/> <br/>
              <TextField id="standard-basic02" label="密碼" variant="standard" /> <br/> <br/>
              <TextField id="standard-basic03" label="姓名" variant="standard" /> <br/> <br/>
              <TextField id="standard-basic04" label="電話" variant="standard" /> <br/> <br/>


              <div align="center"> <br/>
                {/* <Button variant="contained" color="success">LOGIN </Button> */}
                <Button color="secondary" >註冊</Button>
              </div>
          
            </form>
          
          </Modal>
    </div>
    )
}

export default Login