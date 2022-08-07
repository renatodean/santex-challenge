import React from "react";
import styled from "@emotion/styled";
import { Item } from "../../types/product";
import { getPrice } from "../../utils";

const Container = styled.li``;

const ProductRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-bottom: 6px;
`;

const ProductInfo = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

const ProductPrice = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-align: right;
`;

interface CartProductDetailProps {
  product: Item;
  quantity: number;
}

const CartProductDetail = ({ product, quantity }: CartProductDetailProps) => (
  <Container>
    <ProductRow>
      <ProductInfo>
        {quantity > 1 ? `${quantity}x ` : ""}
        {product.name}
      </ProductInfo>
      <ProductPrice>$ {getPrice(product, quantity)}</ProductPrice>
    </ProductRow>
  </Container>
);

export default CartProductDetail;
