"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[4943],{74679:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var r=n(85893),t=n(11151);const i={title:"DBeaver"},c="DBeaver",d={id:"ecosystem/sql-clients/dbeaver",title:"DBeaver",description:"DBeaver \u662f\u4e00\u6b3e\u529f\u80fd\u4e30\u5bcc\u7684\u6570\u636e\u5e93\u7ba1\u7406\u5de5\u5177\u548c SQL \u5ba2\u6237\u7aef\u8f6f\u4ef6\uff0c\u53ef\u4ee5\u652f\u6301\u5305\u62ec MySQL\u3001PostgreSQL \u548c Apache Cloudberry \u5728\u5185\u7684\u591a\u79cd\u6570\u636e\u5e93\u7cfb\u7edf\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u5168\u9762\u7684\u6570\u636e\u5e93\u7ba1\u7406\u80fd\u529b\u3002\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 DBeaver \u4e0e Apache Cloudberry \u6570\u636e\u5e93\u5efa\u7acb\u8fde\u63a5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/ecosystem/sql-clients/dbeaver.md",sourceDirName:"ecosystem/sql-clients",slug:"/ecosystem/sql-clients/dbeaver",permalink:"/zh/docs/ecosystem/sql-clients/dbeaver",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/ecosystem/sql-clients/dbeaver.md",tags:[],version:"current",lastUpdatedBy:"zhangfei",lastUpdatedAt:1740991732,formattedLastUpdatedAt:"2025\u5e743\u67083\u65e5",frontMatter:{title:"DBeaver"},sidebar:"docsbars",previous:{title:"\u5e38\u7528\u76d1\u63a7\u8fd0\u7ef4\u64cd\u4f5c",permalink:"/zh/docs/sys-admin/recommended-maintenance-monitoring-tasks"},next:{title:"SQL Statements Index",permalink:"/zh/docs/sql-stmts/"}},l={},a=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:2}];function o(e){const s={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"dbeaver",children:"DBeaver"}),"\n",(0,r.jsx)(s.p,{children:"DBeaver \u662f\u4e00\u6b3e\u529f\u80fd\u4e30\u5bcc\u7684\u6570\u636e\u5e93\u7ba1\u7406\u5de5\u5177\u548c SQL \u5ba2\u6237\u7aef\u8f6f\u4ef6\uff0c\u53ef\u4ee5\u652f\u6301\u5305\u62ec MySQL\u3001PostgreSQL \u548c Apache Cloudberry \u5728\u5185\u7684\u591a\u79cd\u6570\u636e\u5e93\u7cfb\u7edf\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u5168\u9762\u7684\u6570\u636e\u5e93\u7ba1\u7406\u80fd\u529b\u3002\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 DBeaver \u4e0e Apache Cloudberry \u6570\u636e\u5e93\u5efa\u7acb\u8fde\u63a5\u3002"}),"\n",(0,r.jsx)(s.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u5b8c\u6210 Apache Cloudberry \u7684\u90e8\u7f72\uff0c\u5e76\u5df2\u5728 ",(0,r.jsx)(s.code,{children:"pg_bha.conf"})," \u4e2d\u6b63\u786e\u8bbe\u7f6e\u6570\u636e\u5e93\u8bbf\u95ee\u6743\u9650\u3002"]}),"\n",(0,r.jsx)(s.li,{children:"\u5b8c\u6210 DBeaver\uff08v24.3.3 \u6216\u66f4\u9ad8\u7248\u672c\uff09\u7684\u5b89\u88c5\u3002"}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u64cd\u4f5c\u6b65\u9aa4",children:"\u64cd\u4f5c\u6b65\u9aa4"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u542f\u52a8 DBeaver\uff0c\u901a\u8fc7\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u4e4b\u4e00\u5f00\u59cb\u521b\u5efa\u65b0\u7684\u6570\u636e\u5e93\u8fde\u63a5\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u5728\u83dc\u5355\u680f\u9009\u62e9 ",(0,r.jsx)(s.strong,{children:"Database"})," > ",(0,r.jsx)(s.strong,{children:"New Database Connection"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(26832).Z+"",width:"1012",height:"745"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u70b9\u51fb\u754c\u9762\u5de6\u4e0a\u89d2\u7684\u52a0\u53f7 (+) \u56fe\u6807"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(79681).Z+"",width:"1280",height:"800"})}),"\n",(0,r.jsxs)(s.ol,{start:"2",children:["\n",(0,r.jsxs)(s.li,{children:["\u5728\u5f39\u51fa\u7684 ",(0,r.jsx)(s.strong,{children:"Select your database"})," \u5bf9\u8bdd\u6846\u4e2d\uff0c\u627e\u5230\u5e76\u9009\u62e9 ",(0,r.jsx)(s.strong,{children:"Cloudberry"}),"\uff0c\u7ee7\u7eed\u70b9\u51fb ",(0,r.jsx)(s.strong,{children:"Next"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(94870).Z+"",width:"1027",height:"833"})}),"\n",(0,r.jsxs)(s.ol,{start:"3",children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["\u5728 ",(0,r.jsx)(s.strong,{children:"Connection Settings"})," \u5bf9\u8bdd\u6846\u7684 ",(0,r.jsx)(s.strong,{children:"Main"})," \u6807\u7b7e\u9875\u4e2d\uff0c\u586b\u5199\u4ee5\u4e0b\u8fde\u63a5\u53c2\u6570\uff1a"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Host"}),": \u8f93\u5165 Cloudberry \u6570\u636e\u5e93\u670d\u52a1\u5668\u7684\u4e3b\u673a\u540d\u6216 IP \u5730\u5740\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Port"}),": \u8f93\u5165\u6570\u636e\u5e93\u670d\u52a1\u7aef\u53e3\uff08\u4f8b\u5982 ",(0,r.jsx)(s.code,{children:"5432"}),"\uff09\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Database"}),": \u8f93\u5165\u8981\u8fde\u63a5\u7684\u76ee\u6807\u6570\u636e\u5e93\u540d\u79f0\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Username"}),": \u8f93\u5165\u5177\u6709\u8bbf\u95ee\u6743\u9650\u7684\u6570\u636e\u5e93\u7528\u6237\u540d\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Password"}),": \u8f93\u5165\u5bf9\u5e94\u7528\u6237\u7684\u767b\u5f55\u5bc6\u7801\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(37622).Z+"",width:"1280",height:"857"})}),"\n",(0,r.jsxs)(s.p,{children:["\u5207\u6362\u5230 ",(0,r.jsx)(s.strong,{children:"Driver properties"})," \u6807\u7b7e\u9875\uff0c\u4f60\u53ef\u4ee5\u67e5\u770b\u5e76\u4fee\u6539 Cloudberry \u9a71\u52a8\u7a0b\u5e8f\u7684\u76f8\u5173\u5c5e\u6027\uff0c\u53ea\u9700\u70b9\u51fb\u5c5e\u6027\u5bf9\u5e94\u7684 Value \u5217\u5373\u53ef\u8fdb\u884c\u7f16\u8f91\u3002"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(95263).Z+"",width:"1280",height:"857"})}),"\n",(0,r.jsxs)(s.ol,{start:"4",children:["\n",(0,r.jsxs)(s.li,{children:["\u9a8c\u8bc1\u5e76\u5b8c\u6210\u914d\u7f6e\uff1a\u70b9\u51fb\u5de6\u4e0b\u89d2\u7684 ",(0,r.jsx)(s.strong,{children:"Test Connection"})," \u6309\u94ae\u6d4b\u8bd5\u8fde\u63a5\u662f\u5426\u53ef\u7528\u3002\u5982\u679c\u51fa\u73b0\u786e\u8ba4\u5bf9\u8bdd\u6846\uff0c\u8868\u793a\u8fde\u63a5\u6d4b\u8bd5\u6210\u529f\u3002\u70b9\u51fb OK \u786e\u8ba4\u540e\uff0c\u6700\u540e\u70b9\u51fb Finish \u6309\u94ae\u5b8c\u6210\u6574\u4e2a\u8fde\u63a5\u8bbe\u7f6e\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(10574).Z+"",width:"1280",height:"857"})}),"\n",(0,r.jsxs)(s.ol,{start:"5",children:["\n",(0,r.jsx)(s.li,{children:"\u6570\u636e\u5e93\u8fde\u63a5\u5efa\u7acb\u4ee5\u540e\uff0c\u4f60\u53ef\u4ee5\u5728\u5de6\u4fa7\u7684\u6570\u636e\u5e93\u8fde\u63a5\u5bfc\u822a\u770b\u5230\u5df2\u521b\u5efa\u7684\u6570\u636e\u6e90\u8fde\u63a5\uff0c\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7 DBeaver \u8fde\u63a5\u5e76\u7ba1\u7406\u6570\u636e\u5e93\u3002"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(54258).Z+"",width:"1280",height:"911"})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},26832:(e,s,n)=>{n.d(s,{Z:()=>r});const r=n.p+"assets/images/dbeaver1-0ecd72a213285561cb14cbad020b4d93.png"},79681:(e,s,n)=>{n.d(s,{Z:()=>r});const r=n.p+"assets/images/dbeaver2-894c2dc02085c683b632cfd262e08e75.png"},94870:(e,s,n)=>{n.d(s,{Z:()=>r});const r=n.p+"assets/images/dbeaver3-5d912d01a4605ba00315d59e39473d59.png"},37622:(e,s,n)=>{n.d(s,{Z:()=>r});const r=n.p+"assets/images/dbeaver4-8e6acefd60d5f4d3ca872f514c48ea26.png"},95263:(e,s,n)=>{n.d(s,{Z:()=>r});const r=n.p+"assets/images/dbeaver5-87d7bc62e4e61d94a560e9267ed18651.png"},10574:(e,s,n)=>{n.d(s,{Z:()=>r});const r=n.p+"assets/images/dbeaver6-c15608ff3a95ef58b67b2b61115959d3.png"},54258:(e,s,n)=>{n.d(s,{Z:()=>r});const r=n.p+"assets/images/dbeaver7-5eb0e146a22cc77ce9b74fcc5b5a5574.png"},11151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>c});var r=n(67294);const t={},i=r.createContext(t);function c(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);