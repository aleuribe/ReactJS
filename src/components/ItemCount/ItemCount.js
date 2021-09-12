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
            <div class="card-body">
                <p class="card-text">Cantidad: {counter}</p>
                <button class="btn btn-outline-primary" onClick={removeItem}>-</button>
                <button class="btn btn-outline-primary" onClick={addItem}>+</button>
            </div>
            <button class="btn btn-outline-primary">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount