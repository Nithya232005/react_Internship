import { useMemo } from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, search, category, sort }) {
  const filtered = useMemo(() => {
    let list = products.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );

    if (category !== "all") {
      list = list.filter(p => p.category === category);
    }

    if (sort === "low") list.sort((a, b) => a.price - b.price);
    if (sort === "high") list.sort((a, b) => b.price - a.price);

    return list;
  }, [products, search, category, sort]);

  return (
    <div className="grid">
      {filtered.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ProductList;
