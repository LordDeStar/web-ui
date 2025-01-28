import styles from './styles/index.module.scss';

export const App = () => {
  return (
    <div>
      <div className={`${styles.btn} ${styles.lg}`}>large</div>
      <br />
      <div className={`${styles.btn} ${styles.md}`}>medium</div>
      <br />
      <div className={`${styles.btn} ${styles.sm}`}>small</div>

    </div>
  );
}