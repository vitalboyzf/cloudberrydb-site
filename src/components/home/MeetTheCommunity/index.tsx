import clsx from "clsx";
import styles from "./index.module.scss";
export default function MeetTheCommunity() {
  return (
    <div className={styles.meetTheCommunity}>
      <div className={styles.bgImg}></div>
      <div className={styles.title}>
        <p>Meet the</p>
        <p>community</p>
      </div>
      <div className={clsx(styles.item, styles.commits)}>
        <div className={styles.num}>69625</div>
        <div className={styles.desc}>COMMITS</div>
      </div>
      <div className={clsx(styles.item, styles.contributors)}>
        <div className={styles.num}>216</div>
        <div className={styles.desc}>CONTRIBUTORS</div>
      </div>
    </div>
  );
}
