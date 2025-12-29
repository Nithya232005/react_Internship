import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import "./App.css";
import sunscreen from './assets/image.png';
import moisturizer from './assets/image copy.png';
import serum from './assets/image copy 2.png';

function App() {
  return (
    <>
      <Navbar />

      <div className="products-container">
        <ProductCard image={sunscreen} name="sun screen" price={550} />
        <ProductCard image={moisturizer}name="Moisturizer" price={200} />
        <ProductCard image={serum}name="Face serum" price={300} />
        
      </div>
    </>
  );
}

export default App;
