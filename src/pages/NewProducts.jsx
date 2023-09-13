import React, { useState } from "react";
import { uploadAsset } from "../api/cloudinary";
import { addItem } from "../api/firebase";
import Button from "../components/ui/Button";

export default function NewProducts() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // 제품의 사진을 cloudinary에 업로드, url 획득
    uploadAsset(file).then((url) => {
      console.log(url);
      addItem(product, url);
    });
    // Firebase에 새로운 상품을 추가
  };

  return (
    <section>
      {file && <img src={URL.createObjectURL(file)} alt="local file" />}
      <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          value={product.title ?? ""}
          placeholder="상품명"
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          value={product.price ?? ""}
          placeholder="가격"
          onChange={handleChange}
        />
        <input
          type="text"
          name="brand"
          value={product.brand ?? ""}
          placeholder="브랜드"
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={product.description ?? ""}
          placeholder="상품 설명"
          onChange={handleChange}
        />
        <input
          type="text"
          name="options"
          value={product.options ?? ""}
          placeholder="옵션(콤마(,)로 구분"
          onChange={handleChange}
        />
        <Button text={"상품 추가하기"} />
      </form>
    </section>
  );
}
