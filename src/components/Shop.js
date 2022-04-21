import React from "react";
import productData from "../assets/data/productData.json";
import ProductCard from "./UI/ProductCard";

function Shop({ onAddItem }) {
  const products = productData.map((product) => (
    <ProductCard key={product.id} productData={product} onAddItem={onAddItem} />
  ));
  return (
    <div
      data-testid="shop-component"
      className="flex flex-wrap gap-4 items-center justify-center"
    >
      {products}
    </div>
  );
}

export default Shop;
