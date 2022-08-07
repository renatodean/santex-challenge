import type { NextPage } from "next";
import Page from "../components/Page";
import ProductList from "../components/ProductList";
import Spinner from "../components/Spinner";
import { useProductsQuery } from "../hooks/fetch-products";

const Home: NextPage = () => {
  const { data, loading } = useProductsQuery();
  const products = data?.products.items || [];

  return (
    <Page title="Product list" withSearch>
      {loading ? <Spinner /> : <ProductList products={products} />}
    </Page>
  );
};

export default Home;
