import cart from '../../media/cart.svg';

const CartWidget = (props) => {
    return (
        <button type="button" className="btn btn-success"> 
        <img src={cart}/> {props.amount} </button>
    )
}

export default CartWidget