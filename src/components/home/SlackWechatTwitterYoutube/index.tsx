const config = [
  {
    title: "Slack",
    icon: "/img/home/slackWechat/slack.svg",
    desc: "Global channels for community members.",
  },
  {
    title: "Wechat",
    icon: "/img/home/slackWechat/wechat.svg",
    desc: "Real-time chat in Mandarin Chinese.",
  },
  {
    title: "Twitter",
    icon: "/img/home/slackWechat/twitter.svg",
    desc: 'Follow @cloudberrydb on Twitter("X" now).',
  },
  {
    title: "Youtube",
    icon: "/img/home/slackWechat/youtube.svg",
    desc: "Watch the latest videos.",
  },
];
import styles from "./index.module.scss";
export default function SlackWechatTwitterYoutube() {
  return (
    <>
      <div className={styles.title}>
        Cloudberry Database has a growing open source community, with
        contributors from around the globe building features, documentation, and
        assisting other users. 
      </div>
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
