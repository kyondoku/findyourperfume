import React from "react";
import { useNavigate } from "react-router-dom";

export default function BannerProductCard({
  product,
  product: { productId, image, title, sex, price },
}) {
  const navigate = useNavigate();
  return (
    <img
      onClick={() => {
        navigate(`/products/${product.productId}`, {
          state: { product },
        });
      }}
      className="w-full object-cover cursor-pointer"
      src={product.image}
      alt={product.title}
    />
  );
}
