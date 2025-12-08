import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts([
        {
          name: "Laptop",
          price: "3000",
          description: "Powerful device for work.",
          image: "https://via.placeholder.com/250"
        },
        {
          name: "Headphones",
          price: "300",
          description: "High quality sound.",
          image: "https://via.placeholder.com/250"
        }
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  function addProduct(product) {
    setProducts((prev) => [...prev, product]);
  }

  return (
    <div>
      <h1>Product Catalog</h1>

      <ProductForm onAddProduct={addProduct} />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={styles.grid}>
          {products.map((p, index) => (
            <ProductCard key={index} {...p} />
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  }
};
