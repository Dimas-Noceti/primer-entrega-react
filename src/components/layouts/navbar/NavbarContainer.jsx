import CartWidget from "../../common/cartWidget/CartWidget"
import "./navbar.css"

const NavbarContainer = () => {
  return (
    <div className="navbar-completo">
        <h2>PA!</h2>
        <ul>
            <li>PRODUCTOS</li>
            <li>SABORES</li>
            <li>NOVEDADES</li>
        </ul>
        <CartWidget/>
    </div>
  )
}

export default NavbarContainer