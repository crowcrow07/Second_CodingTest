import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import { cartState } from "../../recoil/atoms/cartState";

import styles from "./Result.module.css";

export default function Result({ info }) {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(100);
  const resetCartState = useResetRecoilState(cartState);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      resetCartState();
      navigate("/order");
    }, 3000);

    const interval = setInterval(() => {
      setProgress((prevProgress) => Math.max(0, prevProgress - 1));
    }, 30);

    return () => {
      clearInterval(interval);
      clearTimeout(redirectTimer);
    };
  }, [navigate, resetCartState]);
  return (
    <div className={styles.container}>
      <img className={!info.url && styles.none} src={info.url} alt="icon" />
      <p>{info.firstRow}</p>
      <p>{info.secondRow}</p>
      <progress value={progress} max="100" />
    </div>
  );
}
