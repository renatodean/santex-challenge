import { render, screen, fireEvent } from "@testing-library/react";
import CartPopup from "../../../components/CartPopup";
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

describe("CartPopup", () => {
  it("renders the cartpopup with header", () => {
    render(<CartPopup products={mockedStorageState.products} />);

    expect(screen.getByText("Products:")).toBeInTheDocument();
  });

  it("should go to checkout when button it's clicked", () => {
    render(<CartPopup products={mockedStorageState.products} />);

    const checkoutButton = screen.getByTestId("checkout-button");
    fireEvent(
      checkoutButton,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(routerPushSpy).toHaveBeenCalled();
    expect(routerPushSpy).toHaveBeenCalledTimes(1);
    expect(routerPushSpy).toHaveBeenCalledWith("/checkout");
  });

  it("should go to checkout when button it's press with enter", () => {
    render(<CartPopup products={mockedStorageState.products} />);

    const checkoutButton = screen.getByTestId("checkout-button");
    fireEvent.keyPress(checkoutButton, { key: "Enter", code: "Enter", charCode: 13 });

    expect(routerPushSpy).toHaveBeenCalled();
    expect(routerPushSpy).toHaveBeenCalledTimes(2);
    expect(routerPushSpy).toHaveBeenCalledWith("/checkout");
  });
});

describe("CartPopup snapshot", () => {
  it("renders the cartpopup with products", () => {
    const { container } = render(
      <CartPopup products={mockedStorageState.products} />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders the cartpopup without products", () => {
    const { container } = render(<CartPopup products={[]} />);
    expect(container).toMatchSnapshot();
  });
});
