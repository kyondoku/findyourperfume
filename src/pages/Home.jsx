import React from "react";
import { getItems } from "../api/firebase";

export default function Home() {
  //   const itemList = getItems();
  //   console.log(itemList);
  return (
    <ul>
      {/* {itemList.map((item) => (
        <li key={item.productId}>{item.title}</li>
      ))} */}
    </ul>
  );
}
