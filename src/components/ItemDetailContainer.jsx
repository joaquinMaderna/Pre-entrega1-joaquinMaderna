import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail"

export const ItemDetailContainer = () => {
    const [prod, setProd] = useState({})

    const { idProd } = useParams();
    
    const id = parseInt(idProd)

    useEffect(() => {
        getProductById(id).then(products => {
            setProd(products)
        })
    }, [idProd])

    return (
        <article>
            <ItemDetail prodDet={prod} />
        </article>
    )
}

