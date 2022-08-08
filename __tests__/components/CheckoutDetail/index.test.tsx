import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutDetail from "../../../components/CheckoutDetail";
import { mockedStorageState } from "../../../utils/mocks";

describe("CheckoutDetail", () => {
  it("renders the cartpopup with header", () => {
    render(<CheckoutDetail products={mockedStorageState.products} />);

    expect(screen.getByText("Products")).toBeInTheDocument();
  });

  it("should show products information on pay click", () => {
    render(<CheckoutDetail products={mockedStorageState.products} />);

    const paymentButton = screen.getByText("Pay");
    fireEvent(
      paymentButton,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(
      screen.getByText("You have successfully pay the products:")
    ).toBeInTheDocument();
  });
});

describe("CheckoutDetail snapshot", () => {
  it("renders the cartpopup with products", () => {
    const { container } = render(
      <CheckoutDetail products={mockedStorageState.products} />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders the cartpopup without products", () => {
    const { container } = render(<CheckoutDetail products={[]} />);
    expect(container).toMatchSnapshot();
  });
});
