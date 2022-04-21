import React from "react";
import { useRoutes, useNavigate } from "react-router-dom";
import ButtonDark from "./UI/ButtonDark";
import CartItem from "./UI/CartItem";
import CartSummary from "./UI/CartSummary";

function Cart({ cart, onAddItem, onRemoveItem }) {
  const navigate = useNavigate();
  const cartIsEmpty = cart.items.length === 0;
  let cartItems;
  const placeOrderHandler = () => {
    navigate("/", { replace: true });
  };

  if (cartIsEmpty) {
    cartItems = <p className="mt-20">Your shopping cart is empty.</p>;
  } else {
    cartItems = cart.items.map((item) => (
      <CartItem
        key={item.product.id}
        item={item}
        onAddItem={onAddItem}
        onRemoveItem={onRemoveItem}
      />
    ));
  }
  return (
    <div data-testid="cart-component">
      <h2 className="text-3xl my-4">Your Shopping Cart</h2>
      <div className="md:flex md:gap-4">
        <div className="md:flex-grow">{cartItems}</div>
        {cartIsEmpty || (
          <div className="flex flex-col justify-between w-full md:w-2/6 bg-white shadow-md shadow-slate-300 p-2 h-fit">
            <div>
              <h3>Summary</h3>
              <p className="text-left">Items:</p>
              <CartSummary cart={cart} />
            </div>
            <ButtonDark text="place order" onClick={placeOrderHandler} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
