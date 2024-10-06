import NavbarContainer from "./components/layouts/navbar/NavbarContainer"
import ItemDetailContainer from "./components/pages/itemDetail/itemDetailContainer"
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer"

function App() {
  return (
    <div>
      <NavbarContainer/>
      {/* <ItemListContainer/> */}
      <ItemDetailContainer />
    </div>
  )
}

export default App

