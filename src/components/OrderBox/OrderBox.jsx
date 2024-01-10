import { useMutation } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import { convertCartState } from "../../recoil/selectors/convertCartState";
import { cartState } from "../../recoil/atoms/cartState";
import { useNavigate } from "react-router-dom";

import { postData } from "../../api/postData";

import styles from "./OrderBox.module.css";

export default function OrderBox({ isPending }) {
  const cartItem = useRecoilValue(convertCartState);
  const orderData = useRecoilValue(cartState);

  const navigate = useNavigate();

  const orderMutation = useMutation({
    mutationFn: () => postData(orderData.items),
    onSuccess: () => {
      navigate("/complete");
    },
    onError: () => {
      navigate("/error");
    },
  });

  const orderButtonHandler = () => {
    orderMutation.mutate(cartItem.items);
  };

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
        <button
          onClick={orderButtonHandler}
          disabled={isPending || !cartItem.totalAmount}
        >
          주문하기
        </button>
      </div>
    </div>
  );
}
