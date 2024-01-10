import { useState } from "react";
import { cartState } from "../../recoil/atoms/cartState";
import { useSetRecoilState } from "recoil";

import styles from "./ItemCard.module.css";

export default function ItemCard({ item }) {
  const { name, event, price } = item;

  const [itemCount, setItemCount] = useState(0);
  const setCartState = useSetRecoilState(cartState);

  const updateCart = (amount, totalPrice) => {
    setCartState((prev) => ({
      ...prev,
      totalAmount: prev.totalAmount + amount,
      totalPrice: prev.totalPrice + totalPrice,
    }));
  };

  const decreaseCount = () => {
    if (itemCount > 0) {
      setItemCount((prevCount) => prevCount - 1);
      updateCart(-1, -price);
    }
  };

  const increaseCount = () => {
    if (itemCount < 999) {
      setItemCount((prevCount) => prevCount + 1);
      updateCart(1, price);
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
            <button disabled={itemCount === 0} onClick={decreaseCount}>
              -
            </button>
            <div>{itemCount}</div>
            <button disabled={itemCount === 999} onClick={increaseCount}>
              +
            </button>
          </div>
          <div>{price}원</div>
        </div>
      </div>
    </div>
  );
}
