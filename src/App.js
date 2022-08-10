import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import { useEffect, useState } from 'react';
function App() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      console.log(data);
      setProduct(data);
    }
    getProducts();
  }, []);
  return (
    <div className="App">
      <Product data={product} />
    </div>
  );
}

export default App;
