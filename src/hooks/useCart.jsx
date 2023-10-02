import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getCart as fetchCarts,
  updateCart as fetchUpdateCart,
  removeCart as fetchRemoveCart,
} from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  const cartQuery = useQuery(["carts", uid || ""], () => fetchCarts(uid), {
    enabled: !!uid, // uid가 있을경우에만 해당 쿼리가 수행되도록
  });

  const updateCart = useMutation((product) => fetchUpdateCart(uid, product), {
    onSuccess: () => queryClient.invalidateQueries(["carts", uid]),
  });

  const removeCart = useMutation(
    (productId) => {
      console.log(productId);
      fetchRemoveCart(uid, productId);
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["carts", uid]),
    }
  );

  return { cartQuery, updateCart, removeCart };
}
