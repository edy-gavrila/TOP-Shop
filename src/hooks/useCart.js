import { useState } from "react";

function useCart() {
  const [cart, setCart] = useState({ total: 0, items: [], itemCount: 0 });

  const addItemToCart = (item) => {
    const { id: itemId } = item;
    const currentCart = { ...cart };

    const itemIndexInCart = currentCart.items.findIndex(
      (item) => item.product.id === itemId
    );

    if (itemIndexInCart > -1) {
      currentCart.items[itemIndexInCart].quantity++;
    } else {
      currentCart.items.push({ product: item, quantity: 1 });
    }

    const itemPrice = Number.parseFloat(item.price.replace(/,/g, ""));
    currentCart.total += itemPrice;

    currentCart.itemCount++;

    setCart(currentCart);
  };

  const removeItemFromCart = (item) => {
    const { id: itemId } = item;
    const currentCart = { ...cart };

    const itemIndexInCart = currentCart.items.findIndex(
      (item) => item.product.id === itemId
    );

    if (itemIndexInCart < 0) {
      return;
    } else {
      if (currentCart.items[itemIndexInCart].quantity > 1) {
        currentCart.items[itemIndexInCart].quantity--;
      } else {
        currentCart.items.splice(itemIndexInCart, 1);
      }

      const itemPrice = Number.parseFloat(item.price.replace(/,/g, ""));
      currentCart.total -= itemPrice;

      currentCart.itemCount--;

      setCart(currentCart);
    }
  };

  const dispatch = (action) => {
    const { type, value } = action;
    switch (type) {
      case "add":
        addItemToCart(value);
        break;
      case "remove":
        removeItemFromCart(value);
        break;
      default:
    }
  };
  return [cart, dispatch];
}

export default useCart;
