import "./App.css";
import { useRecoilValue } from "recoil";
import { cartState } from "./recoil/atoms/cartState";

function App() {
  const cart = useRecoilValue(cartState);

  return <div className="App"></div>;
}

export default App;
