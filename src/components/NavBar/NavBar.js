import 'bootstrap/dist/css/bootstrap.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../media/nft_logo.png'

const NavBar = () => {
  
    return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
      <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="" />
      NFStore.com
      </a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Mas Vendidos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Categorias</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Informacion</a>
          </li>
        </ul>
      </div>

      <div>
        <form className="row row-cols-sm-auto g-3 align-items-center">
          <div className="col-12">
            <label className="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
            <div className="input-group">
              <div className="input-group-text">@</div>
                <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Nombre de Usuario"/>
              
            </div>
          </div>
          
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Iniciar sesion</button>
          </div>

        </form>

        </div>

        <div class="col-1">
          <CartWidget amount='0'/>
        </div>
        
    </nav>

  )
}

  export default NavBar