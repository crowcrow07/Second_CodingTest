import { Routes, Route } from "react-router-dom";

import Home from "./screen/Home/Home";
import Order from "./screen/Order/Order";
import Result from "./screen/Result/Result";

import check from "./asset/images/CheckFilled.svg";
import styles from "./App.module.css";

const complete = {
  url: check,
  firstRow: "주문이 완료되었습니다.",
  secondRow: "",
};
const error = {
  url: null,
  firstRow: "주문에 실패하였습니다.",
  secondRow: "다시 시도해주세요.",
};

function App() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/complete" element={<Result info={complete} />} />
        <Route path="/error" element={<Result info={error} />} />
        <Route path="*" element={<div>유효하지않은 경로</div>} />
      </Routes>
    </div>
  );
}

export default App;
