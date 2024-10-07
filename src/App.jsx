import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer"
import CartContainer from "./components/pages/cart/CartContainer"
import NavbarContainer from "./components/layouts/navbar/NavbarContainer"
import ItemDetailContainer from "./components/pages/itemDetail/itemDetailContainer"

function App() {
  return (
    <BrowserRouter>
      <NavbarContainer />
      <Routes>
        <Route  path={"/"} element={<ItemListContainer />} />
        <Route  path={"/category/:categoryName"} element={<ItemListContainer />} />

        <Route  path={"/carrito"} element={<CartContainer />} />

        <Route  path={"/productDetail/:id"} element={<ItemDetailContainer />} />

        <Route  path={"*"} element={<h2>404 not found</h2>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App



