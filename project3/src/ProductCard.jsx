import { memo, useContext } from "react";
import { CartContext } from "./CartContext";

function ProductCard({ product }) {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="card">
<img src={product.image} alt={product.title}
          className="product-image"
           />
      <h4>{product.title}</h4>
      <p>₹{product.price}</p>

      <button onClick={() => dispatch({ type: "ADD", product })}>
        Add to Cart
      </button>
    </div>
  );
}

export default memo(ProductCard);
