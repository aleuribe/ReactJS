import Item from "../Item/Item"

const ItemList = ({items}) => {

    if(!items) {
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
        <>
        <div className="row row-cols-auto gy-4" style={{margin:'10px 10px 10px 10px'}}>
            {items.map(e => <Item key={e.id} id={e.id} title={e.title} price={e.price} pictureUrl={e.pictureUrl} description={e.description} stock={e.stock} initial={e.initial}/>)}            
        </div>
        </>
    )
}

export default ItemList