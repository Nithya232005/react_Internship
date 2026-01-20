import { useEffect, useState } from "react";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(setProducts)
      .catch(() => setError("Failed to load products"));
  }, []);

  return { products, error };
}
