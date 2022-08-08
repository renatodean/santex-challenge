import { render, screen } from "@testing-library/react";
import ProductDetail from "../../../components/ProductDetail";
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

describe("ProductDetail", () => {
  it("renders the product information", () => {
    render(<ProductDetail product={mockedProduct.product} />);

    expect(
      screen.getByText(mockedProduct.product.description)
    ).toBeInTheDocument();
  });
});

describe("ProductDetail snapshot", () => {
  it("renders product detail", () => {
    const { container } = render(
      <ProductDetail product={mockedProduct.product} />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders empty page if no product is passed", () => {
    const { container } = render(<ProductDetail />);
    expect(container).toMatchSnapshot();
  });
});
