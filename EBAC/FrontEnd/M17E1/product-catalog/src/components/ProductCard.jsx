import React from "react";

export default function ProductCard({ name, price, description, image }) {
  return (
    <div className="product-card" style={styles.card}>
      <img src={image} alt={name} style={styles.image} />

      <h3>{name}</h3>
      <p>{description}</p>
      <strong>${price}</strong>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "10px",
    width: "250px",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
};
