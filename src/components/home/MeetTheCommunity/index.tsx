import { useEffect, useState } from "react";
import getGithubContributors, {
  ContributorItem,
} from "./getGithubContributors";
import styles from "./index.module.scss";
export default function MeetTheCommunity() {
  const [contributors, setContributors] = useState<ContributorItem[]>([]);
  useEffect(() => {
    getGithubContributors().then((c) => {
      console.log(c);
      setContributors(c.slice(0, 119));
    });
  }, []);
  return (
    <div className={styles.meetTheCommunity}>
      <div className={styles.bgImg}></div>
      <div className={styles.title}>
        <p>Meet the</p>
        <p>community</p>
      </div>
      <div className={styles.contributorList}>
        {contributors.map((c) => (
          <div className={styles.contributorItem} key={c.id}>
            <a href={c.htmlURL} target="_blank" rel="noreferrer">
              <img src={c.avatarURL} alt="" />
            </a>
          </div>
        ))}
      </div>
      {/* <div className={clsx(styles.item, styles.commits)}>
        <div className={styles.num}>69625</div>
        <div className={styles.desc}>COMMITS</div>
      </div>
      <div className={clsx(styles.item, styles.contributors)}>
        <div className={styles.num}>216</div>
        <div className={styles.desc}>CONTRIBUTORS</div>
      </div> */}
    </div>
  );
}
