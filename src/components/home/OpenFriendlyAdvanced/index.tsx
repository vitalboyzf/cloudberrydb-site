import clsx from "clsx";
import styles from "./styles.module.scss";
import cbdbCircleImg from "/img/home/cbdb-circle.png";

export default function OpenFriendlyAdvanced() {
  const infoConfig = [
    {
      key: "open",
      title: "Open",
      content:
        "Cloudberry Database is open source. Everyone can access the code, and users are welcome to suggest improvements, report issues and share their ideas. Everyone can join to shape its future.",
    },
    {
      key: "friendly",
      title: "Friendly",
      content:
        "Cloudberry Database focuses on your experience, including building, running, operation, maintenance, and ecosystem integration. Help accelerate your data workloads with ease.",
    },
    {
      key: "advanced",
      title: "Advanced",
      content:
        "Cloudberry Database evolves quickly to ship the latest stable and creative database technology to convert features to be productive.",
    },
  ];
  return (
    <div className={clsx(styles.wrap)}>
      <div className="global-width-center">
        <div className={styles.circle}>
          <img src={cbdbCircleImg} alt="" />
        </div>
        <div className={styles.textContent}>
          {infoConfig.map((item) => {
            return (
              <div className={clsx(styles.info, styles[item.key])}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.content}>{item.content}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
