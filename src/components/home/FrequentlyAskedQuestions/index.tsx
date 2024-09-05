import styles from "./index.module.scss";
const itemsConfig = [
  {
    title: "Can I use the Cloudberry Database for commercial purposes?",
    content:
      "Cloudberry Database is open-source under Apache License V2.0, which permits commercial use, as long as following the license agreement.",
  },
  {
    title: "What's the product plan for the Cloudberry Database?",
    content: "You can check our Roadmap 2024 document to see all the details.",
  },
  {
    title:
      "What's the difference between Cloudberry Database and Greenplum Database?",
    content: (
      <>
        Though Cloudberry Database takes the Greenplum Database 7 as its code
        base, Cloudberry Database has a newer solid PostgreSQL kernel built-in
        and has more features. You can check the [docs](
        <a
          className="active-color"
          href="https://cloudberrydb.org/docs/cbdb-vs-gp-features"
        >
          https://cloudberrydb.org/docs/cbdb-vs-gp-features
        </a>
        ) for details.
      </>
    ),
  },
  {
    title:
      "Can I use Cloudberry Database to replace our existing Greenplum Database clusters?",
    content:
      "Sure. You can migrate from the Greenplum Database to the Cloudberry Database with no big changes.;",
  },
  {
    title: "How can I contribute to the Cloudberry Database?",
    content: (
      <>
        We welcome contributions from anyone, new and experienced! Welcome to
        read our [contribution guide](
        <a className="active-color" href="https://cloudberrydb.org/contribute">
          https://cloudberrydb.org/contribute
        </a>
        ) to learn more.
      </>
    ),
  },
];
export default function frequentlyAskedQuestions() {
  return (
    <div className={styles.frequentlyAskedQuestions}>
      <div className={styles.highTitle}>
        <div>Frequently</div>
        <div>asked questions</div>
      </div>
      <div className={styles.contentList}>
        {itemsConfig.map((item, index) => (
          <div className={styles.item} key={index}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.content}>{item.content}</div>
            {/* <hr /> */}
            <div className={styles.bottomLine}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
