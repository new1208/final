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



const AddOperator = () => {
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
        <span className="btn add-movie" onClick={openModal}>Add Operator</span> 
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
          <p>新增一條新聞</p>
          <TextField id="standard-basic01" label="contents" variant="standard" /> <br/> <br/>
          <TextField id="standard-basic02" label="title" variant="standard" /> <br/> <br/>
          {/* <TextField id="standard-basic03" label="密碼驗證" variant="standard" onChange={handleChange} required/> <br/> <br/> */}

        {/* <label>帳號</label>
        <input type="text" value={form.name} name='name' onChange={handleChange} required/> */}
{/*        
        <label>密碼驗證</label>
        <input type="text" value={form.objective} name='objective' onChange={handleChange} required/> */}

        <div align="center"> <br/>
        {/* <button className="btn btn-primary" type="submit">Add</button>
        <button className="btn btn-danger" onClick={closeModal}>Cancel</button>  */}
        <Button variant="contained">發布</Button> 
        <Button variant="outlined">取消</Button>
        </div>
        
        </form>
        
        </Modal>
        </div>
    )
}

export default AddOperator