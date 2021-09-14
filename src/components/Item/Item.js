import ItemCount from "../ItemCount/ItemCount"

const Item = ({id, title, price, pictureUrl, description, stock, initial}) => {

    return (
        <div className="col">
            <div className="card" style={{width:'15rem', padding:'10px 10px 10px 10px'}}>
                <img src={pictureUrl} className="card-img-top" alt="..."/> 

                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Precio: {price} sats</li>
                    <li className="list-group-item">Stock: {stock}</li>
                </ul>

                <ItemCount stock={stock} initial={initial}/>
            </div>
        </div>
    )
}

export default Item