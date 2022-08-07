import { gql, useQuery } from "@apollo/client";
import { Item } from "../types/product";

interface ProductQueryResponse {
  product: Item;
}

const GET_PRODUCT = gql`
  query GetProductBySlug($slug: String!) {
    product(slug: $slug) {
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
`;

export function useProductQuery(slug: string) {
  return useQuery<ProductQueryResponse>(GET_PRODUCT, {
    variables: { slug },
  });
}
