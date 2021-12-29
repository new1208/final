import React from 'react'
import Modal from 'react-modal';
import { useDispatch } from "react-redux";
import {addOperator} from '../redux/actions';
import {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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

    return (
        <div>
          <Button variant="text" className="btn add-movie" onClick={openModal}>登入介面</Button>

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
          <p>登入</p>
          <TextField id="standard-basic01" label="帳號" variant="standard" /> <br/> <br/>
          <TextField id="standard-basic02" label="密碼" variant="standard" /> <br/> <br/>
 
        <div align="center"> <br/>

        <Button variant="contained" color="success">
        LOGIN
      </Button>
      <Button color="secondary" >註冊</Button>

        </div>
        
        </form>
        
        </Modal>
        </div>
    )
}

export default Login