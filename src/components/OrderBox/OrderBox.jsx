import { cartState } from "../../recoil/atoms/cartState";
import { useRecoilValue } from "recoil";

import styles from "./OrderBox.module.css";

export default function OrderBox({ isPending }) {
  const cartItem = useRecoilValue(cartState);

  return (
    <div className={styles.container}>
      <div className={styles.totalInfo}>
        <p>
          <span>총 수량 : </span>
          <span>{cartItem.totalAmount}개</span>
        </p>
        <p>
          <span>총 가격 : </span>
          <span>{cartItem.totalPrice}원</span>
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <button disabled={isPending || !cartItem.totalAmount}>주문하기</button>
      </div>
    </div>
  );
}
