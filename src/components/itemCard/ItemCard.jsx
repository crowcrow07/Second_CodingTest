import styles from "./ItemCard.module.css";

export default function ItemCard(props) {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.itemImage} />
      <div className={styles.itemInfo}>
        <div className={styles.title}>
          <div>제목</div>
          <div>이벤트</div>
        </div>
        <div className={styles.remote}>
          <div>
            <button>-</button>
            <div>999</div>
            <button>+</button>
          </div>
          <div>100,000원</div>
        </div>
      </div>
    </div>
  );
}
