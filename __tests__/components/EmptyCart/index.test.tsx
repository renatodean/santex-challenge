import { render } from "@testing-library/react";
import EmptyCart from "../../../components/EmptyCart";

describe("EmptyCart snapshot", () => {
  it("renders the EmptyCart", () => {
    const { container } = render(
      <EmptyCart />
    );
    expect(container).toMatchSnapshot();
  });
});
