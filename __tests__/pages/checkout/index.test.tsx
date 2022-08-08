import { render, screen } from "@testing-library/react";
import React from "react";
import Checkout from "../../../pages/checkout";
import { mockedProduct, mockedStorageState } from "../../../utils/mocks";

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

jest.mock("@apollo/client", () => ({
  __esModule: true,
  useQuery: jest.fn(() => ({ data: mockedProduct })),
  gql: jest.fn(() => ({})),
}));

jest.mock("../../../context", () => ({
  __esModule: true,
  useStorageContext: jest.fn(() => [mockedStorageState, jest.fn()]),
}));

describe("Product", () => {
  it("renders a heading", () => {
    render(<Checkout />);

    const heading = screen.getByRole("heading", {
      name: "Checkout information",
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders one product with quantity 3", () => {
    render(<Checkout />);

    const product = screen.getByText("3x Laptop [$1299.00]");

    expect(product).toBeInTheDocument();
  });
});

describe("Product snapshot", () => {
  it("renders products", () => {
    const { container } = render(<Checkout />);
    expect(container).toMatchSnapshot();
  });
});
