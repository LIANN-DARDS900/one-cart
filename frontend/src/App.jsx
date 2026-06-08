import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:5000/api/products");
    setProducts(res.data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/api/products/${id}`);
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="app">
      <h1>🛒 One Cart</h1>
      <p className="subtitle">All your saved products in one place.</p>

      <div className="grid">
        {products.map((product) => (
          <div className="card" key={product._id}>
            <img src={product.image} alt={product.title} />

            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <small>{product.website}</small>

            <a href={product.url} target="_blank">Visit Product</a>
            <button onClick={() => deleteProduct(product._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;