import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        getProductById(1).then(product => {
            setProduct(product)
        })
    }, [])
    
    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}

