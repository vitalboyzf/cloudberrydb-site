const config = [
  {
    title: "Slack",
    icon: "/img/home/links/slack.svg",
    desc: "Global channels for community members.",
    link: "https://communityinviter.com/apps/cloudberrydb/welcome",
  },
  {
    title: "LinkedIn",
    icon: "/img/home/links/linked.svg",
    desc: "Follow us on LinkedIn",
    link: "https://www.linkedin.com/company/cloudberrydb/",
  },
  {
    title: "Twitter",
    icon: "/img/home/links/twitter.svg",
    desc: 'Follow @cloudberrydb on Twitter("X" now).',
    link: "https://twitter.com/cloudberrydb",
  },
  {
    title: "Youtube",
    icon: "/img/home/links/youtube.svg",
    desc: "Watch the latest videos.",
    link: "https://www.youtube.com/@cloudberrydb",
  },
  {
    title: "Wechat",
    icon: "/img/home/links/wechat.svg",
    desc: "Real-time chat in Mandarin Chinese.",
    link: "/community/wechat",
  },
];
import clsx from "clsx";
import LinkWithBaseUrl from "../../common/LinkWithBaseUrl";
import styles from "./index.module.scss";
export default function SlackWechatTwitterYoutube() {
  return (
    <>
      <div className={styles.content}>
        <div className={clsx(styles.listWrap, "link-wrap")}>
          {config.map((item, index) => (
            <LinkWithBaseUrl
              href={item.link}
              className={styles.item}
              key={index}
            >
              <img src={item.icon} alt="" />
              <div className={styles.itemTitle}>{item.title}</div>
              <div className={styles.itemDesc}>{item.desc}</div>
            </LinkWithBaseUrl>
          ))}
        </div>
        <div className={styles.bg}></div>
      </div>
    </>
  );
}
