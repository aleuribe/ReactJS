
const CartWidget = (props) => {
    return (
        <button type="button" className="btn btn-success"> 
        <img src="../media/cart.svg" alt="..."/> {props.amount} </button>
    )
}

export default CartWidget