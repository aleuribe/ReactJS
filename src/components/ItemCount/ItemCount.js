import {useState} from 'react'

const ItemCount = ({stock, initial}) => {

    const [counter, setCounter] = useState(initial)

    const addItem = () => {
        if (counter<stock){
            setCounter(counter+1)
        }
    }

    const removeItem = () => {
        if (counter > 0 ){
            setCounter(counter-1)
        }
    }

    return (
        <div>
            <div className="card-body">
                <p className="card-text">Cantidad: {counter}</p>
                <button className="btn btn-outline-primary" onClick={removeItem}>-</button>
                <button className="btn btn-outline-primary" onClick={addItem}>+</button>
            </div>
            <button className="btn btn-outline-primary">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount