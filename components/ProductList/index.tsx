import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Item } from "../../types/product";
import ProductCard from "../ProductCard";
import { useRouter } from "next/router";
import { getQueryValue } from "../../utils";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: fit-content;
`;

interface ProductListProps {
  products: Item[];
}

const ProductList = ({ products }: ProductListProps) => {
  const router = useRouter();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (router.query.q) {
      const searchQueryParam = getQueryValue(router.query.q);

      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQueryParam.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [router.query.q, products]);

  return (
    <Container>
      {filteredProducts.map((product) => (
        <ProductCard product={product} key={product.name} />
      ))}
    </Container>
  );
};

export default ProductList;
