import React from "react";

function CartSummary({ cart }) {
  const summaryItems = cart.items.map((item) => {
    const itemPrice = Number.parseFloat(item.product.price.replace(/,/g, ""));
    const totalForItem = itemPrice * item.quantity;

    return (
      <div key={item.product.id} className="text-left mb-2">
        <h4 className="text-blue-600">{item.product.title}</h4>
        <div className="flex justify-between border-b">
          <span className="text-sm">{`${item.quantity} x £${item.product.price}`}</span>
          <span className="text-sm">{`£${totalForItem}`}</span>
        </div>
      </div>
    );
  });

  return (
    <div>
      {summaryItems}
      <div className="flex justify-between border-b-2 mt-8 mb-4">
        <span className="text-left font-bold">Total:</span>
        <span className="font-bold">{`£${cart.total}`}</span>
      </div>
    </div>
  );
}

export default CartSummary;
