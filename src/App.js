import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemCategoryContainer from './components/ItemCategoryContainer/ItemCategoryContainer'


import Categorias from '../src/views/Categorias'
import Informacion from '../src/views/Informacion'
import SubHeader from '../src/views/SubHeader'


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

        <Switch>
          <Route exact path="/">
          
            <SubHeader />

            <ItemListContainer/>

          </Route>

          <Route path={'/'+navbarItems[0].name.toLowerCase().replace(/\s+/g, '')}>

            <SubHeader />

            <ItemListContainer/>

          </Route>

          <Route path={'/'+navbarItems[1].name.toLowerCase().replace(/\s+/g, '')}>
            <h1>Popular - En construccion</h1>
          </Route>

          <Route path={'/'+navbarItems[2].name.toLowerCase().replace(/\s+/g, '')}>
            <Categorias />
          </Route>

          <Route path={'/'+navbarItems[3].name.toLowerCase().replace(/\s+/g, '')}>
            <Informacion />
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
