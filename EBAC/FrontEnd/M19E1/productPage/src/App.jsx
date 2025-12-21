import React from "react";
import ProductCard from "./components";
import { CardsWrapper } from "./components/styles";

const products = [
  {
    title: "Telha Cerâmica Premium",
    price: "R$ 129,90",
    image: "https://placehold.co/300x150",
  },
  {
    title: "Telha Colonial",
    price: "R$ 89,90",
    image: "https://placehold.co/300x150",
  },
  {
    title: "Telha Esmaltada",
    price: "R$ 159,90",
    image: "https://placehold.co/300x150",
  },
];

function App() {
  return (
    <CardsWrapper>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </CardsWrapper>
  );
}

export default App;
