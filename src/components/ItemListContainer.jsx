import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
import { ItemCard } from "./ItemCard"

export const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(products => {
            setProducts(products)
        }) 
    },[])

    return (
        <>
            <div className="flex justify-center items-center py-8 mx-8" >
                <h1 className="text-3xl justify-center font-semibold">Bienvenido</h1>
            </div>
            <section className="bg-gray-100 w-full min-h-screen gap-6 flex-wrap flex justify-center items-center my-8" >
                {products.map(product => <ItemCard key={product.id} producto={product} />)}
            </section>
        </>
    )
}

