import LinkWithBaseUrl from "../components/common/LinkWithBaseUrl";
import { isZhLangrage } from "../utils";
import DockerSvg from "/img/home/try-it-out/docker.svg";
import SystemSvg from "/img/home/try-it-out/system.svg";

let TIPS_CONTENT = (
  <LinkWithBaseUrl href="https://github.com/cloudberrydb/cloudberrydb">
    <span>If you like Cloudberry Database, give it a star on GitHub! </span>
    <img src="/img/home/hcard/star.svg" alt="" />
  </LinkWithBaseUrl>
);

let OUR_ROADMAP = {
  title: "Our Roadmap",
  subTitle: (
    <>
      <div>
        Welcome to join us in shaping the future of Cloudberry Database,
      </div>
      <a
        className="active-color"
        href="https://github.com/orgs/cloudberrydb/discussions/369"
        target="_blank"
      >
        check the roadmap details{" "}
        <img src="/img/home/our-roadmap/dot-arrow.svg" alt="" />
      </a>
    </>
  ),
  list: [
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
  ],
};

let TRY_IT_OUT = {
  title: "Try it out",
  list: [
    {
      title: "Build from source code.",
      content: (
        <>
          <div>
            1. Clone the latest source code. git clone 
            <LinkWithBaseUrl
              className="active-color"
              href="https://github.com/cloudberrydb/cloudberrydb.git"
            >
              https://github.com/cloudberrydb/cloudberrydb.git
            </LinkWithBaseUrl>
          </div>
          <div> 2. Build on your machine.</div>
        </>
      ),
      img: <DockerSvg />,
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
      img: <SystemSvg />,
    },
  ],
};

let MEET_THE_COMMUNITY = {
  title: (
    <>
      <p>Meet the</p>
      <p>community</p>
    </>
  ),
};

let SLACK_TWITTER_TWITTER_WECHAT = {
  list: [
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
  ],
};

let WANT_TO_CONTRIBUTE = {
  list: [
    {
      title: "Want to Contribute?",
      content: (
        <span>
          There are many ways to contribute to Cloudberry Database, and you can
          easily find the ones that suit your skills and interests to 
          <LinkWithBaseUrl className={"light-active-color"} href="/contribute">
            begin your contribution
          </LinkWithBaseUrl>
           journey.
        </span>
      ),
    },
    {
      icon: "/img/home/wtc.svg",
      title: "Get support",
      content: (
        <span>
          We are always here to
          <LinkWithBaseUrl className="active-color" href="/support">
            {" "}
            help and provide support{" "}
          </LinkWithBaseUrl>
          whenever you need it.
        </span>
      ),
    },
  ],
};

let FREQUENTLY_ASKED_QUESTIONS = {
  title: (
    <>
      <div>Frequently</div>
      <div>asked questions</div>
    </>
  ),
  list: [
    {
      title: "Can I use the Cloudberry Database for commercial purposes?",
      content:
        "Cloudberry Database is open-source under Apache License V2.0, which permits commercial use, as long as following the license agreement.",
    },
    {
      title: "What's the product plan for the Cloudberry Database?",
      content:
        "You can check our Roadmap 2024 document to see all the details.",
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
          <a
            className="active-color"
            href="https://cloudberrydb.org/contribute"
          >
            https://cloudberrydb.org/contribute
          </a>
          ) to learn more.
        </>
      ),
    },
  ],
};

// zh language
if (isZhLangrage()) {
  TIPS_CONTENT = (
    <LinkWithBaseUrl href="https://github.com/cloudberrydb/cloudberrydb">
      <span>If you like Cloudberry Database, give it a star on GitHub! </span>
      <img src="/img/home/hcard/star.svg" alt="" />
    </LinkWithBaseUrl>
  );

  OUR_ROADMAP = {
    title: "Our Roadmap",
    subTitle: (
      <>
        <div>
          Welcome to join us in shaping the future of Cloudberry Database,
        </div>
        <a
          className="active-color"
          href="https://github.com/orgs/cloudberrydb/discussions/369"
          target="_blank"
        >
          check the roadmap details{" "}
          <img src="/img/home/our-roadmap/dot-arrow.svg" alt="" />
        </a>
      </>
    ),
    list: [
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
    ],
  };

  TRY_IT_OUT = {
    title: "Try it out",
    list: [
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
        img: <DockerSvg />,
      },
      {
        title: "Create your sandbox.",
        content: (
          <>
            You can also create one sandbox based on the Docker container.
            Follow the [bootcamp](
            <a
              className="active-color"
              href="https://cloudberrydb.org/bootcamp#cloudberrydb-sandbox"
            >
              https://cloudberrydb.org/bootcamp#cloudberrydb-sandbox
            </a>
            ) to set up.
          </>
        ),
        img: <SystemSvg />,
      },
    ],
  };

  MEET_THE_COMMUNITY = {
    title: (
      <>
        <p>Meet the</p>
        <p>community</p>
      </>
    ),
  };

  SLACK_TWITTER_TWITTER_WECHAT = {
    list: [
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
    ],
  };

  WANT_TO_CONTRIBUTE = {
    list: [
      {
        title: "Want to Contribute?",
        content: `There are many ways to contribute to Cloudberry Database, and you can
            easily find the ones that suit your skills and interests to begin your
            contribution journey.`,
      },
      {
        icon: "/img/home/wtc.svg",
        title: "Get support",
        content:
          "We are always here to help and provide support whenever you need it.",
      },
    ],
  };

  FREQUENTLY_ASKED_QUESTIONS = {
    title: (
      <>
        <div>Frequently</div>
        <div>asked questions</div>
      </>
    ),
    list: [
      {
        title: "Can I use the Cloudberry Database for commercial purposes?",
        content:
          "Cloudberry Database is open-source under Apache License V2.0, which permits commercial use, as long as following the license agreement.",
      },
      {
        title: "What's the product plan for the Cloudberry Database?",
        content:
          "You can check our Roadmap 2024 document to see all the details.",
      },
      {
        title:
          "What's the difference between Cloudberry Database and Greenplum Database?",
        content: (
          <>
            Though Cloudberry Database takes the Greenplum Database 7 as its
            code base, Cloudberry Database has a newer solid PostgreSQL kernel
            built-in and has more features. You can check the [docs](
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
            We welcome contributions from anyone, new and experienced! Welcome
            to read our [contribution guide](
            <a
              className="active-color"
              href="https://cloudberrydb.org/contribute"
            >
              https://cloudberrydb.org/contribute
            </a>
            ) to learn more.
          </>
        ),
      },
    ],
  };
}

const LINKS = {
  github: "https://github.com/cloudberrydb",
  twitter: "https://twitter.com/cloudberrydb",
  youtube: "https://youtube.com/@cloudberrydb",
  community: "https://communityinviter.com/apps/cloudberrydb/welcome",
  linkedIn: "https://www.linkedin.com/company/cloudberrydb",
  wechat: "/community/wechat",
  discoverMore: "/docs",
};

export {
  FREQUENTLY_ASKED_QUESTIONS,
  LINKS,
  MEET_THE_COMMUNITY,
  OUR_ROADMAP,
  SLACK_TWITTER_TWITTER_WECHAT,
  TIPS_CONTENT,
  TRY_IT_OUT,
  WANT_TO_CONTRIBUTE,
};
