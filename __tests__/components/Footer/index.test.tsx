import { render } from "@testing-library/react";
import Footer from "../../../components/Footer";

describe("Footer snapshot", () => {
  it("renders the Footer", () => {
    const { container } = render(
      <Footer />
    );
    expect(container).toMatchSnapshot();
  });
});
