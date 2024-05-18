import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import { ItemListContainer } from "./components/ItemListContainer"
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemListContainer />} />
      </Routes>
    </>
  )
}
