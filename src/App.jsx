import { Navbar1 } from "./components/Navbar1"
import { Route, Routes } from "react-router-dom"
import { ItemListContainer } from "./components/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer"
import { ItemCategoryContainer } from "./components/ItemCategoryContainer"
import { FireBaseTest } from "./components/FireBaseTest"
export default function App() {
  return (
    <>
      <Navbar1 />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/categoria/:categoriaNombre" element={<ItemCategoryContainer />} />
        <Route exact path="/producto/:idProd" element={<ItemDetailContainer />} />
        <Route exact path="/firebase" element={<FireBaseTest />} />
      </Routes>
    </>
  )
} 
