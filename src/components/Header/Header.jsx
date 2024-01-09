import smallLogo from "../../asset/images/smallLogo.svg";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <div>
        <img src={smallLogo} alt="logo" />
      </div>
    </header>
  );
}
