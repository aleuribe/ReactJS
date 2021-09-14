import CartWidget from '../CartWidget/CartWidget'
import logo from '../../media/nft_logo.png'

const NavBar = () => {
  
    return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <a className="navbar-brand" href="#">
        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
        NFStore.com
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
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

          <form className="d-flex">
              
              <div className="input-group">
                <div className="input-group-text">Busqueda:</div>
                  <input type="text" className="form-control me-2" id="inlineFormInputGroupUsername" placeholder="Nombre NFT"/>
              </div>
              <button type="submit" className="btn btn-primary me-2">Buscar</button>
          </form>

        </div>

        <div>
          <CartWidget amount='0'/>
        </div>

      </div>
    </nav>

  )
}

  export default NavBar