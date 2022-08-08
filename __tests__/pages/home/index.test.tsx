import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../../../pages";
import { mockedProduct, mockedProducts } from "../../../utils/mocks";

const routerPushSpy = jest.fn();
let routerQuery = { q: "a" };

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: routerQuery,
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

jest.mock("@apollo/client", () => ({
  __esModule: true,
  useQuery: jest.fn(() => ({ data: mockedProducts })),
  gql: jest.fn(() => ({})),
}));

jest.mock("../../../context", () => ({
  __esModule: true,
  useStorageContext: jest.fn(() => [{ products: [mockedProduct] }, jest.fn()]),
}));

describe("Home with products fetched", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: "Product list",
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders a products without query", () => {
    routerQuery = { q: "" };
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: "Product list",
    });

    expect(heading).toBeInTheDocument();
  });

  it("should go to a product", () => {
    render(<Home />);

    const productTitle = screen.getByText("Laptop");
    fireEvent(
      productTitle,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(routerPushSpy).toHaveBeenCalled();
    expect(routerPushSpy).toHaveBeenCalledTimes(1);
    expect(routerPushSpy).toHaveBeenCalledWith("/product/laptop");
  });
});

describe("Home snapshot", () => {
  it("renders products", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
