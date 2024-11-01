import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer"
import CartContainer from "./components/pages/cart/CartContainer"
import NavbarContainer from "./components/layouts/navbar/NavbarContainer"
import ItemDetailContainer from "./components/pages/itemDetail/itemDetailContainer"
import { CartContextProvider } from "./context/CartContext"
import Checkout from "./components/pages/checkout/Checkout"

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavbarContainer />
        <Routes>
          <Route  path={"/"} element={<ItemListContainer />} />
          <Route  path={"/category/:categoryName"} element={<ItemListContainer />} />

          <Route  path={"/carrito"} element={<CartContainer />} />

          <Route  path={"/productDetail/:id"} element={<ItemDetailContainer />} />

          <Route  path={"/checkout"} element={<Checkout />} />

          <Route  path={"*"} element={<h2>404 not found</h2>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App



