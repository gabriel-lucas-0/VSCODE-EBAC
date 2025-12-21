import React from "react";
import { Card, Title, Price, Button, Container } from "./styles";

export default function ProductCard({ title, price, image }) {
  const [adicionado, setAdicionado] = React.useState(false);

  return (
    <Card>
      <img
        src={image}
        alt={title}
        style={{ width: "100%", borderRadius: "6px" }}
      />

      <Title>{title}</Title>

      <Container style={{ flex: 1 }}>
        <Price>{price}</Price>
      </Container>

      <Container>
        <Button
          adicionado={adicionado}
          onClick={() => setAdicionado(!adicionado)}
        >
          {adicionado ? "Adicionado" : "Adicionar ao Carrinho"}
        </Button>
      </Container>
    </Card>
  );
}
