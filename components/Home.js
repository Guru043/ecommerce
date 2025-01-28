import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


function Home({ cart, setCart }) {
  const products = [
    { name: 'Product 1', price: 20, img: 'product1.jpg' },
    { name: 'Product 2', price: 30, img: 'product2.jpg' },
    { name: 'Product 3', price: 25, img: 'product3.jpg' },
  ];

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>Welcome to our Store</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
}

export default Home;
