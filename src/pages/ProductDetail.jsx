import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";
import useCart from "../hooks/useCart";

export default function ProductDetail() {
  const {
    state: {
      product: { productId, image, title, description, sex, price, options },
    },
  } = useLocation();

  const [success, setSuccess] = useState();
  const [selected, setSelected] = useState(options && options[0]);
  const { updateCart } = useCart();

  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
    const product = {
      productId,
      image,
      title,
      price,
      option: selected,
      quantity: 1,
    };
    updateCart.mutate(product, {
      onSuccess: () => {
        setSuccess("장바구니에 추가되었습니다.");
        setTimeout(() => setSuccess(null), 1000);
      },
    });
  };

  return (
    <div className="w-full flex flex-col md:flex-row p-4 items-center">
      <img className="w-full px-4 basis-7/12" src={image} alt={title} />
      <div className="w-full basis-5/12 flex flex-col p-4">
        <p className="text-gray-700">{sex == "M" ? "남성" : "여성"}</p>
        <h2 className="text-3xl font-bold py-2 ">{title}</h2>
        <p className="text-2xl font-bold py-2 border-b border-gray-400">
          ₩{price.toLocaleString()}
        </p>
        <p className="py-4 text-lg">{description}</p>
        <div className="flex items-center">
          <label className="text-brand font-bold" htmlFor="select">
            옵션:
          </label>
          <select
            id="select"
            className="p-2 m-4 flex-1 border border-dashed border-brand ouline-none"
            onChange={handleSelect}
            value={selected}
          >
            {options &&
              options.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
          </select>
        </div>
        <Button
          text={success ? success : "장바구니에 추가"}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
