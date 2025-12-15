import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
`;

export const Title = styled.h2`
  font-size: 1.55rem;
  padding: 8px 0;
`;

export const Price = styled.p`
  font-size: 1.25rem;
`;

export const Button = styled.button`
  background-color: ${({ added }) => added ? "#198754" : "#6c757d"};
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ added }) => added ? "#157347" : "#5c636a"};
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;