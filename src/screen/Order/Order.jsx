import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import OrderBox from "../../components/OrderBox/OrderBox";

import styles from "./Order.module.css";

export default function Order() {
  return (
    <section className={styles.container}>
      <Header />
      <List />
      <OrderBox />
    </section>
  );
}
