import CartWidget from "../../common/cartWidget/CartWidget"
import "./navbar.css"

const NavbarContainer = () => {

  const categories = ["Todas", "Urbanas", "Deportivas"];

  return (
    <div className="navbar-completo">
        <h2>PA!</h2>
        <ul>
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
        <CartWidget/>
    </div>
  )
}

export default NavbarContainer