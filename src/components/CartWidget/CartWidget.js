import { Link } from 'react-router-dom'

const CartWidget = (props) => {
    return (
        <Link to={'/cart'}>
            <button type="button" className="btn btn-success"> 
            <img src="../media/cart.svg" alt="..."/> {props.amount} 
            </button>
        </Link>
    )
}

export default CartWidget