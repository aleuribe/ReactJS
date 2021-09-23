import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'

const Item = ({id, title, price, pictureUrl, stock, initial, setCountFunc}) => {

    return (
        <div className="col">
            <div className="card" style={{width:'15rem', padding:'10px 10px 10px 10px'}}>

                <Link to={`/nft/`+id}>
                    <img src={pictureUrl} className="card-img-top" alt="..."/> 
                </Link>

                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li key={id+'P'} className="list-group-item">Precio: {price} sats</li>
                    <li key={id+'S'}className="list-group-item">Stock: {stock}</li>
                </ul>

                <ItemCount stock={stock} initial={initial} setCountFunc={setCountFunc}/>
            </div>
        </div>
    )
}

export default Item