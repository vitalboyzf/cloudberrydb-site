const config = [
  {
    title: "Slack",
    icon: "/img/home/links/slack.svg",
    desc: "Global channels for community members.",
  },
  {
    title: "LinkedIn",
    icon: "/img/home/links/linked.svg",
    desc: "Follow us on LinkedIn",
  },
  {
    title: "Twitter",
    icon: "/img/home/links/twitter.svg",
    desc: 'Follow @cloudberrydb on Twitter("X" now).',
  },
  {
    title: "Youtube",
    icon: "/img/home/links/youtube.svg",
    desc: "Watch the latest videos.",
  },
  {
    title: "Wechat",
    icon: "/img/home/links/wechat.svg",
    desc: "Real-time chat in Mandarin Chinese.",
  },
];
import styles from "./index.module.scss";
export default function SlackWechatTwitterYoutube() {
  return (
    <>
      <div className={styles.content}>
        {config.map((item, index) => (
          <div className={styles.item} key={index}>
            <img src={item.icon} alt="" />
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}
