import {
  render,
  screen,
  renderHook,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import { StorageProvider, useStorageContext } from "../../../context";
import Product from "../../../pages/product/[slug]";
import { mockedProduct } from "../../../utils/mocks";

const routerPushSpy = jest.fn();
let loadingMock = false;

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
  useQuery: jest.fn(() => ({ data: mockedProduct, loading: loadingMock })),
  gql: jest.fn(() => ({})),
}));

describe("Product", () => {
  afterEach(() => {
    loadingMock = false;
  });
  it("renders a heading", () => {
    render(<Product />);

    const heading = screen.getByRole("heading", {
      name: mockedProduct.product.name,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders spinner when loading", () => {
    loadingMock = true;

    render(<Product />);

    const spinner = screen.getByTestId("spinner");

    expect(spinner).toBeInTheDocument();
  });

  it("should adds a product to the storage when add its clicked", () => {
    const { result } = renderHook(() => useStorageContext());
    const [state] = result.current;
    render(
      <StorageProvider>
        <Product />
      </StorageProvider>
    );

    expect(state.products).toEqual([]);

    const addButton = screen.getByText("Add to cart");
    fireEvent(
      addButton,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    waitFor(() => expect(state.products).toEqual([mockedProduct]));
  });
});

describe("Product snapshot", () => {
  it("renders products", () => {
    const { container } = render(<Product />);
    expect(container).toMatchSnapshot();
  });
});
