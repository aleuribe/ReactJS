import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemCategoryContainer from './components/ItemCategoryContainer/ItemCategoryContainer'

import Categorias from '../src/views/Categorias'



const App = () => {

const navbarItems = [
  {id:1, name:'Inicio'},
  {id:2, name:'Popular'},
  {id:3, name:'Categorias'},
  {id:4, name:'Informacion de Pago'},
] 
  return (
    <div className="App">

      <BrowserRouter> 

        <header className="App-header">
          <NavBar items={navbarItems}/>
        </header>

        <img src='../media/nft_logo.png' className="App-logo" alt="logo" style={{width:'10%'}}/>
        <h1>Bienvenido a la tienda NFStore.com</h1>

        <Switch>
          <Route exact path="/">
          
            <ItemListContainer/>

          </Route>

          <Route path={'/'+navbarItems[0].name.toLowerCase().replace(/\s+/g, '')}>

            <ItemListContainer/>

          </Route>

          <Route path={'/'+navbarItems[1].name.toLowerCase().replace(/\s+/g, '')}>
            <h1>Popular - En construccion</h1>
          </Route>

          <Route path={'/'+navbarItems[2].name.toLowerCase().replace(/\s+/g, '')}>
            <Categorias />
          </Route>

          <Route path={'/'+navbarItems[3].name.toLowerCase().replace(/\s+/g, '')}>
            <h1>Informacion de Pago - En construccion</h1>
          </Route>

          <Route path="/nft/:id">
            <ItemDetailContainer />
          </Route>

          <Route path="/cat/:category">
            <ItemCategoryContainer />
          </Route>

        </Switch>
      </BrowserRouter>

      <h5>Tienda online de Tokens No Fungibles - En construccion</h5>

    </div>
  );
}

 
export default App;
