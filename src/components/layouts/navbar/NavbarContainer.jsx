import CartWidget from "../../common/cartWidget/CartWidget"
import "./navbar.css"
import { Link } from "react-router-dom";

const NavbarContainer = () => {


  return (
    <div className="navbar-completo">
        <Link to="/">PA!</Link>
        <ul>
          <Link to="/">Todas</Link>
          <Link to="/category/Energetica">Energeticas</Link>
          <Link to="/category/Jugos">Jugos</Link>
        </ul>
        <Link to="/carrito">
          <CartWidget />
        </Link>
        
    </div>
  )
}

export default NavbarContainer