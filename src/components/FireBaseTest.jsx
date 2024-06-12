import { getProducts } from "../config/firebase";
import { useState, useEffect } from "react";
export const FireBaseTest = () => {
    
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        getProducts().then(products => {
            setProducts(products)
        })
    }, [])
    
    return (
        <>
        <ul>
            <section className="bg-gray-100 w-full min-h-screen gap-6 flex-wrap flex justify-center items-center my-8" >
                {products.map(product => <li key={product.id}> 
                <img src={product.thumbnail}/> 
                {product.title} 
                ${product.price}  
                </li>)}
            </section>
        </ul>
        </>
    );
}