import React, { useMemo, useState } from "react";
import styled from "@emotion/styled";
import { Item } from "../../types/product";
import { getPriceNumber } from "../../utils";
import CheckoutProductDetail from "../CheckoutProductDetail";

const Container = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  @media (min-width: 900px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const ProductsContainer = styled.div`
  position: relative;
  align-self: center;
  min-width: 256px;
  @media (min-width: 900px) {
    border-right: 0.5px solid rgba(0, 0, 0, 20%);
  }
`;

const PriceInformation = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  border-top: 0.5px solid rgba(0, 0, 0, 20%);
  padding-top: 12px;
  align-items: center;
  align-self: center;
  @media (min-width: 900px) {
    border-top: none;
    padding-top: 0;
    padding-left: 16px;
  }
`;

const CheckoutSectionTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 8px;
  text-align: center;
  @media (min-width: 900px) {
    text-align: left;
  }
`;

const PayButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-size: 20px;
  line-height: 24px;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: rgba(1, 1, 1, 70%);
  }
`;

const PaymentSuccessful = styled.h3`
  margin-top: 40px;
`;

const ProductsPayed = styled.p`
  overflow-wrap: anywhere;
`;

interface CheckoutDetailProps {
  products: {
    product: Item;
    quantity: number;
  }[];
}

const CheckoutDetail = ({ products }: CheckoutDetailProps) => {
  const [showPayment, setShowPayment] = useState(false);
  const totalPrice = useMemo(
    () =>
      products.reduce(
        (previous, product) =>
          previous + getPriceNumber(product.product, product.quantity),
        0
      ),
    [products]
  );

  return (
    <>
      <Container>
        <ProductsContainer>
          <CheckoutSectionTitle>Products</CheckoutSectionTitle>
          {products.map((product) => (
            <CheckoutProductDetail key={product.product.name} {...product} />
          ))}
        </ProductsContainer>
        <PriceInformation>
          <CheckoutSectionTitle>
            Total $ {totalPrice.toFixed(2)}
          </CheckoutSectionTitle>
          <PayButton onClick={() => setShowPayment(true)}>Pay</PayButton>
        </PriceInformation>
      </Container>
      {showPayment && (
        <>
          <PaymentSuccessful>
            You have successfully pay the products:
          </PaymentSuccessful>
          <ProductsPayed>{JSON.stringify(products)}</ProductsPayed>
        </>
      )}
    </>
  );
};

export default CheckoutDetail;
