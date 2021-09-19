import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({item}) => {

    var contador
    if (item.stock){
        contador = <ItemCount stock={item.stock} initial={item.initial}/>
    }

    return (
        
        <div class="card text-center">
        <div class="card-header">
            Precio: {item.price? item.price + " satoshis":'Cargando...'}
        </div>
        <div class="card-body">
            <h5 class="card-title">{item.title}</h5>

            <img src={item.pictureUrl} className="card-img-top" style={{width:'20rem', padding:'10px 10px 10px 10px'}} alt="Cargando imagen del NFT..."/> 

            <p class="card-text">{item.description}</p>

            {contador}
            
        </div>
        <div class="card-footer text-muted">
            Codigo: {item.id}
        </div>
        </div>
    
    )
}

export default ItemDetail