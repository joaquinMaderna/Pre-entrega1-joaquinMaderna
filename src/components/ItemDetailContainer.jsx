import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail"

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const {productId} = useParams();

    useEffect(() => {
        getProductById(1).then(product => {
            setProduct(product)
        })
    }, [])
        
    return (
        <article>
            <ItemDetail product={product} />
        </article>
    )
}

