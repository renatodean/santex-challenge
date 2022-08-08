import { render } from "@testing-library/react";
import CheckoutProductDetail from "../../../components/CheckoutProductDetail";
import { mockedProduct } from "../../../utils/mocks";

describe("CheckoutProductDetail snapshot", () => {
  it("renders the CheckoutProductDetail with quantity 1", () => {
    const { container } = render(
      <CheckoutProductDetail product={mockedProduct.product} quantity={1} />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders the CheckoutProductDetail with quantity 3", () => {
    const { container } = render(
      <CheckoutProductDetail product={mockedProduct.product} quantity={3} />
    );
    expect(container).toMatchSnapshot();
  });
});
