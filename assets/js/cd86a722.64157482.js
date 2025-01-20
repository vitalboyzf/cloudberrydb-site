"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[7255],{10989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(85893),a=n(11151),i=n(52991);const s={title:"Query Performance Overview"},o="Query Performance in Cloudberry Database",c={id:"performance/index",title:"Query Performance Overview",description:"Cloudberry Database dynamically eliminates irrelevant partitions in a table and optimally allocates memory for different operators in a query.These enhancements scan less data for a query, accelerate query processing, and support more concurrency.",source:"@site/docs/performance/index.md",sourceDirName:"performance",slug:"/performance/",permalink:"/docs/performance/",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/performance/index.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1736835446,formattedLastUpdatedAt:"Jan 14, 2025",frontMatter:{title:"Query Performance Overview"},sidebar:"docsbars",previous:{title:"Directory Table",permalink:"/docs/advanced-analytics/directory-tables"},next:{title:"Update Statistics",permalink:"/docs/performance/update-stats-using-analyze"}},l={},d=[];function u(e){const t={admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"query-performance-in-cloudberry-database",children:"Query Performance in Cloudberry Database"}),"\n",(0,r.jsx)(t.p,{children:"Cloudberry Database dynamically eliminates irrelevant partitions in a table and optimally allocates memory for different operators in a query.These enhancements scan less data for a query, accelerate query processing, and support more concurrency."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Dynamic partition elimination"}),"\n",(0,r.jsxs)(t.p,{children:["In Cloudberry Database, values available only when a query runs are used to dynamically prune partitions, which improves query processing speed. Enable or deactivate dynamic partition elimination by setting the server configuration parameter ",(0,r.jsx)(t.code,{children:"gp_dynamic_partition_pruning"})," to ",(0,r.jsx)(t.code,{children:"ON"})," or ",(0,r.jsx)(t.code,{children:"OFF"}),"; it is ",(0,r.jsx)(t.code,{children:"ON"})," by default."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Memory optimizations"}),"\n",(0,r.jsx)(t.p,{children:"Cloudberry Database allocates memory optimally for different operators in a query and frees and re-allocates memory during the stages of processing a query."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"Cloudberry Database uses GPORCA by default. GPORCA extends the planning and optimization capabilities of the Postgres optimizer."})}),"\n","\n","\n",(0,r.jsx)(i.Z,{})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},52991:(e,t,n)=>{n.d(t,{Z:()=>x});n(67294);var r=n(90512),a=n(53438),i=n(33692),s=n(13919),o=n(95999),c=n(92503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(85893);function u(e){let{href:t,children:n}=e;return(0,d.jsx)(i.Z,{href:t,className:(0,r.Z)("card padding--lg",l.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:a,description:i}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(c.Z,{as:"h2",className:(0,r.Z)("text--truncate",l.cardTitle),title:a,children:[n," ",a]}),i&&(0,d.jsx)("p",{className:(0,r.Z)("text--truncate",l.cardDescription),title:i,children:i})]})}function p(e){let{item:t}=e;const n=(0,a.LM)(t);return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,a.xz)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,a.jA)();return(0,d.jsx)(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(h,{...e});const i=(0,a.MN)(t);return(0,d.jsx)("section",{className:(0,r.Z)("row",n),children:i.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(y,{item:e})},t)))})}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var r=n(67294);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);