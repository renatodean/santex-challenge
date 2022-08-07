import React from "react";
import styled from "@emotion/styled";
import { Item } from "../../types/product";
import Image from "next/image";
import { getPrice } from "../../utils";
import { useRouter } from "next/router";

const Container = styled.div`
  padding: 10px;
  margin: 10px;
  border: 0.5px solid rgba(0, 0, 0, 20%);
  border-radius: 8px;
  background-color: white;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-align: center;
  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const ImgContainer = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
`;

const ProductName = styled.span`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  max-width: 180px;
  border-top: 0.5px solid gray;
  padding-top: 10px;
  margin-top: 10px;
  margin-bottom: 4px;
`;

const ProductPrice = styled.span`
  font-size: 16px;
  line-height: 20px;
  font-weidth: 600;
  max-width: 180px;
`;

interface ProductCardProps {
  product: Item;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();

  return (
    <Container
      tabIndex={0}
      onClick={() => router.push(`/product/${product.slug}`)}
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          router.push(`/product/${product.slug}`);
        }
      }}
    >
      <ImgContainer>
        <Image
          src={product.featuredAsset.source}
          priority
          alt={product.name}
          layout="fill"
          objectFit="contain"
        />
      </ImgContainer>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>${getPrice(product)}</ProductPrice>
    </Container>
  );
};

export default ProductCard;
