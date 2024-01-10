import { useState } from "react";
import styles from "./ItemCard.module.css";

export default function ItemCard({ item }) {
  const { name, event, price } = item;

  const [itemCount, setItemCount] = useState(0);

  const decreaseCount = () => {
    setItemCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  const increaseCount = () => {
    setItemCount((prevCount) => Math.min(prevCount + 1, 999));
  };

  return (
    <div className={`${styles.container}`}>
      <div className={styles.itemImage} />
      <div className={styles.itemInfo}>
        <div className={styles.title}>
          <div>{name}</div>
          <div className={!Boolean(event) && styles.none}>이벤트</div>
        </div>
        <div className={styles.remote}>
          <div>
            <button onClick={decreaseCount}>-</button>
            <div>{itemCount}</div>
            <button onClick={increaseCount}>+</button>
          </div>
          <div>{price}원</div>
        </div>
      </div>
    </div>
  );
}
