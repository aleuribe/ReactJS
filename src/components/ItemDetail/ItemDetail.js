import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({item}) => {
    
    if(!item) {
        return (
            <div>
                <div className="spinner-border text-primary" role="status" >
                <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    
    return (
        
        <div className="card text-center">
        <div className="card-header">
            Precio: {item.price? item.price + " satoshis":'Cargando...'}
        </div>
        <div className="card-body">
            <h5 className="card-title">{item.title}</h5>

            <img src={item.pictureUrl} className="card-img-top" style={{width:'20rem', padding:'10px 10px 10px 10px'}} alt="Cargando imagen del NFT..."/> 

            <p className="card-text">{item.description}</p>

            <ItemCount stock={item.stock} initial={item.initial}/>
            
        </div>
        <div className="card-footer text-muted">
            Codigo: {item.id}
        </div>
        </div>
    
    )
}

export default ItemDetail