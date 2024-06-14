import { useEffect, useState } from "react"
import { getProducts } from "../config/firebase";
import { ItemCard } from "./ItemCard"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    const { categoriaNombre } = useParams()

    useEffect(() => {
        if (categoriaNombre) {
            getProducts().then(products => {
                setProducts(products.filter(product => product.category === categoriaNombre))
            })
        } else {
            getProducts().then(products => {
                setProducts(products)
            })
        }
    }, [categoriaNombre])

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

