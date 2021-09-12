import logo from '../../media/nft_logo.png'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = (props) => {

    return (

        <div className="container">
            <img src={logo} className="App-logo" alt="logo" style={{width:'10%'}}/>
            <h1>{props.greeting}</h1>
            
            <ItemList items={props.list}/>

        </div>
    )
}

export default ItemListContainer