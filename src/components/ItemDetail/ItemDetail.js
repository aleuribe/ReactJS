import { useState } from "react"

import ItemCount from "../ItemCount/ItemCount"
import WaitIndicator from "../WaitIndicator/WaitIndicator"

const ItemDetail = ({item, setCountFunc}) => {
    
    if(!item) {
        return (
            <WaitIndicator />
        )
    }
    
    return (
        
        <div className="card text-center">
        <div className="card-header">
            Precio: {item.price? item.price + " satoshis":'Cargando...'}
        </div>
        <div className="card-body">
            <h5 className="card-title">{item.title}</h5>

            <img src={item.pictureUrl} className="card-img-top" style={{width:'20rem', padding:'10px 10px 10px 10px'}} alt="Cargando imagen del NFT..."/> 

            <p className="card-text">{item.description}</p>

            <ItemCount stock={item.stock} initial={item.initial} setCountFunc={setCountFunc}/>
            
        </div>
        <div className="card-footer text-muted">
            Codigo: {item.id}
        </div>
        </div>
    
    )
}

export default ItemDetail