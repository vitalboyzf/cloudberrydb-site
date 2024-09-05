import CommonLayout from "../components/common/Layout";
import FrequentlyAskedQuestions from "../components/home/FrequentlyAskedQuestions";
import HCard from "../components/home/HCard";
import MeetTheCommunity from "../components/home/MeetTheCommunity";
import OpenFriendlyAdvanced from "../components/home/OpenFriendlyAdvanced";
import OurRoadmap from "../components/home/OurRoadmap";
import SlackWechatTwitterYoutube from "../components/home/SlackWechatTwitterYoutube";
import TryItOut from "../components/home/TryItOut";
import WantToContribute from "../components/home/WantToContribute";
import styles from "../css/pages/home.module.scss";
export default function Home(): JSX.Element {
  return (
    <CommonLayout>
      <div className="navbar-home-lighting" style={{ background: "black" }}>
        <HCard />
        <div className={styles.homeContentContainer}>
          {/* <OpenFriendlyAdvanced /> */}
          {/* <FeatureHighlight /> */}
          {/* <WhyCloudberryDatabase /> */}
          {/* <BlogPosts /> */}
          {/* <JoinCommunity /> */}
          <OurRoadmap />
          <TryItOut />
          <MeetTheCommunity />
          <SlackWechatTwitterYoutube />
          <WantToContribute />

          <FrequentlyAskedQuestions />
        </div>
      </div>
    </CommonLayout>
  );
}
