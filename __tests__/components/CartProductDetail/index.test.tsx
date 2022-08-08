import { render } from "@testing-library/react";
import CartProductDetail from "../../../components/CartProductDetail";
import { mockedProduct } from "../../../utils/mocks";

describe("CartProductDetail snapshot", () => {
  it("renders the CartProductDetail", () => {
    const { container } = render(
      <CartProductDetail product={mockedProduct.product} quantity={3} />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders the CartProductDetail with quantity 1", () => {
    const { container } = render(
      <CartProductDetail product={mockedProduct.product} quantity={1} />
    );
    expect(container).toMatchSnapshot();
  });
});
