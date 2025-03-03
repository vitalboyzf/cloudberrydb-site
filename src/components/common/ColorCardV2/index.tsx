import clsx from "clsx";
import BreadCrumbs from "../Breadcrumbs";
import styles from "./styles.module.scss";
interface IProps {
  titleText: string;
  subText: string;
  bgImage?: string;
  className?: string;
}
export default function ColorCard(props: IProps) {
  return (
    // {/* </ColorHeader> */} // <ColorHeader bgImg={props.bgImage}>
    <div className={styles.container}>
      <div className={clsx(styles.main, props.className)}>
        <BreadCrumbs style={{ marginTop: 15 }} />
        <div className={styles.content}>
          <div className={styles.bigText}>{props.titleText}</div>
          <div className={styles.smallText}>{props.subText}</div>
        </div>
      </div>
    </div>
  );
}
