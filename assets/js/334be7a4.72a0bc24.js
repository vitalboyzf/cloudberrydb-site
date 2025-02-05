"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[7903],{70581:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var t=d(85893),s=d(11151);const n={title:"Comparison with Greenplum Features"},i="Comparison with Greenplum Features",l={id:"cbdb-vs-gp-features",title:"Comparison with Greenplum Features",description:"Cloudberry Database is 100% compatible with Greenplum, and provides all the Greenplum features you need.",source:"@site/docs/cbdb-vs-gp-features.md",sourceDirName:".",slug:"/cbdb-vs-gp-features",permalink:"/docs/cbdb-vs-gp-features",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/cbdb-vs-gp-features.md",tags:[],version:"current",lastUpdatedBy:"zhangfei",lastUpdatedAt:1738720921,formattedLastUpdatedAt:"Feb 5, 2025",frontMatter:{title:"Comparison with Greenplum Features"},sidebar:"docsbars",previous:{title:"User Scenarios",permalink:"/docs/cbdb-scenarios"},next:{title:"On macOS",permalink:"/docs/cbdb-macos-compile"}},c={},h=[{value:"General features",id:"general-features",level:2},{value:"Performance-related features",id:"performance-related-features",level:2},{value:"Security-related features",id:"security-related-features",level:2}];function x(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"comparison-with-greenplum-features",children:"Comparison with Greenplum Features"}),"\n",(0,t.jsx)(r.p,{children:"Cloudberry Database is 100% compatible with Greenplum, and provides all the Greenplum features you need."}),"\n",(0,t.jsx)(r.p,{children:"In addition, Cloudberry Database possesses some features that Greenplum currently lacks or does not support. More details are listed below."}),"\n",(0,t.jsx)(r.h2,{id:"general-features",children:"General features"}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"In the following tables, \u2705 means support, and \u274c means no support."}),"\n",(0,t.jsx)(r.li,{children:"The feature comparison in the following tables is based on Greenplum 7 Beta.3."}),"\n"]})}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Feature names"}),(0,t.jsx)(r.th,{children:"Cloudberry Database"}),(0,t.jsx)(r.th,{children:"Greenplum"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"EXPLAIN"})," (WAL) support"]}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Multiranges"}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"B-tree bottom-up index deletion"}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["Covering indexes for GiST (",(0,t.jsx)(r.code,{children:"INCLUDE"}),")"]}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u2705\uff08Upcoming\uff09"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["The ",(0,t.jsx)(r.code,{children:"range_agg"})," range type aggregation function"]}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"CREATE ACCESS METHOD"})}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u2705\uff08Upcoming\uff09"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["LZ4 compression for ",(0,t.jsx)(r.code,{children:"TOAST"})," tables"]}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"JSONB subscripting"}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Configure the maximum WAL retention for replication slots"}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["Verify backup integrity (",(0,t.jsx)(r.code,{children:"pg_verifybackup"}),")"]}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Client can require SCRAM channel binding"}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:'Vacuum "emergency mode"'}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["Certificate authentication with ",(0,t.jsx)(r.code,{children:"postgres_fdw"})]}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"UPSERT"})}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u2705\uff08Upcoming\uff09"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"COPY FROM Where"}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"VACUUM / ANALYZE Skip Lock Table"}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"HASH partitioned table"}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CTE\uff08SEARCH and CYCLE\uff09"}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Procedure OUT parameters"}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"CHECK"})," constraints for foreign tables"]}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["Timeout parameter for ",(0,t.jsx)(r.code,{children:"pg_terminate_backend"})]}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Auto failover for coordinator"}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Kubernetes deployment support"}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"performance-related-features",children:"Performance-related features"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Feature names"}),(0,t.jsx)(r.th,{children:"Cloudberry Database"}),(0,t.jsx)(r.th,{children:"Greenplum"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"REINDEX CONCURRENTLY"})}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Aggregation pushdown"}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"CREATE STATISTICS"})," - ",(0,t.jsx)(r.code,{children:"OR"})," and ",(0,t.jsx)(r.code,{children:"IN/ANY"})," statistics"]}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Incremental sort"}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Incremental sort for window functions"}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Query pipelining"}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"BRIN Index\uff08multi-minmax, bloom\uff09"}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Query parallelism"}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Abbrevated keys for sorting"}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Hash Index WAL support"}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"postgres_fdw"})," aggregation pushdown"]}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"No need to rewrite the whole table when adding a column"}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Runtime Filter for Join"}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Index Scan for the AppendOnly table"}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"security-related-features",children:"Security-related features"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Feature names"}),(0,t.jsx)(r.th,{children:"Cloudberry Database"}),(0,t.jsx)(r.th,{children:"Greenplum"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Transparent Data Encryption (TDE)"}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Trusted extensions"}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SCRAM-SHA-256"}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Encrypted TCP/IP connection when GSSAPI"}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Row-level security policy"}),(0,t.jsx)(r.td,{children:"\u2705"}),(0,t.jsx)(r.td,{children:"\u274c"})]})]})]})]})}function j(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},11151:(e,r,d)=>{d.d(r,{Z:()=>l,a:()=>i});var t=d(67294);const s={},n=t.createContext(s);function i(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);