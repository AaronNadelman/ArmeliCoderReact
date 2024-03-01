import { createContext, useState } from 'react'

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {

    const [itemsCart, setItemsCart] = useState([])

    const addItems = (items) => {
        setItemsCart([...itemsCart, { ...items }])
    }

    const calcularTotal = () => {
        let total = 0;
        itemsCart.forEach(item => {
            total += item.price * item.quantity;
        });
        return total;
    }

    const removeItemById = (productId) => {
        const updatedCart = itemsCart.filter(item => item.id !== productId);
        setItemsCart(updatedCart);
    }



    const clearCart = () => {
        setItemsCart([])
    }

    return (
        <CartContext.Provider value={{ itemsCart, addItems, clearCart, calcularTotal, removeItemById }}>
            {children}
        </CartContext.Provider>
    )
}