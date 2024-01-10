import styles from "./ItemCard.module.css";

export default function ItemCard({ item }) {
  const { name, event, price } = item;

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
            <button>-</button>
            <div>0</div>
            <button>+</button>
          </div>
          <div>{price}원</div>
        </div>
      </div>
    </div>
  );
}
