import React from "react";
import styled from "@emotion/styled";
import { DashLg, PlusLg } from "@styled-icons/bootstrap";

const Container = styled.div`
  display: flex;
  margin-top: 10px;
  align-self: center;
  @media (min-width: 900px) {
    align-self: flex-start;
  }
`;

const MinusContainer = styled.div`
  display: flex;
  width: 36px;
  height: 36px;
  padding: 8px;
  border: 2px solid black;
  border-radius: 50%;
  cursor: pointer;
`;

const PlusContainer = styled.div`
  display: flex;
  width: 36px;
  height: 36px;
  padding: 8px;
  border: 2px solid black;
  border-radius: 50%;
  cursor: pointer;
`;

const QuantityText = styled.p`
  font-size: 20px;
  line-height: 36px;
  margin: 0;
  width: 30px;
  text-align: center;
`;

interface QuantitySelectorProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const QuantitySelector = ({ quantity, setQuantity }: QuantitySelectorProps) => {
  const reduceQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <Container>
      <MinusContainer
        tabIndex={0}
        onClick={reduceQuantity}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            reduceQuantity();
          }
        }}
      >
        <DashLg size={16} />
      </MinusContainer>
      <QuantityText>{quantity}</QuantityText>
      <PlusContainer
        tabIndex={0}
        onClick={increaseQuantity}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            increaseQuantity();
          }
        }}
      >
        <PlusLg size={16} />
      </PlusContainer>
    </Container>
  );
};

export default QuantitySelector;
