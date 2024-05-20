import { useEffect, useState } from "react"
import { getProductsByCategory } from "../../asyncMock"
import { ItemCard } from "./ItemCard"
import { useParams } from "react-router-dom"

export const ItemCategoryContainer = () => {

    const [products, setProducts] = useState([])

    const { categoriaNombre } = useParams()


    useEffect(() => {
        getProductsByCategory(categoriaNombre).then(products => {
            setProducts(products)
        }) 
    },[categoriaNombre])


    return (
        <>  
            <section className="bg-gray-100 w-full min-h-screen gap-6 flex-wrap flex justify-center items-center my-8" >
                {products.map(product => <ItemCard key={product.id} producto={product} />)}
            </section>
        </>
    )
}
