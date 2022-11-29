import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

afterEach(() => cleanup());

describe("Testing App", () => {
  test("Renders Shop now! button", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const link = screen.getByRole("link", { name: "Shop now!" });
    expect(link).toBeInTheDocument();
  });

  test("Has right href", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const link = screen.getByRole("link", { name: "Shop now!" });
    expect(link).toHaveAttribute("href", "/shop");
  });

  test("Add to cart button adds 1 to cart in header", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const link = screen.getByRole("link", { name: "Shop now!" });
    userEvent.click(link);
    const buttonArr = screen.getAllByRole("button", { name: "Add to cart" });
    userEvent.click(buttonArr[0]);

    const numOfItemsInCart = screen.getByTestId("num-of-items").textContent;

    expect(numOfItemsInCart).toBe("1");
  });

  test("Item appears in cart after it is added to cart", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const buttonArr = screen.getAllByRole("button", { name: "Add to cart" });
    userEvent.click(buttonArr[0]);
  });

  test("Checkout button appears when item is added to cart", async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const buttonArr = screen.getAllByRole("button", { name: "Add to cart" });
    userEvent.click(buttonArr[0]);

    const checkoutBtn = screen.getByRole("button", { name: "Checkout" });
    expect(checkoutBtn).toBeInTheDocument();
  });

  test("Check that item was added to the cart", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const buttonArr = screen.getAllByRole("button", { name: "Add to cart" });
    userEvent.click(buttonArr[0]);

    const container = screen.getByTestId("item-container");
    expect(container).toBeInTheDocument();
  });

  test("Remove button appears when item is added to cart", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const buttonArr = screen.getAllByRole("button", { name: "Add to cart" });
    userEvent.click(buttonArr[0]);

    const removeBtn = screen.getByRole("button", { name: "Remove" });
    expect(removeBtn).toBeInTheDocument();
  });

  test("Container with item is removed after clicking remove button", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const buttonArr = screen.getAllByRole("button", { name: "Add to cart" });
    userEvent.click(buttonArr[0]);

    const removeBtn = screen.getByRole("button", { name: "Remove" });
    const itemContainer = screen.getByTestId("item-container");
    userEvent.click(removeBtn);
    expect(itemContainer).not.toBeInTheDocument();
  });

  test("Adds one item to the cart when + button is clicked", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const buttonArr = screen.getAllByRole("button", { name: "Add to cart" });
    userEvent.click(buttonArr[0]);

    const plusBtn = screen.getByRole("button", { name: "+" });
    userEvent.click(plusBtn);

    const numOfItemsInCart = screen.getByTestId("num-of-items").textContent;

    expect(numOfItemsInCart).toBe("2");
  });

  test("After clicking minus button and number of particular item in cart is 0, remove item", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const buttonArr = screen.getAllByRole("button", { name: "Add to cart" });
    userEvent.click(buttonArr[0]);

    const minusBtn = screen.getByRole("button", { name: "-" });
    const itemContainer = screen.getByTestId("item-container");
    userEvent.click(minusBtn);

    expect(itemContainer).not.toBeInTheDocument();
  });

  test("Close cart button appears in cart when there are no items", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const buttonArr = screen.getAllByRole("button", { name: "Add to cart" });
    userEvent.click(buttonArr[0]);

    const minusBtn = screen.getByRole("button", { name: "-" });
    userEvent.click(minusBtn);
    const emptyCartBtn = screen.getByRole("button", { name: "Close Cart" });

    expect(emptyCartBtn).toBeInTheDocument();
  });

  test("Remove button completely remove item from cart", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const buttonArr = screen.getAllByRole("button", { name: "Add to cart" });
    userEvent.click(buttonArr[0]);
    userEvent.click(buttonArr[0]);
    userEvent.click(buttonArr[0]);

    const removeBtn = screen.getByRole("button", { name: "Remove" });
    const itemContainer = screen.getByTestId("item-container");

    userEvent.click(removeBtn);

    expect(itemContainer).not.toBeInTheDocument();
  });
});
