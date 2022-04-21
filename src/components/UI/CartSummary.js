import React from "react";
import { addCommasToPrice } from "../../API/helperFunctions";

function CartSummary({ cart }) {
  const cartTotal = addCommasToPrice(cart.total.toString());
  
  const summaryItems = cart.items.map((item) => {
    const itemPrice = Number.parseFloat(item.product.price.replace(/,/g, ""));

    let totalForItem = itemPrice * item.quantity;
    totalForItem = addCommasToPrice(totalForItem.toString());


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
        <span className="font-bold">{`£${cartTotal}`}</span>
      </div>
    </div>
  );
}

export default CartSummary;
