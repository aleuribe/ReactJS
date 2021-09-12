import ItemCount from "../ItemCount/ItemCount"

const Item = ({id, title, price, pictureUrl, description, stock, initial}) => {

    return (
        <div className="col">
            <div class="card" style={{width:'15rem', padding:'10px 10px 10px 10px'}}>
                <img src={pictureUrl} class="card-img-top" alt="..."/> 

                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Precio: {price} sats</li>
                    <li class="list-group-item">Stock: {stock}</li>
                </ul>

                <ItemCount stock={stock} initial={initial}/>
            </div>
        </div>
    )
}

export default Item