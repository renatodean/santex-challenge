import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../../../components/Header";
import { mockedStorageState } from "../../../utils/mocks";

const routerPushSpy = jest.fn();

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: { q: "" },
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

jest.mock("../../../context", () => ({
  __esModule: true,
  useStorageContext: jest.fn(() => [mockedStorageState, jest.fn()]),
}));

describe("Header", () => {
  it("renders the header with search", () => {
    render(<Header withSearch />);

    expect(screen.getByTestId("search-input")).toBeInTheDocument();
  });

  it("should open the cart popup when icon is clicked", () => {
    render(<Header />);

    const cartIcon = screen.getByTestId("cart-icon");
    fireEvent(
      cartIcon,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByTestId("cart-popup")).toBeInTheDocument();
  });

  it("should go to the homepage when press enter on page logo", () => {
    render(<Header />);

    const homeLink = screen.getByTestId("home-link");
    fireEvent.keyPress(homeLink, { key: "Enter", code: "Enter", charCode: 13 });

    expect(routerPushSpy).toHaveBeenCalled();
    expect(routerPushSpy).toHaveBeenCalledTimes(1);
    expect(routerPushSpy).toHaveBeenCalledWith("/");
  });

  it("should go to the homepage when clicks on page logo", () => {
    render(<Header />);

    const homeLink = screen.getByTestId("home-link");
    fireEvent(
      homeLink,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(routerPushSpy).toHaveBeenCalled();
    expect(routerPushSpy).toHaveBeenCalledTimes(2);
    expect(routerPushSpy).toHaveBeenCalledWith("/");
  });

  it("should add query when search changes", () => {
    render(<Header withSearch />);

    const homeLink = screen.getByTestId("search-input");
    fireEvent.change(homeLink, { target: { value: "Query" } });

    expect(routerPushSpy).toHaveBeenCalled();
    expect(routerPushSpy).toHaveBeenCalledTimes(3);
    expect(routerPushSpy).toHaveBeenNthCalledWith(
      3,
      {
        pathname: "/",
        query: { q: "Query" },
      },
      undefined,
      {}
    );
  });
});

describe("Header snapshot", () => {
  it("renders the header with search", () => {
    const { container } = render(<Header withSearch />);
    expect(container).toMatchSnapshot();
  });
});
