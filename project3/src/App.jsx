import { useState, useContext } from "react";
import { CartProvider } from "./CartContext";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import { useProducts } from "./useProducts";
import ProductList from "./ProductList";
import Cart from "./Cart";
import "./App.css";

function AppContent() {
  const { products, error } = useProducts();
  const { toggleTheme } = useContext(ThemeContext);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  if (error) return <h2>{error}</h2>;

  return (
    <>
    <header>E-Commerce DashBoard</header>
  
      <button onClick={toggleTheme}>Toggle Theme</button>

      <input placeholder="Search" onChange={e => setSearch(e.target.value)} />

      <select onChange={e => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
      </select>

      <select onChange={e => setSort(e.target.value)}>
        <option value="">Sort</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>

      <ProductList
        products={products}
        search={search}
        category={category}
        sort={sort}
      />

      <Cart />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </ThemeProvider>
  );
}
