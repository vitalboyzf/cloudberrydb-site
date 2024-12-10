"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[9405],{97330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=n(85893),s=n(11151);const r={title:"Working with Git & GitHub",description:"Before starting, it's important to learn Git and GitHub to effectively contribute and communicate with other members."},o=void 0,d={type:"mdx",permalink:"/contribute/git",source:"@site/src/pages/contribute/git.md",title:"Working with Git & GitHub",description:"Before starting, it's important to learn Git and GitHub to effectively contribute and communicate with other members.",frontMatter:{title:"Working with Git & GitHub",description:"Before starting, it's important to learn Git and GitHub to effectively contribute and communicate with other members."},unlisted:!1},c={},l=[{value:"Get ready for working",id:"get-ready-for-working",level:2},{value:"Step 1: Set up your GitHub.com account",id:"step-1-set-up-your-githubcom-account",level:3},{value:"(Option) Step 2: Configure two-factor authentication",id:"option-step-2-configure-two-factor-authentication",level:3},{value:"Step 3: Install Git",id:"step-3-install-git",level:3},{value:"Step 4: Set your Git name and email",id:"step-4-set-your-git-name-and-email",level:3},{value:"Step 5: Set up your text editor",id:"step-5-set-up-your-text-editor",level:3},{value:"Step 6: Learn about GitHub flow",id:"step-6-learn-about-github-flow",level:3},{value:"Commit Conventions",id:"commit-conventions",level:2},{value:"GitHub Label System",id:"github-label-system",level:2},{value:"GitHub Issues or GitHub Discussions",id:"github-issues-or-github-discussions",level:2},{value:"Advanced Usage in GitHub",id:"advanced-usage-in-github",level:2},{value:"Acronyms and Abbreviations",id:"acronyms-and-abbreviations",level:2},{value:"Learning Materials",id:"learning-materials",level:2}];function a(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Apache Cloudberry (Incubating) is hosted on GitHub. We use GitHub\nIssues as the bug report system, and use Git as our version control\nsystem. Given these, it's important for community users and developers\nto learn how to work well with GitHub and Git."}),"\n",(0,i.jsx)(t.p,{children:"Please note, we do not aim to write one complete guide for Git or\nGitHub on this page, but we list the key points in your future work."}),"\n",(0,i.jsx)(t.h2,{id:"get-ready-for-working",children:"Get ready for working"}),"\n",(0,i.jsx)(t.h3,{id:"step-1-set-up-your-githubcom-account",children:"Step 1: Set up your GitHub.com account"}),"\n",(0,i.jsx)(t.p,{children:"Before we start, it's necessary to have a GitHub account. If not,\nplease create one."}),"\n",(0,i.jsx)(t.p,{children:"Then you need to edit your public GitHub profile, including your name,\navatar, bio, social accounts, etc. to let other people know you."}),"\n",(0,i.jsx)(t.h3,{id:"option-step-2-configure-two-factor-authentication",children:"(Option) Step 2: Configure two-factor authentication"}),"\n",(0,i.jsxs)(t.p,{children:["You can take ",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication",children:"GitHub Document: Configuring two-factor\nauthentication"}),"\nfor reference."]}),"\n",(0,i.jsx)(t.h3,{id:"step-3-install-git",children:"Step 3: Install Git"}),"\n",(0,i.jsxs)(t.p,{children:["If you don't have Git installed, you can download Git at\n",(0,i.jsx)(t.a,{href:"http://www.git-scm.com/",children:"www.git-scm.com"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["If you need additional assistance in installing Git, you can find more\ninformation in ",(0,i.jsx)(t.a,{href:"http://git-scm.com/book/en/v2/Getting-Started-Installing-Git",children:"the ProGit chapter on installing\nGit"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"step-4-set-your-git-name-and-email",children:"Step 4: Set your Git name and email"}),"\n",(0,i.jsx)(t.p,{children:"Run the following commands in the terminal to set your email address\nand your name, which will be visible in your commits of Pull Request:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'git config --global user.email "Your Email"\ngit config --global user.name "Your Name"\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsx)(t.p,{children:"If you are used to working on different laptops, please make sure to\nhave the right email address and name settings."})}),"\n",(0,i.jsx)(t.h3,{id:"step-5-set-up-your-text-editor",children:"Step 5: Set up your text editor"}),"\n",(0,i.jsx)(t.p,{children:"Run the following command to set up your favorite editor, which will\nbe used to open and edit your files with Git:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'git config --global core.editor "vim"\n'})}),"\n",(0,i.jsxs)(t.p,{children:["For more editors, such as ",(0,i.jsx)(t.code,{children:"Visual Studio Code"}),", ",(0,i.jsx)(t.code,{children:"Sublime Text"}),", and\n",(0,i.jsx)(t.code,{children:"TextMate"}),", see the ",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/get-started/getting-started-with-git/associating-text-editors-with-git?platform=mac",children:"GitHub\nDocument"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"step-6-learn-about-github-flow",children:"Step 6: Learn about GitHub flow"}),"\n",(0,i.jsxs)(t.p,{children:["Follow ",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/get-started/quickstart/github-flow",children:"this\ndocument"}),"\nto learn about the GitHub flow, including how to create a branch, make\nchanges, create a pull request, address review comments, and merge the\npull request."]}),"\n",(0,i.jsx)(t.h2,{id:"commit-conventions",children:"Commit Conventions"}),"\n",(0,i.jsxs)(t.p,{children:["We have one ",(0,i.jsx)(t.a,{href:"https://raw.githubusercontent.com/apache/cloudberry/main/.gitmessage",children:"git commit message\ntemplate"}),"\nfor coding contributions. You can download the file and run the\nfollowing command to apply it globally:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"git config --global commit.template .gitmessage\n"})}),"\n",(0,i.jsxs)(t.p,{children:["We have marked the important notes in the above template. For more on\nhow to write a good commit message, you can read this blog:\n",(0,i.jsx)(t.a,{href:"https://cbea.ms/git-commit/",children:"https://cbea.ms/git-commit/"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["Once the commit message template is applied, please use ",(0,i.jsx)(t.code,{children:"git commit"}),"\ninstead of ",(0,i.jsx)(t.code,{children:'git commit -m "CommitMessage..."'})," when committing changes,\nthe latter command cannot edit the message body."]})}),"\n",(0,i.jsxs)(t.p,{children:["If you need to rewrite the most recent commit message, please use ",(0,i.jsx)(t.code,{children:"git commit --amend"})," command, and see more on ",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message",children:"GitHub\nDocumentation"}),",\nbut it doesn't support our customized message template."]}),"\n",(0,i.jsx)(t.h2,{id:"github-label-system",children:"GitHub Label System"}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"Only the member with triage or write access can add or edit the labels\nnow. GitHub Discussions and GitHub Issues use the same label system."})}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Priority"}),(0,i.jsx)("th",{children:"Type"}),(0,i.jsx)("th",{children:"Status"}),(0,i.jsx)("th",{children:"Standard"})]})}),(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)("small",{children:"the urgency of issue or PR"})}),(0,i.jsx)("th",{children:(0,i.jsx)("small",{children:"the type of Issue or PR"})}),(0,i.jsx)("th",{children:(0,i.jsx)("small",{children:"the progress of Issue or PR"})}),(0,i.jsx)("th",{children:(0,i.jsx)("small",{children:"commonly used in most projects"})})]})}),(0,i.jsx)("tbody",{children:(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:[(0,i.jsx)("p",{children:(0,i.jsx)("font",{color:"#e11d21",children:"priority: Urgent"})}),(0,i.jsx)("p",{children:(0,i.jsx)("font",{color:"#eb6420",children:"priority: High"})}),(0,i.jsx)("p",{children:(0,i.jsx)("font",{color:"#fbca04",children:"priority: Medium"})}),(0,i.jsx)("p",{children:(0,i.jsx)("font",{color:"#009800",children:"priority: Low"})})]}),(0,i.jsxs)("td",{children:[(0,i.jsx)("p",{children:(0,i.jsx)("font",{color:"#9F2F92",children:"type: Announcement"})}),(0,i.jsx)("p",{children:(0,i.jsx)("font",{color:"#7249B1",children:"type: Proposal"})}),(0,i.jsx)("p",{children:(0,i.jsx)("font",{color:"#a2eeef",children:"type: Enhancement"})}),(0,i.jsx)("p",{children:(0,i.jsx)("font",{color:"#d876e3",children:"type: Question"})}),(0,i.jsx)("p",{children:(0,i.jsx)("font",{color:"#0075ca",children:"type: Documentation"})}),(0,i.jsx)("p",{children:(0,i.jsx)("font",{color:"#e11d21",children:"type: Bug"})}),(0,i.jsx)("p",{children:(0,i.jsx)("font",{color:"#9FC06D",children:"type: Refactoring"})}),(0,i.jsx)("p",{children:(0,i.jsx)("font",{color:"#0ADB95",children:"type: Testing"})}),(0,i.jsx)("p",{children:(0,i.jsx)("font",{color:"#E99695",children:"type: Security"})}),(0,i.jsx)("p",{children:(0,i.jsx)("font",{color:"#C81E1F",children:"type: Backport"})}),(0,i.jsx)("p",{children:(0,i.jsx)("font",{color:"#32A62D",children:"type: Pipeline"})})]}),(0,i.jsxs)("td",{children:[(0,i.jsx)("p",{children:(0,i.jsx)("font",{color:"#e99695",children:"status: Await triage"})}),(0,i.jsx)("p",{children:(0,i.jsx)("font",{color:"#0E8A16",children:"status: In Progress"})}),(0,i.jsx)("p",{children:(0,i.jsx)("font",{color:"#000000",children:"status: Not planned"})}),(0,i.jsx)("p",{children:(0,i.jsx)("font",{color:"#18B59A",children:"status: Completed"})})]}),(0,i.jsxs)("td",{children:[(0,i.jsx)("p",{children:(0,i.jsx)("font",{color:"#008672",children:"help wanted"})}),(0,i.jsx)("p",{children:(0,i.jsx)("font",{color:"#7057ff",children:"good first issue"})})]})]})})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Description of the labels:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"#Priority\n    priority: Urgent - This should be dealt with ASAP. Not fixing this issue would be a serious error.\n    priority: High - After critical issues are fixed, these should be dealt with before any further issues.\n    priority: Medium - This issue may be useful, and needs some attention.\n    priority: Low - This issue can probably be picked up by anyone looking to contribute to the project, as an entry fix\n\n#Type\n    type: Announcement - New Release, Events, Blog and more\n    type: Proposal - Proposals of major changes to Apache Cloudberry\n    type: Enhancement - New feature or request, ideas\n    type: Question - Ask the community for help\n    type: Documentation - Improvements or additions to documentation\n    type: Bug - Something isn't working\n    type: Refactoring - A code change that neither fixes a bug nor adds a feature\n    type: Testing - Adding missing tests or correcting existing tests\n    type: Security - Vulnerability disclosure or Fixing security issue\n    type: Backport - Backport compitable related issues or PRs\n    type: Pipeline - CICD and development pipeline\n\n#Status\n    status: Await triage - This issue needs triage.\n    status: In Progress - This issue is being worked on, and has someone assigned.\n    status: Not planned - Including Duplicate, Invalid and wontfix issues.\n    status: Completed - This label means issues are done, closed, fixed or resovled.\n\n#Standard\n    help wanted - Extra attention is needed\n    good first issue - Good for newcomers\n"})}),"\n",(0,i.jsxs)(t.p,{children:["If you add new labels, please follow the format ",(0,i.jsx)(t.code,{children:"prefix-name: type"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"github-issues-or-github-discussions",children:"GitHub Issues or GitHub Discussions"}),"\n",(0,i.jsx)(t.p,{children:"We use GitHub Issues as a bug report system and work tracking, use\nGitHub Discussions for asking questions and answering, share ideas for\nnew features, and share proposals for Apache Cloudberry."}),"\n",(0,i.jsxs)(t.p,{children:["If you find problems and issues with code in Apache Cloudberry core,\nwelcome to report to ",(0,i.jsx)(t.a,{href:"https://github.com/apache/cloudberry/issues/new/choose",children:"GitHub\nIssues"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["If you want to ask for help, answer questions, share your new ideas\nfor features, and get feedback for your proposal, please ",(0,i.jsx)(t.a,{href:"https://github.com/apache/cloudberry/discussions/new/choose",children:"create new\ndiscussions"}),"\ndirectly."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"GitHub Discussion Categories"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Announcements"}),(0,i.jsxs)(t.td,{children:["New Release, events, blog and more (",(0,i.jsx)(t.em,{children:"Only maintainers can post"}),")"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Ideas / Feature Requests"}),(0,i.jsx)(t.td,{children:"Share ideas for new features"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Proposal"}),(0,i.jsx)(t.td,{children:"Share proposals of major changes to Apache Cloudberry"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Q&A"}),(0,i.jsx)(t.td,{children:"Ask the community for help"})]})]})]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Read GitHub blog '",(0,i.jsx)(t.a,{href:"https://resources.github.com/devops/process/planning/discussions/",children:"What is GitHub Discussions? A complete\nguide"}),"'\nto learn more."]})}),"\n",(0,i.jsx)(t.h2,{id:"advanced-usage-in-github",children:"Advanced Usage in GitHub"}),"\n",(0,i.jsxs)(t.p,{children:["In addition to the plain text and ",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax",children:"basic writing and formatting\nsyntax"}),",\nwe can use more formats to communicate clearly in the GitHub pull\nrequests, issues and comments, such as\n",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables",children:"tables"}),",\n",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams",children:"diagrams"}),",\n",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists",children:"task\nlists"}),"\nand more, please refer to ",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting",children:"GitHub\nDocumentation"}),"\nfor details."]}),"\n",(0,i.jsx)(t.h2,{id:"acronyms-and-abbreviations",children:"Acronyms and Abbreviations"}),"\n",(0,i.jsx)(t.p,{children:"We often use some acronyms and abbreviations for the code review, and\ncomments in our daily GitHub communications. We collect some popular\nwords to help you leverage them as part of an effective code review\nprocess in the Apache Cloudberry community."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"****"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"****"}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"+1/++1"}),(0,i.jsx)(t.td,{children:"Yes, agreed, accepted, approved"}),(0,i.jsx)(t.td,{children:"-1"}),(0,i.jsx)(t.td,{children:"No, rejected, disagreed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AFAICT"}),(0,i.jsx)(t.td,{children:"As far as I can tell"}),(0,i.jsx)(t.td,{children:"AKA"}),(0,i.jsx)(t.td,{children:"Also known as"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AFAIK"}),(0,i.jsx)(t.td,{children:"As far as I know"}),(0,i.jsx)(t.td,{children:"ASAP"}),(0,i.jsx)(t.td,{children:"As soon as possible"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ATM"}),(0,i.jsx)(t.td,{children:"At the moment"}),(0,i.jsx)(t.td,{children:"BTW"}),(0,i.jsx)(t.td,{children:"By the way"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"CUZ/COS"}),(0,i.jsx)(t.td,{children:"Because"}),(0,i.jsx)(t.td,{children:"DIY"}),(0,i.jsx)(t.td,{children:"Do it yourself"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"DM"}),(0,i.jsx)(t.td,{children:"Direct message"}),(0,i.jsx)(t.td,{children:"DNM"}),(0,i.jsx)(t.td,{children:"Do not merge"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"DRY"}),(0,i.jsx)(t.td,{children:"Don't repeat yourself"}),(0,i.jsx)(t.td,{children:"FYI"}),(0,i.jsx)(t.td,{children:"For your information"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"IANAL"}),(0,i.jsx)(t.td,{children:"I am not a lawyer"}),(0,i.jsx)(t.td,{children:"ICYMI"}),(0,i.jsx)(t.td,{children:"In case you missed it"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"IIRC"}),(0,i.jsx)(t.td,{children:"If I recall correctly"}),(0,i.jsx)(t.td,{children:"IMHO"}),(0,i.jsx)(t.td,{children:"In my humble opinion"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"IMO"}),(0,i.jsx)(t.td,{children:"In my opinion"}),(0,i.jsx)(t.td,{children:"ITT"}),(0,i.jsx)(t.td,{children:"In this thread"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"IOW"}),(0,i.jsx)(t.td,{children:"In other words"}),(0,i.jsx)(t.td,{children:"w/o"}),(0,i.jsx)(t.td,{children:"Without"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"LGTM"}),(0,i.jsx)(t.td,{children:"Looks good to me"}),(0,i.jsx)(t.td,{children:"LGT1"}),(0,i.jsx)(t.td,{children:"Looks good to 1"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"LGT2"}),(0,i.jsx)(t.td,{children:"Looks good to 2"}),(0,i.jsx)(t.td,{children:"NP"}),(0,i.jsx)(t.td,{children:"No Problem"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"PLZ"}),(0,i.jsx)(t.td,{children:"Please"}),(0,i.jsx)(t.td,{children:"PTAL"}),(0,i.jsx)(t.td,{children:"Please take a look"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RFC"}),(0,i.jsx)(t.td,{children:"Request for comments"}),(0,i.jsx)(t.td,{children:"RTFM"}),(0,i.jsx)(t.td,{children:"Read the f*****g manual"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SGTM"}),(0,i.jsx)(t.td,{children:"Sounds good to me"}),(0,i.jsx)(t.td,{children:"TBD"}),(0,i.jsx)(t.td,{children:"To Be defined/done/discussed/determined"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TBR"}),(0,i.jsx)(t.td,{children:"To be reviewed"}),(0,i.jsx)(t.td,{children:"TL;DR"}),(0,i.jsx)(t.td,{children:"Too Long; Didn't Read"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TYSM"}),(0,i.jsx)(t.td,{children:"Thank you so much"}),(0,i.jsx)(t.td,{children:"TTYL"}),(0,i.jsx)(t.td,{children:"Talk to you later"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TYVM"}),(0,i.jsx)(t.td,{children:"Thank you very much"}),(0,i.jsx)(t.td,{children:"WDYT"}),(0,i.jsx)(t.td,{children:"What do you think"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"WIP"}),(0,i.jsx)(t.td,{children:"Work in progress"}),(0,i.jsx)(t.td,{children:"w/"}),(0,i.jsx)(t.td,{children:"With"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"learning-materials",children:"Learning Materials"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://training.github.com/downloads/github-git-cheat-sheet/",children:"Git Cheat Sheet"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.git-scm.com/doc",children:"Git Document"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>o});var i=n(67294);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);