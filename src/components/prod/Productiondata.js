import React from 'react'

import "./productiondata.css"
import ProductionCards from './ProductionCards'
import OperatorCard from './OperatorCard'
import {useSelector} from 'react-redux'


const Productiondata = ({data}) => {
    const productiondata = useSelector(state => state.operators);
    return (
        <div className="main">
            {data.map(item=>(

                <ProductionCards info={item}/>
            ))}
            <div className="operators">
           {productiondata.map((operator,index)=>(
               <OperatorCard dataop={operator} index={index}/>
           ))} 
            </div>
        </div>
    )
}

export default Productiondata
