import React from "react";

export default function ProductCard({
  key,
  product: { id, image, title, brand, price },
}) {
  console.log("dddd");
  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{`₩${price}`}</p>
      </div>
      <p>{brand}</p>
    </li>
  );
}
