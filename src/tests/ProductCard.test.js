import { fireEvent, render, screen } from "@testing-library/react";
import ProductCard from "../components/UI/ProductCard";

import productData from "../assets/data/productData.json";

describe("ProductCard tests", () => {
  test("It renders correctly", () => {
    const { component } = render(<ProductCard productData={productData[0]} />);
    expect(component).toMatchSnapshot();
  });

  test("It calls the 'onAddItem' prop function correctly", async () => {
    const addItemHandler = jest.fn();
    render(
      <ProductCard productData={productData[0]} onAddItem={addItemHandler} />
    );
    
    fireEvent.click(screen.getByRole("button"));

    expect(addItemHandler).toBeCalled();

  });
});
