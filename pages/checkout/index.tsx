import type { NextPage } from "next";
import CheckoutDetail from "../../components/CheckoutDetail";
import Page from "../../components/Page";
import { useStorageContext } from "../../context";

const Home: NextPage = () => {
  const [state] = useStorageContext();

  return (
    <Page title="Checkout information">
      <CheckoutDetail products={state.products} />
    </Page>
  );
};

export default Home;
