import styles from "./Result.module.css";

export default function Result({ url = null, firstRow = "", secondRow = "" }) {
  return (
    <div className={styles.container}>
      <img className={!url && styles.none} src={url} alt="icon" />
      <p>{firstRow}</p>
      <p>{secondRow}</p>
    </div>
  );
}
