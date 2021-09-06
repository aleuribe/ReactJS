import logo from './logo.svg';


const ItemListContainer = (props) => {
  
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>{props.greeting}</h1>
        </div>
       
    )
}

export default ItemListContainer