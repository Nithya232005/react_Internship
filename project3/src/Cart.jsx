import { useContext, useMemo } from "react";
import { CartContext } from "./CartContext";

function Cart() {
  const { cart, dispatch } = useContext(CartContext);

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cart]
  );

  return (
    <div className="cart">
      <h3>Cart</h3>

      {cart.map(item => (
        <div key={item.id}>
          {item.title} × {item.qty}
          <button onClick={() => dispatch({ type: "INC", id: item.id })}>+</button>
          <button onClick={() => dispatch({ type: "DEC", id: item.id })}>-</button>
          <button onClick={() => dispatch({ type: "REMOVE", id: item.id })}>
            ❌
          </button>
        </div>
      ))}

      <h4>Total: ₹{total.toFixed(2)}</h4>
    </div>
  );
}

export default Cart;
