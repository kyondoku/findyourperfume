import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  product,
  product: { productId, image, title, sex, price },
}) {
  const navigate = useNavigate();
  const length = product.options.length;
  console.log(product.options.length);
  return (
    <li
      onClick={() => {
        navigate(`/products/${productId}`, { state: { product } });
      }}
      className="overflow-hidden cursor-pointer"
    >
      <img className="w-full" src={image} alt={title} />
      <div className="flex justify-between text-xs my-2 text-gray-500">
        <p>{sex == "M" ? "MEN" : "WOMEN"}</p>
        <p>
          {product.options[0]}-{product.options[product.options.length - 1]}
        </p>
      </div>
      <div>
        <h3 className="truncate font-semibold">{title}</h3>
        <p className="font-extrabold">{`${price.toLocaleString()}`}원</p>
      </div>
    </li>
  );
}
