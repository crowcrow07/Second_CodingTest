import { useState } from "react";
import { cartState } from "../../recoil/atoms/cartState";
import { useRecoilState } from "recoil";

import numberToKorean from "../../util/numberToKorean";
import {
  updateCart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../util/cartUtils";

import styles from "./ItemCard.module.css";

const MAX_QUANTITY = 999;
const MIN_QUANTITY = 0;
const DEFAULT_QUANTITY = 1;

export default function ItemCard({ item }) {
  const { id, name, event, price } = item;

  const [itemCount, setItemCount] = useState(0);
  const [cartItem, setCartItem] = useRecoilState(cartState);

  const findItemIndex = () =>
    cartItem.items.findIndex((cartItem) => cartItem.id === id);

  const decreaseCount = () => {
    if (itemCount > MIN_QUANTITY) {
      const itemIndex = findItemIndex();
      const currentQuantity = cartItem.items[itemIndex].quantity;

      if (currentQuantity === DEFAULT_QUANTITY) {
        removeFromCart(setCartItem, itemIndex);
      } else {
        decreaseQuantity(setCartItem, itemIndex);
      }

      updateCart(setCartItem, -1, -price);
      setItemCount((prevCount) => prevCount - 1);
    }
  };

  const increaseCount = () => {
    if (itemCount < MAX_QUANTITY) {
      const itemIndex = findItemIndex();

      if (itemIndex === -1) {
        setCartItem((prev) => ({
          ...prev,
          items: [
            ...prev.items,
            { id, name, event, price, quantity: DEFAULT_QUANTITY },
          ],
        }));
      } else {
        increaseQuantity(setCartItem, itemIndex);
      }

      setItemCount((prevCount) => prevCount + 1);
      updateCart(setCartItem, 1, price);
    }
  };

  return (
    <div className={`${styles.container} ${itemCount && styles.event}`}>
      <div className={styles.itemImage} />
      <div className={styles.itemInfo}>
        <div className={styles.title}>
          <div>{name}</div>
          <div className={!Boolean(event) && styles.none}>이벤트</div>
        </div>
        <div className={styles.remote}>
          <div>
            <button
              disabled={itemCount === MIN_QUANTITY}
              onClick={decreaseCount}
            >
              -
            </button>
            <div>{itemCount}</div>
            <button
              disabled={itemCount === MAX_QUANTITY}
              onClick={increaseCount}
            >
              +
            </button>
          </div>
          <div>{numberToKorean(price)}원</div>
        </div>
      </div>
    </div>
  );
}
