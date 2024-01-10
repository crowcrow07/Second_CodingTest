import ItemCard from "../itemCard/ItemCard";

import styles from "./List.module.css";

export default function List({ data }) {
  return (
    <main className={styles.container}>
      <div className={styles.scroll}>
        {data.map((item) => {
          return <ItemCard key={item.id} item={item} />;
        })}
      </div>
    </main>
  );
}
