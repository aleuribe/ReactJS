import logo from './logo.svg';
import './App.css';

const Titulo = ({firstName, lastName}) => {
  console.log(firstName)

  return <h1>Hola {firstName} {lastName}</h1>
}


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo firstName="Ale" lastName="Uribe" />
        <Titulo firstName="Key" />

        <img src={logo} className="App-logo" alt="logo" />
      </header>

    <h1>Bienvenido a la tienda NFStore.com</h1>
    <p>En construccion</p>
    </div>
  );
}

export default App;
