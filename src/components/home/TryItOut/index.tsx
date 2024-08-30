const config = [
  {
    title: "Build from source code.",
    content: (
      <>
        <div>
          1. Clone the latest source code. git
          clone https://github.com/cloudberrydb/cloudberrydb.git
        </div>
        <div> 2. Build on your machine.</div>
      </>
    ),
  },
  {
    title: "Create your sandbox.",
    content: (
      <>
        You can also create one sandbox based on the Docker container. Follow
        the [bootcamp](
        <a
          className="active-color"
          href="https://cloudberrydb.org/bootcamp#cloudberrydb-sandbox"
        >
          https://cloudberrydb.org/bootcamp#cloudberrydb-sandbox
        </a>
        ) to set up.
      </>
    ),
  },
];
import styles from "./index.module.scss";

export default function tryItOut() {
  return (
    <div className={styles.tryItOut}>
      <div className={styles.title}>Try it out</div>
      <div className={styles.rectList}>
        {config.map((item, index) => (
          <div className={styles.rectItem} key={index}>
            <div className={styles.itemTitle}>{item.title}</div>
            <div className={styles.itemContent}>{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
