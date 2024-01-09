import Header from "../../components/Header/Header";
import List from "../../components/List/List";

import styles from "./Order.module.css";

export default function Order() {
  return (
    <section className={styles.container}>
      <Header />
      <List />
      <div>푸터</div>
    </section>
  );
}
