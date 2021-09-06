import cart from './cart.svg';
import 'bootstrap/dist/css/bootstrap.css'

const CartWidget = (props) => {
    return (
        <button type="button" class="btn btn-success"> 
        <img src={cart} /> {props.amount} </button>
    )
}

export default CartWidget