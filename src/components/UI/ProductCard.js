import React from "react";
import ButtonDark from "./ButtonDark";

function ProductCard({ productData, onAddItem }) {
  const { title, imgUrl, description, price, userRating } = productData;

  const addItemHandler = () => onAddItem(productData);

  return (
    <div
      className=" bg-white border-slate-800 shadow-lg shadow-slate-600 p-2 md:w-[320px] h-fit md:h-[480px] flex flex-col justify-between"
      data-testid="product-card"
    >
      <div className="h-1/3">
        <img src={imgUrl} alt={title} className="" />
      </div>
        <h4 className="text-md mt-4 font-bold mb-8">{title}</h4>

      <p className="leading-none mb-8">{description}</p>
      <div className="text-3xl text-blue-500 font-bold mb-8">{`£${price}`}</div>
      <ButtonDark text="Add to cart" onClick={addItemHandler} classes="text-blue-400"/>
    </div>
  );
}

export default ProductCard;
