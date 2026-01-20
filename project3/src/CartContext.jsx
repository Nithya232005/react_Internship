import { createContext, useReducer, useEffect } from "react";

export const CartContext = createContext();

function cartReducer(cart, action) {
  switch (action.type) {
    case "ADD":
      const found = cart.find(item => item.id === action.product.id);
      if (found) {
        return cart.map(item =>
          item.id === action.product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...cart, { ...action.product, qty: 1 }];

    case "INC":
      return cart.map(item =>
        item.id === action.id ? { ...item, qty: item.qty + 1 } : item
      );

    case "DEC":
      return cart.map(item =>
        item.id === action.id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      );

    case "REMOVE":
      return cart.filter(item => item.id !== action.id);

    default:
      return cart;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(
    cartReducer,
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
