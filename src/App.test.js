import { BrowserRouter, MemoryRouter } from "react-router-dom";

import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App tests", () => {
  test("It renders correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});

describe("Router tests", () => {
  test("It should show Home components for the '/' route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("home-component")).toBeInTheDocument();
  });

  test("It should show Shop component for the '/shop' route", () => {
    render(
      <MemoryRouter initialEntries={["/shop"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("shop-component")).toBeInTheDocument();
  });

  test("It should show Cart component for the '/cart' route", () => {
    render(
      <MemoryRouter initialEntries={["/cart"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("cart-component")).toBeInTheDocument();
  });
});
