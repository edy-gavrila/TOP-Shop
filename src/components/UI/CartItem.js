import React from "react";
import QuantityModifier from "./QuantityModifier";

function CartItem({ item, onAddItem, onRemoveItem }) {
  const { imgUrl, title } = item.product;
  const { quantity } = item;

  const increaseQuantityHandler = () => {
    onAddItem(item.product);
  };
  const decreaseQuantityHandler = () => {
    onRemoveItem(item.product);
  };

  return (
    <div className="h-28 mb-4 bg-white shadow-md shadow-slate-300 flex items-center justify-between">
      <div className="w-[350px] h-full p-2 flex justify-center overflow-hidden">
        <img src={imgUrl} alt="item" />
      </div>

      <div className="flex w-full justify-center">
        <h3 className="text-xl text-slate-800">{title}</h3>
      </div>

      <div className="w-1/4 p-2 h-full flex items-center justify-end">
        <QuantityModifier
          quantity={quantity}
          onIncreaseQuantity={increaseQuantityHandler}
          onDecreaseQuantity={decreaseQuantityHandler}
        />
      </div>
    </div>
  );
}

export default CartItem;
