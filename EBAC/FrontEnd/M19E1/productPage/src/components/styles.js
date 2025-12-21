import styled from "styled-components";

export const Card = styled.div`
  background-color: var(--bg-card);
  border: 1px solid var(--border-default);
  border-radius: 12px;
  padding: 16px;
  width: 300px;
  height: 420px;
  display: flex;
  flex-direction: column;
  color: var(--text-primary);
`;

export const Title = styled.h2`
  font-size: 1.55rem;
  padding: 8px 0;
  color: var(--text-primary);
  min-height: 64px;
`;

export const Price = styled.p`
  font-size: 2.25rem;
  font-weight: 600;
  color: var(--primary);
`;

export const Button = styled.button`
  background-color: ${({ adicionado }) =>
    adicionado ? "var(--success)" : "var(--primary)"};
  color: #0F172A;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s ease-in-out, transform 0.1s ease-in-out;
  &:hover {
    background-color: ${({ adicionado }) =>
      adicionado ? "var(--success-hover)" : "var(--primary-hover)"};
  }
  &:active {
    transform: scale(0.97);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
  flex-wrap: wrap;
`;
