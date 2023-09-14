import React from "react";
import { getItems } from "../api/firebase";
import Banner from "../components/Banner";
import Products from "../components/Products";

export default function Home() {
  //   const itemList = getItems();
  //   console.log(itemList);
  return (
    <section>
      <Banner />
      <Products />
    </section>
  );
}
