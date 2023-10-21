import { createContext, useState } from "react";

export const CartContext = createContext(null);



const CartProdiver = ({children}) => {
    const [carts, setCarts] = useState([]);

  
    // console.log(details)
    return (
        <CartContext.Provider value={[carts, setCarts]}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProdiver;