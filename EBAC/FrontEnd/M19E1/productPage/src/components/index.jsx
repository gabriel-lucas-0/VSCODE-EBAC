import React from "react";
import { Button, Card, Price, Title, Container } from "./styles.js";

export default function ProductCard() {
    const [added, setAdded] = React.useState(false);

  return (
    <div>
      <img src="https://placehold.co/300x150" alt="placeholder" style={{borderRadius: '10px'}}/>
      <Title>Telha Cerâmica Premium</Title>
      <Container>
        <Price>Preço: $129.9</Price>
      </Container>
      <Container>
        <Button added={added} onClick={() => setAdded(!added)}>{added ? "Adicionado" : "Adicionar ao Carrinho"}</Button>
      </Container>
    </div>
  );
}