import logo from "../../asset/images/logo-black.svg";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" />
      </div>
      <button>주문하러 가기</button>
    </section>
  );
}
