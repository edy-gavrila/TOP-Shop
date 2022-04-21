import React from "react";
import ButtonDark from "./ButtonDark";

function QuantityModifier({
  quantity,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) {
  return (
    <div className="flex flex-col">
      <ButtonDark text="+" classes="px-2 py-1" onClick={onIncreaseQuantity} />
      <span className="text-blue-600 font-bold">{quantity}</span>
      <ButtonDark text="-" classes="px-2 py-1" onClick={onDecreaseQuantity} />
    </div>
  );
}

export default QuantityModifier;
