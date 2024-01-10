import { atom } from "recoil";

export const cartState = atom({
  key: "cartState",
  default: { totalAmount: 0, totalPrice: 0, items: [] },
});
