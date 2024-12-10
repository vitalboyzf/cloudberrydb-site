"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[1671],{60307:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>t,metadata:()=>c,toc:()=>h});var r=o(85893),i=o(11151);const t={title:"Code Contribution Guide",description:"Learn the code conventions, contribution workflow, how to review code, and the contributor checklist."},s=void 0,c={type:"mdx",permalink:"/zh/contribute/code",source:"@site/src/pages/contribute/code.md",title:"Code Contribution Guide",description:"Learn the code conventions, contribution workflow, how to review code, and the contributor checklist.",frontMatter:{title:"Code Contribution Guide",description:"Learn the code conventions, contribution workflow, how to review code, and the contributor checklist."},unlisted:!1},l={},h=[{value:"Code of Conduct",id:"code-of-conduct",level:2},{value:"Ready to contribute",id:"ready-to-contribute",level:2},{value:"Code Conventions",id:"code-conventions",level:2},{value:"Source Formatting",id:"source-formatting",level:3},{value:"Error Messages",id:"error-messages",level:3},{value:"Contribution workflow",id:"contribution-workflow",level:2},{value:"Code review",id:"code-review",level:2},{value:"Contributor checklist",id:"contributor-checklist",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"code-of-conduct",children:"Code of Conduct"}),"\n",(0,r.jsxs)(n.p,{children:["Everyone who participates in Apache Cloudberry, either as a user or a\ncontributor, is obliged to follow our ",(0,r.jsx)(n.a,{href:"https://www.apache.org/foundation/policies/conduct",children:"community Code of\nConduct"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"ready-to-contribute",children:"Ready to contribute"}),"\n",(0,r.jsxs)(n.p,{children:["Before starting to contribute, please read the guide ",(0,r.jsx)(n.a,{href:"/contribute/how-to-contribute",children:'"How to\nContribute"'})," and make sure to learn\n",(0,r.jsx)(n.a,{href:"/contribute/git",children:"Git & GitHub"})," well."]}),"\n",(0,r.jsxs)(n.p,{children:["Especially as a new code contributor, don't rush to start. We suggest\nthat you understand our project, read the documentation, learn the\ncode conventions, know how to ",(0,r.jsx)(n.a,{href:"./proposal",children:"write proposals"}),", and\nfamiliarize yourself with the community. Then start small."]}),"\n",(0,r.jsx)(n.p,{children:'You can look for easy issues to fix or small features to add, such as\nthe GitHub Issues with labels \u201cgood first issue\u201d and "help wanted"\nwhich can help you familiarize yourself with the contribution\nworkflow, and for the dev teams to become acquainted with you.'}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Don't import components under GPLv2/3 License or other non-OSI\nlicenses for your code, which will interfere with Cloudberry's Apache\nLicense. If you are not sure, please contact\n",(0,r.jsx)(n.a,{href:"mailto:dev@cloudberry.apache.org",children:"dev@cloudberry.apache.org"}),"."]})}),"\n",(0,r.jsxs)(n.p,{children:["To avoid duplicating work, please review the ",(0,r.jsx)(n.a,{href:"./proposal",children:"Apache Cloudberry\nProposals"})," or ask directly in our Slack before\nyou start work on a non-trivial feature."]}),"\n",(0,r.jsx)(n.h2,{id:"code-conventions",children:"Code Conventions"}),"\n",(0,r.jsxs)(n.p,{children:["Source code should follow the ",(0,r.jsx)(n.a,{href:"https://www.postgresql.org/docs/current/source.html",children:"PostgreSQL coding\nconventions"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"source-formatting",children:"Source Formatting"}),"\n",(0,r.jsxs)(n.p,{children:["This includes ",(0,r.jsx)(n.a,{href:"https://www.postgresql.org/docs/current/source-format.html",children:"source\nformatting"}),"\nwith 4 column tab spacing, layout rules according to the BSD style and\nline length within 80 columns. Though there are many different styles\nin the PostgreSQL codebase we can ",(0,r.jsx)(n.code,{children:"try to make your patch consistent with nearby code"}),"(See discussions in ",(0,r.jsx)(n.a,{href:"https://www.postgresql.org/message-id/16342.1221133325%40sss.pgh.pa.us",children:"PostgreSQL mailing\nlist"}),".)"]}),"\n",(0,r.jsxs)(n.p,{children:["We can use existing configurations for Apache Cloudberry development,\nsuch as\n",(0,r.jsx)(n.a,{href:"https://github.com/apache/cloudberry/blob/main/src/tools/editors/vim.samples",children:"Vim"}),",\n",(0,r.jsx)(n.a,{href:"https://github.com/apache/cloudberry/blob/main/src/tools/editors/emacs.samples",children:"Emacs"}),",\n",(0,r.jsx)(n.a,{href:"https://github.com/apache/cloudberry/blob/main/src/tools/editors/clion.xml",children:"Clion"}),"\nand ",(0,r.jsx)(n.a,{href:"https://github.com/apache/cloudberry/blob/main/.editorconfig",children:"other\neditors"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"error-messages",children:"Error Messages"}),"\n",(0,r.jsxs)(n.p,{children:["Error messages style follows ",(0,r.jsx)(n.a,{href:"https://www.postgresql.org/docs/current/error-style-guide.html",children:"PostgreSQL Error Message Style\nGuide"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"contribution-workflow",children:"Contribution workflow"}),"\n",(0,r.jsxs)(n.p,{children:["The following will describe how to submit your code contribution as\n",(0,r.jsx)(n.code,{children:"Pull Request"})," to Apache Cloudberry. If you still don't know well\nhow to work with Git and GitHub, please read ",(0,r.jsx)(n.a,{href:"./git",children:"our\nguide"})," again."]}),"\n",(0,r.jsx)(n.p,{children:"To contribute to Apache Cloudberry development:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Fork the ",(0,r.jsx)(n.a,{href:"https://github.com/apache/cloudberry",children:"Apache Cloudberry\nrepo"})," to your own GitHub\naccount."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Clone down the repo to your local system."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ git clone https://github.com/your-user-name/cloudberry.git\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Add the upstream repo. (You only have to do this once, not every\ntime.)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ git remote add upstream https://github.com/apache/cloudberry.git\n"})}),"\n",(0,r.jsxs)(n.p,{children:["now, when you run ",(0,r.jsx)(n.code,{children:"git remote -v"})," will show two remote repositories\nnamed:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"upstream"}),", which refers to the 'apache/cloudberry' repository"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"origin"}),", which refers to your personal fork"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create a new branch to hold your work."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ git checkout -b new-branch-name\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Work on your new code. Write and run tests."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Commit your changes. For writing a good commit message, please\nrefer to ",(0,r.jsx)(n.a,{href:"./git#commit-conventions",children:"Commit Conventions"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ git add\n$ git commit\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Push your changes to your GitHub repo."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"git push origin branch-name\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Open a PR(Pull Request)."}),"\n",(0,r.jsx)(n.p,{children:"Go to the Apache Cloudberry repo on GitHub. There will be a message\nabout your recently pushed branch, asking if you would like to open a\npull request. Follow the prompts, compare across repositories, and\nsubmit the PR."}),"\n",(0,r.jsx)(n.p,{children:"For code contributors, don\u2019t rebase your branch orotherwise modify\npublished commits during the code review process, since this can\nremove existing comment history and confuse the reviewers when\nreviewing. When you make a revision, always push it in a new commit."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Get your code reviewed."}),"\n",(0,r.jsxs)(n.p,{children:["Apache Cloudberry maintainers and other contributors will review\nyour PR. Please participate in the conversation, and try to make\nany requested changes. If you get no review comments within two\nweeks, feel free to ask for feedback by ask the ",(0,r.jsx)(n.a,{href:"https://github.com/orgs/apache/teams/cloudberry-committers",children:"cloudberry\ncommitters"}),"\nin your PR comment."]}),"\n",(0,r.jsx)(n.p,{children:"Once the maintainers are happy with your change, they'll approve the\npull request. At this point, the maintainer will take over, possibly\nmake some additional touch ups, and merge your changes into the\ncodebase."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Congratulations! Once your PR is approved by at least 2\nmaintainers with write access, and passes the CI/CD without errors,\nthen the code will be merged. Your code will be shipped in the recent\nfuture releases."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:"Before working on your next contribution, make sure your local\nrepository is up to date:"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Switch to the local main branch."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ git checkout main\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fetch the latest changes from upstream."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ git fetch upstream\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Rebase your codebase to the upstream main branch."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ git rebase upstream/main\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create a new branch if you are starting new work."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ git checkout -b branch-name\n"})}),"\n"]}),"\n"]}),(0,r.jsxs)(n.p,{children:["If you want to update your existing branch with changes from upstream,\nyou need to run ",(0,r.jsx)(n.code,{children:"git checkout branch-name"}),", then rebase your branch on\nupstream main by ",(0,r.jsx)(n.code,{children:"git rebase upstream/main"}),"."]}),(0,r.jsxs)(n.p,{children:["We also want your PR to have a clean commit history, but in the real\nworld, you may have pushed multiple commits into a single pull\nrequest. To ensure a clean merge, please run ",(0,r.jsx)(n.code,{children:"git rebase -i"})," to squash\nyour commits down to 1 commit before the pull request is merged."]}),(0,r.jsx)(n.p,{children:"Learn more:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/",children:"Resolving merge\nconflicts"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch",children:"Keeping your pull request in sync with the base\nbranch"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.github.com/en/get-started/using-git/using-git-rebase-on-the-command-line",children:"Using Git rebase on the command line: Squash, Move, Merge, Split,\nFix your\ncommits"})}),"\n"]})]}),"\n",(0,r.jsx)(n.h2,{id:"code-review",children:"Code review"}),"\n",(0,r.jsx)(n.p,{children:"We encourage anyone to start reviewing code submitted by other\ndevelopers, especially if the feature is something that you are likely\nto use."}),"\n",(0,r.jsx)(n.p,{children:"Here are some questions to keep in mind during the code review\nprocess:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Do we want this in Apache Cloudberry? Is it likely to be used? Do\nyou, as a Apache Cloudberry user, like the change and intend to use\nit? Is this change in the scope of Apache Cloudberry? Will the cost\nof maintaining a new feature be worth its benefits?"}),"\n",(0,r.jsx)(n.li,{children:"Is it too large to review? Does it need to split into multi PR?"}),"\n",(0,r.jsx)(n.li,{children:"If it's a proposal, does it have been accepted and start to code?"}),"\n",(0,r.jsx)(n.li,{children:"Is it duplicated with other existing code contributions in\nCloudberry or commits in upstream projects?"}),"\n",(0,r.jsx)(n.li,{children:"Does it follow our code conventions?"}),"\n",(0,r.jsx)(n.li,{children:"Does it need to have a proposal before getting the code review?"}),"\n",(0,r.jsx)(n.li,{children:"Does the PR have a good commit message following our commit\nconventions?"}),"\n",(0,r.jsx)(n.li,{children:"Does the PR need to rebase to have a clean commit history and be in\nsync with the base branch?"}),"\n",(0,r.jsx)(n.li,{children:"Is the code backward compatible with previous versions?"}),"\n",(0,r.jsx)(n.li,{children:"Does its test pipeline run well?"}),"\n",(0,r.jsx)(n.li,{children:"Is the code efficient? Could it be rewritten easily to run more\nefficiently?"}),"\n",(0,r.jsx)(n.li,{children:"Will the new code add new dependencies on other libraries?"}),"\n",(0,r.jsx)(n.li,{children:"Does the change import new components with licenses incompatible\nwith Apache License V2.0?"}),"\n",(0,r.jsx)(n.li,{children:"Does it modify the files' license headers? If so, is it ok?"}),"\n",(0,r.jsx)(n.li,{children:"Is the code human-readable? Is it low on redundancy? Should variable\nnames be improved for clarity or consistency? Should comments be\nadded? Should any comments be removed as unhelpful or extraneous?"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["For acronyms and abbreviations used in the code review, you can read\n",(0,r.jsx)(n.a,{href:"./git#acronyms-and-abbreviations",children:"here"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"contributor-checklist",children:"Contributor checklist"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Read the contributing guidelines."}),"\n",(0,r.jsx)(n.li,{children:"Read the Code of Conduct."}),"\n",(0,r.jsx)(n.li,{children:"Check if your changes are consistent with the Apache Cloudberry\ncoding style."}),"\n",(0,r.jsx)(n.li,{children:"Make sure your Pull Request has a clear title and commit message."}),"\n",(0,r.jsxs)(n.li,{children:["List your communication in the ",(0,r.jsx)(n.a,{href:"https://github.com/apache/cloudberry/issues",children:"GitHub\nIssues"})," or\n",(0,r.jsx)(n.a,{href:"https://github.com/apache/cloudberry/discussions",children:"Discussions"})," (if\nhas or needed)."]}),"\n",(0,r.jsx)(n.li,{children:"Run the unit tests and regression tests."}),"\n",(0,r.jsxs)(n.li,{children:["Pass ",(0,r.jsx)(n.code,{children:"make installcheck"}),", ",(0,r.jsx)(n.code,{children:"make -C src/test installcheck-cbdb-parallel"})]}),"\n",(0,r.jsx)(n.li,{children:"Import some components with Apache License V2 compatible license."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>s});var r=o(67294);const i={},t=r.createContext(i);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);