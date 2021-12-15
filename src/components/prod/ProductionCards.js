import React from 'react'
import './ProductionCards.css'


const ProductionCards = ({info}) => {
    return (
        <div className="container">
        <div className="card">
        <div className="icon">{info.icon}</div>
        <div className="number">{info.number}</div>
        <div className="separation">----------------------------</div>
        <div>
        <h3 className="title">{info.name}</h3>
        </div>
        </div>
        </div>
    )
}

export default ProductionCards
