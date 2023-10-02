import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  product,
  product: { productId, image, title, sex, price },
}) {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => {
        navigate(`/products/${productId}`, { state: { product } });
      }}
      className="overflow-hidden cursor-pointer"
    >
      <img className="w-full h-5/6" src={image} alt={title} />
      <div className="mt-4 px-2 text-sm flex justify-between items-center">
        <h3 className="text-gray-500 truncate">{title}</h3>
        <p>{`₩${price.toLocaleString()}`}</p>
      </div>
      <p className="text-xs mt-1 px-2 ">{sex == "M" ? "남성" : "여성"}</p>
    </li>
  );
}
