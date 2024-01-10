import { Routes, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";

import Home from "./screen/Home/Home";
import Order from "./screen/Order/Order";

import styles from "./App.module.css";

import { cartState } from "./recoil/atoms/cartState";

function App() {
  const cart = useRecoilValue(cartState);

  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/complete" element={<div>성공</div>} />
        <Route path="/error" element={<div>에러</div>} />
        <Route path="*" element={<div>유효하지않은 경로</div>} />
      </Routes>
    </div>
  );
}

export default App;
