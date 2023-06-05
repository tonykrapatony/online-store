import React from "react";
import { useSelector } from "react-redux";
import ProductInfo from "../components/store/products/ProductInfo";

export default function Product() {
  const product = useSelector((state) => state.product.product);
  return (
    <ProductInfo product={product} className="product_info" />
  );
}
