import React from "react";
import styled from "@emotion/styled";
import { CartX } from "@styled-icons/bootstrap";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  align-items: center;
`;

const NoProductsTitle = styled.h4`
  text-align: center;
`;

const CartDescription = styled.span`
  margin-top: 0;
  text-align: center;
`;

const EmptyCart = () => (
  <Container>
    <CartX size={36} />
    <NoProductsTitle>No products in the cart</NoProductsTitle>
    <CartDescription>Not sure where to start?</CartDescription>
    <CartDescription>Check out the homepage.</CartDescription>
  </Container>
);

export default EmptyCart;
