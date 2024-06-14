import { useEffect, useState } from "react"
import { getProductById } from "../config/firebase"
import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail"

export const ItemDetailContainer = () => {
    const [prod, setProd] = useState({})

    const { idProd } = useParams();

    console.log(idProd);

    useEffect(() => {
        getProductById(idProd).then(prod => {
            setProd(prod)
        })
    }, [idProd])

    return (
        <article>
            <ItemDetail prodDet={prod} />
        </article>
    )
}

