import {useState} from 'react'
import imagen from './imagen.png'

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
            <div class="card" style={{width:'15rem'}}>
                <img src={imagen} class="card-img-top" alt="..."/> 
                <div class="card-body">
                    <p class="card-text">Cantidad: {counter}</p>
                    <button class="btn btn-outline-primary" onClick={removeItem}>-</button>
                    <button class="btn btn-outline-primary" onClick={addItem}>+</button>

                </div>
            </div>

    </div>
    )
}

export default ItemCount