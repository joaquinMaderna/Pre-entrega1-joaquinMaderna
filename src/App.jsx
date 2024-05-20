import { Navbar1 } from "./components/Navbar1"
import { Route, Routes } from "react-router-dom"
import { ItemListContainer } from "./components/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer"
export default function App() {
  return (
    <>
      <Navbar1 />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
        <Route exact path="/product/:productId" element={<ItemDetailContainer />} />
      </Routes>
    </>
  )
} 
