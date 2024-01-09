import "./App.css";
import { useRecoilValue } from "recoil";
import { cartState } from "./recoil/atoms/cartState";
import Home from "./screen/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  const cart = useRecoilValue(cartState);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<div>order</div>} />
      <Route path="/complete" element={<div>성공</div>} />
      <Route path="/error" element={<div>에러</div>} />
      <Route path="*" element={<div>유효하지않은 경로</div>} />
    </Routes>
  );
}

export default App;
