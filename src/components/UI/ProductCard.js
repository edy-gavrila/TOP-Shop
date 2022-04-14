import React from "react";

function ProductCard({ productData }) {
  const { title, imgUrl, description, price, userRating } = productData;

  return (
    <div className=" bg-white border-slate-800 shadow-lg shadow-slate-600 p-2 md:w-[320px] h-[480px] flex flex-col justify-between">
      <div>
        <img src={imgUrl} alt={title} className="" />
        <h4 className="text-md mt-4 font-bold">{title}</h4>
      </div>

      <p className="leading-none">{description}</p>
      <div>{`£${price}`}</div>
      <button className="bg-slate-800 text-white py-2 w-full shadow-md shadow-slate-800">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
