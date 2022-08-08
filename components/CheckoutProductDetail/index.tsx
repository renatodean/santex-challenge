import React from "react";
import styled from "@emotion/styled";
import { Item } from "../../types/product";
import Image from "next/image";
import { getPrice } from "../../utils";

const Container = styled.div`
  display: flex;
  padding: 16px 0;
  margin-right: 8px;
  flex-grow: 1;
  &:not(:last-child) {
    border-bottom: 0.5px solid rgba(0, 0, 0, 20%);
  }
`;

const ProductRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 10px 8px;
  padding-right: 0;
  flex-grow: 1;
`;

const ProductInfo = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
`;

const ProductPrice = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  text-align: right;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 40px;
  width: 40px;
  min-height: 40px;
  min-width: 40px;
  align-self: center;
`;

const StyledImage = styled(Image)`
  border-radius: 6px;
`;

interface CheckoutProductDetailProps {
  product: Item;
  quantity: number;
}

const CheckoutProductDetail = ({
  product,
  quantity,
}: CheckoutProductDetailProps) => {
  return (
    <Container>
      <ImageContainer>
        <StyledImage
          priority
          src={product.featuredAsset?.source || "/ban-image-photo-icon.png"}
          alt={product.name}
          layout="fill"
        />
      </ImageContainer>
      <ProductRow>
        <ProductInfo>
          {quantity > 1 ? `${quantity}x ` : ""}
          {product.name}
          {quantity > 1 ? ` [$${getPrice(product)}]` : ""}
        </ProductInfo>
        <ProductPrice>$ {getPrice(product, quantity)}</ProductPrice>
      </ProductRow>
    </Container>
  );
};

export default CheckoutProductDetail;
