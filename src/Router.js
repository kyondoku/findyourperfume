import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AllProducts from "./pages/AllProducts";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";
import NewProducts from "./pages/NewProducts";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <AllProducts /> },
      { path: "products/new", element: <NewProducts /> },
      { path: "products/:id", element: <ProductDetail /> },
      { path: "carts", element: <MyCart /> },
    ],
  },
]);