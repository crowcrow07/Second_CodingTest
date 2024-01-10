import { selector } from "recoil";
import { cartState } from "../atoms/cartState";
import numberToKorean from "../../util/numberToKorean";

export const convertCartState = selector({
  key: "convertCartState",
  get: ({ get }) => {
    const cart = get(cartState);
    const { totalAmount, totalPrice } = cart;
    const convertAmount = numberToKorean(totalAmount);
    const convertPrice = numberToKorean(totalPrice);
    return { totalAmount: convertAmount, totalPrice: convertPrice };
  },
});
