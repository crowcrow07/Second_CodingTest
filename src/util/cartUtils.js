export const updateCart = (setCartItem, amount, totalPrice) => {
  setCartItem((prev) => ({
    ...prev,
    totalAmount: prev.totalAmount + amount,
    totalPrice: prev.totalPrice + totalPrice,
  }));
};

export const removeFromCart = (setCartItem, itemIndex) => {
  setCartItem((prev) => ({
    ...prev,
    items: prev.items.filter((cartItem, index) => index !== itemIndex),
  }));
};

export const decreaseQuantity = (setCartItem, itemIndex) => {
  setCartItem((prev) => {
    const updatedItems = [...prev.items];
    updatedItems[itemIndex] = {
      ...updatedItems[itemIndex],
      quantity: updatedItems[itemIndex].quantity - 1,
    };
    return { ...prev, items: updatedItems };
  });
};

export const increaseQuantity = (setCartItem, itemIndex) => {
  setCartItem((prev) => {
    const updatedItems = [...prev.items];
    updatedItems[itemIndex] = {
      ...updatedItems[itemIndex],
      quantity: updatedItems[itemIndex].quantity + 1,
    };
    return { ...prev, items: updatedItems };
  });
};
