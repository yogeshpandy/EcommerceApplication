import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen : false,
    setCartOpenStatus: () => {}
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setCartOpenStatus] = useState(false)
    const value={isCartOpen, setCartOpenStatus}
    return (
        <CartContext.Provider value={value} >{children}</CartContext.Provider>
    )
}