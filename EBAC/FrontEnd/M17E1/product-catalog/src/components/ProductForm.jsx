import React from "react";
import { useState } from "react";

export default function ProductForm({ onAddProduct }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.price || !form.description) {
      alert("Name, price and description are required.");
      return;
    }

    onAddProduct(form);

    setForm({ name: "", price: "", description: "", image: "" });
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        name="name"
        placeholder="Product Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
      />

      <input
        name="image"
        placeholder="Image URL"
        value={form.image}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />

      <button type="submit">Add Product</button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "300px",
    marginBottom: "20px",
  }
};
