
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'


const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>

    <body>
      <ItemListContainer greeting='Bienvenido a la tienda NFStore.com'/>

      <p>Tienda online de Tokens No Fungibles - En construccion</p>

      <div class="container">
        <div class="row row-cols-auto gy-4">
          <div class="col">
            <ItemCount stock="5" initial={2}/>
          </div>
          
          <div class="col">
            <ItemCount stock="10" initial={1}/>
          </div>

          <div class="col">
            <ItemCount stock="15" initial={3}/>
          </div>

          <div class="col">
            <ItemCount stock="7" initial={1}/>
          </div>

          <div class="col">
            <ItemCount stock="2" initial={1}/>
          </div>
          
          </div>
      </div>
      
      
    </body>
    
    </div>
  );
}

export default App;
