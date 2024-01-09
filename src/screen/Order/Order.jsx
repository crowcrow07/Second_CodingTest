import Header from "../../components/Header/Header";

import styles from "./Order.module.css";

export default function Order() {
  return (
    <section className={styles.container}>
      <Header />
      <div>리스트</div>
      <div>푸터</div>
    </section>
  );
}
