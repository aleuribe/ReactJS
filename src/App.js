import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>

      <ItemListContainer greeting='Bienvenido a la tienda NFStore.com'/>

      <p>Tienda online de Tokens No Fungibles - En construccion</p>

    </div>
  );
}

export default App;
