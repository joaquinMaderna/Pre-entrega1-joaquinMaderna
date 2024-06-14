import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ( { children } ) => {

    const [cartProducts, setCartProducts] = useState([])

    const addToCart = (product) => {
        setCartProducts([...cartProducts, product])
    }

    const removeFromCart = (id) => {
        setCartProducts(cartProducts.filter(product => product.id !== id))
    }
    
    return(
        <CartContext.Provider value={{cartProducts, addToCart, removeFromCart}} >
            {children}
        </CartContext.Provider>
    )
}

