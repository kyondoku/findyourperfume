import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getCart as fetchCarts,
  updateCart as fetchUpdateCart,
  removeCart as fetchRemoveCart,
} from "../api/firebase";

export default function useCart() {
  const queryClient = useQueryClient();

  const cartQuery = useQuery(["carts"], fetchCarts, {
    staleTime: 1000 * 60,
  });

  const updateCart = useMutation(
    ({ userId, product }) => fetchUpdateCart(userId, product),
    {
      onSuccess: () => queryClient.invalidateQueries(["carts"]),
    }
  );

  const removeCart = useMutation(
    ({ userId, productId }) => fetchRemoveCart(userId, productId),
    {
      onSuccess: () => queryClient.invalidateQueries(["carts"]),
    }
  );

  return { cartQuery, updateCart, removeCart };
}
