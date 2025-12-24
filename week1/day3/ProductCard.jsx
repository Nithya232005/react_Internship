function ProductCard({ name, price,image }) {
  return (
    <div className="product-card">
      <img src={image}></img>
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <button className="button">BUY</button>
      
    </div>
  );
}

export default ProductCard;
