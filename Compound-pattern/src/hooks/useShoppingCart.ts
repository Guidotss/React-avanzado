import { Product, ProductInCart } from "../interfaces";
import { useState } from 'react';

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((prev) => {
      const productInCart: ProductInCart = prev[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;

        return {
          ...prev,
          [product.id]: productInCart,
        };
      }

      // si count es 0, remover el producto del carrito

      const { [product.id]: _, ...rest } = prev;

      return rest;
    });
  };

  return {
    shoppingCart,

    onProductCountChange
  }

};
