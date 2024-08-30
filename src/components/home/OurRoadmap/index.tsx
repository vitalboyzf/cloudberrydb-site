import Translate from "@docusaurus/Translate";
import clsx from "clsx";
import styles from "./styles.module.scss";

let FEATURE_HIGHLIGHT: {
  icon: string;
  lightIcon?: string;
  darkIcon?: string;
  title: string;
  content: string;
}[] = [
  {
    icon: "/img/home/feature/hesc.png",
    lightIcon: "/img/home/feature/hesc-light.png",
    title: "Streaming Support",
    content:
      "Cloudberry Database is compatible with Greenplum Database, but with a newer PostgreSQL 14.4 kernel and more advanced features Greenplum doesn't support.",
  },
  {
    icon: "/img/home/feature/sac.png",
    lightIcon: "/img/home/feature/sac-light.png",
    title: "AI/ML ",
    content:
      "Inheriting the rich analytical features from PostgreSQL and Greenplum Database, Cloudberry Database leverages them to the data platform, and seamlessly integrates the mainstream ETL and BI tools.",
  },
  {
    icon: "/img/home/feature/cuwmt.png",
    lightIcon: "/img/home/feature/cuwmt-light.png",
    title: "Strong Analytical Capability",
    content:
      "Cloudberry Database has done a lot of work to speed up the query performance, including supporting parallel query execution, aggregation pushdown and supporting RuntimeFilter, and more.",
  },
  {
    icon: "/img/home/feature/p14i.png",
    lightIcon: "/img/home/feature/p14i-light.png",
    title: "Features and Enhancements",
    content:
      "Cloudberry Database has a newer PostgreSQL 14.4 kernel inside to let users enjoy more with the backend global community.",
  },
  {
    icon: "/img/home/feature/mef.png",
    lightIcon: "/img/home/feature/mef-light.png",
    title: "Kernel Upgrade",
    content:
      "Cloudberry Database supports password security policy, transparent data encryption (TDE) and more encryption algorithms besides the AES algorithm.",
  },
  {
    icon: "/img/home/feature/muc.png",
    lightIcon: "/img/home/feature/muc-light.png",
    title: "Utilities and Ecosystem",
    content:
      "Cloudberry Database can be used in different scenarios, including batch processing data warehouse offline, building data warehouse in real-time, and more.",
  },
];

export default function OurRoadmap() {
  const itemListGrid = FEATURE_HIGHLIGHT.slice(0, 6).map((item, i) => {
    return (
      <div
        className={clsx(styles.listItem, styles[`listItem${i + 1}`])}
        key={i}
      >
        <span className={styles.icon}></span>
        <div className={styles.itemTitle}>{item.title}</div>
        {/* <div className={styles.itemContent}>{item.content}</div> */}
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <div className="global-width-center">
        <div className={styles.wrap}>
          <div className={styles.title}>
            <Translate>Our Roadmap</Translate>
            <p className={styles.subTitle}>
              Welcome to join us in shaping the future of Cloudberry Database,
              [check the roadmap details](
              <a
                className="active-color"
                href="https://github.com/orgs/cloudberrydb/discussions/369"
              >
                https://github.com/orgs/cloudberrydb/discussions/369
              </a>
              ).
            </p>
          </div>
          <div className={styles.showList}>{itemListGrid}</div>
        </div>
      </div>
    </div>
  );
}
