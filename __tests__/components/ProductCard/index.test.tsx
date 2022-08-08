import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "../../../components/ProductCard";
import { mockedProduct } from "../../../utils/mocks";

const routerPushSpy = jest.fn();

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: routerPushSpy,
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

describe("ProductCard", () => {
  it("renders the product information", () => {
    render(<ProductCard product={mockedProduct.product} />);

    expect(
      screen.getByText(mockedProduct.product.name)
    ).toBeInTheDocument();
  });

  it("should go to a product when press enter", () => {
    render(<ProductCard product={mockedProduct.product} />);

    const productCard = screen.getByTestId("product-card");
    fireEvent.keyPress(productCard, {key: 'Enter', code: 'Enter', charCode: 13})

    expect(routerPushSpy).toHaveBeenCalled();
    expect(routerPushSpy).toHaveBeenCalledTimes(1);
    expect(routerPushSpy).toHaveBeenCalledWith("/product/laptop");
  });
});

describe("ProductCard snapshot", () => {
  it("renders product detail", () => {
    const { container } = render(
      <ProductCard product={mockedProduct.product} />
    );
    expect(container).toMatchSnapshot();
  });
});
