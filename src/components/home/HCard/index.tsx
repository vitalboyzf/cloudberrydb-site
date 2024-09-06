import Translate, { translate } from "@docusaurus/Translate";
import { LINKS } from "@site/src/consts/homeContent";
import { useIsMobile } from "@site/src/hooks/useIsMobile";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import LinkWithBaseUrl from "../../common/LinkWithBaseUrl";
import styles from "./styles.module.scss";

export default function HCard() {
  const el = useRef(null);
  const m = translate({ message: "Analytics  AI  Analytics and AI" });
  const [isShowTips, setShowTips] = useState(true);
  // ["Analytics", "AI", "Analytics and AI"]
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: m.split("  "),
      typeSpeed: 100,
      backSpeed: 80,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  const headerDesc = useIsMobile() ? (
    <>
      <div>
        <Translate>Next Generation</Translate>{" "}
        <Translate>Unified Database for</Translate>
      </div>
    </>
  ) : (
    <>
      <div>
        <Translate>Next Generation</Translate>
      </div>
      <div>
        <Translate>Unified Database</Translate>
      </div>
    </>
  );

  const headerTips = isShowTips ? (
    <div className={styles.tipsWrap}>
      <div className={styles.tipsContent}>
        <div className={styles.text}>
          <span>
            If you like Cloudberry Database, give it a star on GitHub!{" "}
          </span>
          <img src="/img/home/hcard/star.svg" alt="" />
        </div>
        <div className={styles.close} onClick={() => setShowTips(false)}>
          <img src="/img/home/hcard/close.svg" alt="" />
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div className={clsx(styles.bannerContainer)}>
      {headerTips}
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.highText}>
            <div className={styles.textWrap}>
              {headerDesc}
              <div>
                <span style={{ color: "#fff" }}>for </span>
                <span className={styles.typewriterText}>
                  <span ref={el}></span>
                </span>
              </div>
            </div>
          </div>
          <div className={clsx(styles.btnWrap, "link-wrap")}>
            <LinkWithBaseUrl to={LINKS.discoverMore}>
              <span className={styles.more}>
                <Translate>Discover More</Translate>
              </span>
            </LinkWithBaseUrl>
            <LinkWithBaseUrl to={LINKS.github}>
              <span className={styles.hub}>
                <Translate>View on Github</Translate>
              </span>
            </LinkWithBaseUrl>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.loopRun}>
            <img
              className={styles.centerCircle}
              src="/img/home/hcard/big-circle.svg"
              alt=""
            />
            <div className={clsx(styles.circle, styles.circle1)}>Advanced</div>
            <div className={clsx(styles.circle, styles.circle3)}>Friendly</div>
            <div className={clsx(styles.circle, styles.circle5)}>Open</div>
          </div>
        </div>
        <div className={styles.bline}></div>
      </div>

      <div className={styles.bottomTips}>
        <div className={styles.tipsContent}>
          <div className={styles.text}>
            February 2024 - Cloudberry Database Community Newsletter
          </div>
        </div>
      </div>

      <div className={styles.leftBox}></div>
      <div className={styles.rightBox}></div>
    </div>
  );
}
