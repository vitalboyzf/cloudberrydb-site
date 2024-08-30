import styles from "./index.module.scss";
const config = [
  {
    title: "Want to Contribute?",
    content: `There are many ways to contribute to Cloudberry Database, and you can
          easily find the ones that suit your skills and interests to begin your
          contribution journey.`,
  },
  {
    icon: "/img/home/wtc.svg",
    title: "Get support",
    content:
      "We are always here to help and provide support whenever you need it.",
  },
];
export default function WantToContribute() {
  return (
    <div className={styles.WantToContribute}>
      {config.map((item, index) => {
        return (
          <div className={styles.item} key={index}>
            {item.icon ? (
              <div className="icon">
                <img src={item.icon} alt="" />
              </div>
            ) : null}
            <div className={styles.title}>{item.title}</div>
            <div className={styles.content}>{item.content}</div>
          </div>
        );
      })}
    </div>
  );
}
