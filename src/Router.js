import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AllProducts from "./pages/AllProducts";
import Home from "./pages/Home";
import MenProducts from "./pages/MenProducts";
import MyCart from "./pages/MyCart";
import NewProducts from "./pages/NewProducts";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import ProtectedRoute from "./pages/ProtectedRoute";
import WomenProducts from "./pages/WomenProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <AllProducts /> },
      { path: "products/men", element: <MenProducts /> },
      { path: "products/women", element: <WomenProducts /> },
      {
        path: "products/new",
        element: (
          <ProtectedRoute requireAdmin>
            <NewProducts />
          </ProtectedRoute>
        ),
      },
      { path: "products/:id", element: <ProductDetail /> },
      {
        path: "carts",
        element: (
          <ProtectedRoute>
            <MyCart />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
