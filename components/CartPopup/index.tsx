import React, { useMemo } from "react";
import styled from "@emotion/styled";
import { Item } from "../../types/product";
import EmptyCart from "../EmptyCart";
import CartProductDetail from "../CartProductDetail";
import { useRouter } from "next/router";
import { getPriceNumber } from "../../utils";

const Container = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  position: absolute;
  padding: 20px;
  width: 300px;
  height: auto;
  max-height: 50vh;
  background-color: white;
  border: 1px solid black;
  border-radius: 12px;
  z-index: 10;
  top: 50px;
  right: 10px;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.3);
`;

const CheckoutButton = styled.button`
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
  &:hover {
    background-color: rgba(1, 1, 1, 70%);
  }
`;

const CartPopupTitle = styled.h4`
  margin-top: 0;
  margin-bottom: 0;
`;

const ProductsContainer = styled.ul`
  padding-inline-start: 20px;
`;

const ProductsTotalContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  border-top: 0.5px solid rgba(0, 0, 0, 20%);
  padding-top: 10px;
  margin-bottom: 6px;
`;

const TotalInfo = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const TotalPrice = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-align: right;
`;

interface CartPopupProps {
  products: {
    product: Item;
    quantity: number;
  }[];
}

const CartPopup = ({ products }: CartPopupProps) => {
  const router = useRouter();
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
    <Container>
      {products && products.length ? (
        <>
          <CartPopupTitle>Products:</CartPopupTitle>
          <ProductsContainer>
            {products.map((product) => (
              <CartProductDetail key={product.product.slug} {...product} />
            ))}
          </ProductsContainer>
          <ProductsTotalContainer>
            <TotalInfo>Total:</TotalInfo>
            <TotalPrice>$ {totalPrice.toFixed(2)}</TotalPrice>
          </ProductsTotalContainer>
          <CheckoutButton
            tabIndex={0}
            onClick={() => router.push("/checkout")}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                router.push("/checkout");
              }
            }}
          >
            Checkout
          </CheckoutButton>
        </>
      ) : (
        <EmptyCart />
      )}
    </Container>
  );
};

export default CartPopup;
