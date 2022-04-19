import React from "react";

function ProductCard({ productData }) {
  const { title, imgUrl, description, price, userRating } = productData;

  return (
    <div className=" bg-white border-slate-800 shadow-lg shadow-slate-600 p-2 md:w-[320px] h-[480px] flex flex-col justify-between" data-testid="product-card">
      <div>
        <img src={imgUrl} alt={title} className="" />
        <h4 className="text-md mt-4 font-bold">{title}</h4>
      </div>

      <p className="leading-none">{description}</p>
      <div className="text-3xl text-blue-500 font-bold">{`£${price}`}</div>
      <button className="bg-slate-800 text-white py-2 w-full shadow-md shadow-slate-800 hover:bg-slate-900 active:scale-95">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
