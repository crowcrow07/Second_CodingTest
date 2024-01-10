import ItemCard from "../itemCard/ItemCard";

import styles from "./List.module.css";

export default function List() {
  return (
    <main className={styles.container}>
      <div className={styles.scroll}>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </main>
  );
}
