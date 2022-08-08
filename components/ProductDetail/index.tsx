import React, { useState } from "react";
import styled from "@emotion/styled";
import { Item } from "../../types/product";
import Image from "next/image";
import { getPrice } from "../../utils";
import { useStorageContext } from "../../context";
import { addProduct, updateSnackbar } from "../../reducer/actions";
import { useRouter } from "next/router";
import QuantitySelector from "../QuantitySelector";

const Container = styled.div`
  background-color: white;
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  gap: 20px;
  height: fit-content;
  @media (min-width: 900px) {
    padding: 22px;
    gap: 28px;
    flex-direction: row;
  }
  @media (min-width: 1200px) {
    padding: 26px;
    gap: 40px;
    flex-direction: row;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  width: 288px;
  height: 200px;
  align-self: center;
  @media (min-width: 480px) {
    width: 388px;
    height: 250px;
  }
  @media (min-width: 900px) {
    align-self: flex-start;
    width: 388px;
    height: 225px;
  }
  @media (min-width: 1200px) {
    align-self: flex-start;
    width: 532px;
    height: 250px;
  }
`;

const ProductInformation = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  align-self: center;
  @media (min-width: 900px) {
    text-align: left;
    align-self: auto;
    max-width: 400px;
  }
`;

const ProductTitle = styled.h2`
  margin-bottom: 4px;
  margin-top: 0;
`;

const ProductDescription = styled.p`
  mmargin-bottom: 4px;
`;

const ProductPrice = styled.span`
  font-size: 20px;
  line-height: 24px;
  font-weidth: 600;
`;

const AddToCartButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-size: 20px;
  line-height: 24px;
  margin-top: 30px;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    background-color: rgba(1, 1, 1, 70%);
  }
  @media (min-width: 900px) {
    max-width: 200px;
  }
`;

interface ProductDetailProps {
  product?: Item;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const [, dispatch] = useStorageContext();

  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    dispatch(addProduct({ product, quantity }));
    dispatch(updateSnackbar(true));
    router.push("/");
  };

  return (
    <Container>
      <ImgContainer>
        <Image
          src={product.featuredAsset?.source || "/ban-image-photo-icon.png"}
          priority
          alt={product.name}
          layout="fill"
          objectFit="contain"
        />
      </ImgContainer>
      <ProductInformation>
        <ProductTitle>Description</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>Price: ${getPrice(product)}</ProductPrice>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <AddToCartButton onClick={handleAddToCart}>Add to cart</AddToCartButton>
      </ProductInformation>
    </Container>
  );
};

export default ProductDetail;
