import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
      </header>

    <h1>Bienvenido a la tienda NFStore.com</h1>
    <p>Tienda online de Tokens No Fungibles - En construccion</p>
    </div>
  );
}

export default App;
