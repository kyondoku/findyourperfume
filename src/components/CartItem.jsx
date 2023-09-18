import React from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { removeCart, updateCart } from "../api/firebase";

export default function CartItem({
  product,
  product: { productId, image, title, option, quantity, price },
  uid,
}) {
  const handleMinus = () => {
    if (quantity < 2) return;
    updateCart(uid, { ...product, quantity: quantity - 1 });
  };
  const handlePlus = () =>
    updateCart(uid, { ...product, quantity: quantity + 1 });

  const handleDelete = () => removeCart(uid, productId);

  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <p>{title}</p>
        <p>{option}</p>
        <AiOutlineMinusSquare onClick={handleMinus} />
        <span>{quantity}</span>
        <AiOutlinePlusSquare onClick={handlePlus} />
        <RiDeleteBin5Fill onClick={handleDelete} />
      </div>
    </li>
  );
}
