import type { NextPage } from "next";
import { useRouter } from "next/router";
import Page from "../../components/Page";
import ProductDetail from "../../components/ProductDetail";
import Spinner from "../../components/Spinner";
import { useProductQuery } from "../../hooks/fetch-product";
import { getQueryValue } from "../../utils";

const Home: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const formatedSlug = getQueryValue(slug);
  const { data, loading } = useProductQuery(formatedSlug);
  const product = data?.product;

  return (
    <Page title={product?.name}>
      {loading ? <Spinner /> : <ProductDetail product={product} />}
    </Page>
  );
};

export default Home;
