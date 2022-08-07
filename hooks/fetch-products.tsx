import { gql, useQuery } from "@apollo/client";
import { Products } from "../types/product";

interface ProductsQueryResponse {
  products: Products;
}

const GET_PRODUCTS = gql`
  query {
    products {
      totalItems
      items {
        id
        name
        slug
        description
        featuredAsset {
          id
          name
          type
          source
          preview
        }
        variants {
          price
        }
      }
    }
  }
`;

export function useProductsQuery() {
  return useQuery<ProductsQueryResponse>(GET_PRODUCTS);
}
