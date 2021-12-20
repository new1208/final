import React from 'react'

import "./productiondata.css"
import ProductionCards from './ProductionCards'
import OperatorCard from './OperatorCard'
import {useSelector} from 'react-redux'


const Productiondata = ({data}) => {
    const productiondata = useSelector(state => state.operators);
    return (
        <div className="operators" align ="center" >
        {data.map(item=>(

                <ProductionCards info={item}/>
            ))}
           {productiondata.map((operator,index)=>(
               <OperatorCard dataop={operator} index={index}/>
           ))} 
        </div>
    )
}

export default Productiondata
