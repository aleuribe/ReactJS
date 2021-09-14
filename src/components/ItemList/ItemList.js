import Item from "../Item/Item"

const ItemList = ({items}) => {

    return (
        <div className="row row-cols-auto gy-4">
            {items.map(e => <Item id={e.id} title={e.title} price={e.price} pictureUrl={e.pictureUrl} description={e.description} stock={e.stock} initial={e.initial}/>)}            
        </div>
        

    )

}

export default ItemList