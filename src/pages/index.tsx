import CommonLayout from "../components/common/Layout";
import BlogPosts from "../components/home/BlogPosts";
import FrequentlyAskedQuestions from "../components/home/FrequentlyAskedQuestions";
import HCard from "../components/home/HCard";
import JoinCommunity from "../components/home/JoinCommunity";
import styles from '../css/pages/home.module.scss'
import TryItOut from "../components/home/TryItOut";
import SlackWechatTwitterYoutube from "../components/home/SlackWechatTwitterYoutube";
import WantToContribute from "../components/home/WantToContribute";
import MeetTheCommunity from "../components/home/MeetTheCommunity";
import OurRoadmap from "../components/home/OurRoadmap";
import OpenFriendlyAdvanced from "../components/home/OpenFriendlyAdvanced";
export default function Home(): JSX.Element {
  console.log('run');
  return (
    <CommonLayout>
      <HCard />
      <div className={styles.homeContentContainer}>
        <OpenFriendlyAdvanced />
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
    </CommonLayout>
  );
}
