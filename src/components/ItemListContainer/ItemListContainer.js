import logo from '../../media/nft_logo.png';


const ItemListContainer = (props) => {
  
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" style={{width:'10%'}}/>
            <h1>{props.greeting}</h1>
        </div>
       
    )
}

export default ItemListContainer