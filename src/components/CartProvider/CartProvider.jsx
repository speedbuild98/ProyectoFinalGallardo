import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
