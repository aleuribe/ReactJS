import CartWidget from '../CartWidget/CartWidget'
import logo from '../../media/nft_logo.png'
import { NavLink, Link } from 'react-router-dom'


const NavBar = ({items, cartProducts}) => {
  
    return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <Link to="/" className="navbar-brand">
          <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" /> 
          NFStore.com
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {items.map(navItem => <NavLink key={navItem.id} to={`/${navItem.name.toLowerCase().replace(/\s+/g, '')}`} className="nav-link" activeClassName="active">{navItem.name}</NavLink>)}
          
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
          <CartWidget amount={cartProducts}/>
        </div>

      </div>
    </nav>

  )
}

  export default NavBar