import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import productData from "../assets/data/productData.json";
import Shop from "../components/Shop";

describe("Shop component tests", () => {
  const { container } = render(
    <BrowserRouter>
      <Shop />
    </BrowserRouter>
  );
  test("Shop component renders correctly", () => {
    expect(container).toMatchSnapshot();
  });

  test("Shop component renders same number of product cards as in the data file", () => {
    const numberOfDataItems = productData.length;
    act(async () => {
      const numberOfProductCards = await screen.findAllByTestId("product-card");
      expect(numberOfProductCards.length).toBe(numberOfDataItems);
    });
  });
});
