import React from "react";
import useProducts from "../hooks/useProducts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";
import { Navigate } from "react-router-dom";
import BannerProductCard from "./BannerProductCard";

export default function Banner() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    // <section className="h-96 bg-green-950 relative">
    //   <div className="w-full h-full bg-cover bg-banner opacity-80"></div>
    //   <div className="absolute w-full top-32 text-center text-gray-50 drop-shadow-2xl">
    //     <p className="text-2xl">JUST FIND, YOUR PERFUME</p>
    //     <h2 className="text-6xl">FIND YOUR PERFUME</h2>
    //   </div>
    // </section>
    <div className="my-5">
      <Slider {...settings}>
        {products &&
          products
            .filter((product) => product.promotion == "Y")
            .map((product) => (
              <BannerProductCard key={product.productId} product={product} />
            ))}

        {/* <div>

        <img className="w-full h-5/6" src={image} alt={title} />
      <div className="mt-6 px-2  text-sm flex justify-between items-center">
        <h3 className="text-gray-500 truncate">{title}</h3>
        <p>{`₩${price.toLocaleString()}`}</p>
      </div>
      <p className="text-xs mt-1 px-2 ">{sex}</p>
        </div> */}
      </Slider>
    </div>
  );
}
