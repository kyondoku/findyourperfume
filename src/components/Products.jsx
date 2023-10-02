import React from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

export default function Products({ gender }) {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  console.log(gender);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-16">
        {products &&
          gender &&
          products
            .filter((product) => product.sex == gender)
            .map((product) => (
              <ProductCard key={product.productId} product={product} />
            ))}
        {products &&
          !gender &&
          products.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
      </ul>
    </>
  );
}
