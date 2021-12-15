import React from 'react'
import './operatorcard.css'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { useDispatch } from "react-redux";
import { deleteOperator } from '../redux/actions';


import {AiOutlineClose,AiOutlineEdit} from "react-icons/ai";


const OperatorCard = ({dataop}) => {
    //const dispatch = useDispatch();
    //const handleDelete = dispatch(deleteOperator());
    return (
        
        <div className="op-container">

        <p className="op"> <br/>title: {dataop.name}</p>
        <p className="op"> <br/>newslink: {dataop.objective}</p>
        <p className="op"> <br/>imagelink: {dataop.inprogress}</p>
        <p className="op-icon"> <br/><span ><AiOutlineEdit ></AiOutlineEdit></span></p>
        <p className="op-icon"> <br/><span ><AiOutlineClose ></AiOutlineClose></span></p>


        </div>
        
        )
}

export default OperatorCard
