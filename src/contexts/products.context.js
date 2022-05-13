import { createContext, useEffect, useState } from "react";
import ShopData from '../assets/json/shop.json'
export const ProductsContext = createContext({
    products: [],
    setProducts: () => ([])
})


export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(null);
    const value = {products, setProducts};

    useEffect(()=>{
        setProducts(ShopData);
    },[])
    console.log(products)
    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}