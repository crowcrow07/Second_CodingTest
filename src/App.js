import "./App.css";
import { useRecoilValue } from "recoil";
import { cartState } from "./recoil/atoms/cartState";
import Home from "./screen/Home/Home";

function App() {
  const cart = useRecoilValue(cartState);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
