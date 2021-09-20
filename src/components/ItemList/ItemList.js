import Item from "../Item/Item"
import WaitIndicator from "../WaitIndicator/WaitIndicator"

const ItemList = ({items}) => {

    if(!items) {
        return (
            <WaitIndicator />
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