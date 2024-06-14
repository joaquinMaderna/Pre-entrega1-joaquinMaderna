import { Navbar1 } from "./components/Navbar1"
import { Route, Routes } from "react-router-dom"
import { ItemListContainer } from "./components/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer"
import { CartProvider } from "./context/CartContext"
import { Cart } from "./components/Cart"
export default function App() {
  return (
    <>
      <CartProvider>
        <Navbar1 />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/categoria/:categoriaNombre" element={<ItemListContainer />} />
          <Route exact path="/producto/:idProd" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </>
  )
} 
