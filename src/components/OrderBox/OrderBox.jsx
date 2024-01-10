import styles from "./OrderBox.module.css";

export default function OrderBox() {
  return (
    <div className={styles.container}>
      <div className={styles.totalInfo}>
        <p>
          <span>총 수량 : </span>
          <span>{11000}개</span>
        </p>
        <p>
          <span>총 가격 : </span>
          <span>{"9999만 9999"}원</span>
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <button disabled={false}>주문하기</button>
      </div>
    </div>
  );
}
