"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[742],{34233:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});var s=r(85893),a=r(11151);const l={title:"Parallel Queries Execution"},i="Use Parallel Queries Execution",t={id:"performance/parallel-query-execution",title:"Parallel Queries Execution",description:"This document introduces the usage scenarios, usage examples, restrictions, and common issues of parallel query execution in Cloudberry Database. When Cloudberry Database executes a query, multiple CPU cores are used to process a single query, thereby improving query performance. The database dynamically adjusts the number of computing nodes (including the SeqScan operator) according to the data volume change.",source:"@site/docs/performance/parallel-query-execution.md",sourceDirName:"performance",slug:"/performance/parallel-query-execution",permalink:"/docs/performance/parallel-query-execution",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/performance/parallel-query-execution.md",tags:[],version:"current",lastUpdatedBy:"zhangfei",lastUpdatedAt:1740991732,formattedLastUpdatedAt:"Mar 3, 2025",frontMatter:{title:"Parallel Queries Execution"},sidebar:"docsbars",previous:{title:"Create AO/AOCO Tables and Refresh Materialized Views in Parallel",permalink:"/docs/performance/parallel-create-ao-refresh-mv"},next:{title:"Use Aggregation Pushdown to Speed Up Query Execution",permalink:"/docs/performance/use-aggre-pushdown-to-speed-up-queries"}},o={},d=[{value:"Applicable scenarios",id:"applicable-scenarios",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Parallel queries on heap tables",id:"parallel-queries-on-heap-tables",level:3},{value:"Parallel queries on AO/AOCO tables",id:"parallel-queries-on-aoaoco-tables",level:3},{value:"Parameter description",id:"parameter-description",level:2},{value:"Frequently asked questions",id:"frequently-asked-questions",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"use-parallel-queries-execution",children:"Use Parallel Queries Execution"}),"\n",(0,s.jsxs)(n.p,{children:["This document introduces the usage scenarios, usage examples, restrictions, and common issues of parallel query execution in Cloudberry Database. When Cloudberry Database executes a query, multiple CPU cores are used to process a single query, thereby improving query performance. The database dynamically adjusts the number of computing nodes (including the ",(0,s.jsx)(n.code,{children:"SeqScan"})," operator) according to the data volume change."]}),"\n",(0,s.jsx)(n.h2,{id:"applicable-scenarios",children:"Applicable scenarios"}),"\n",(0,s.jsx)(n.p,{children:"Suitable for the scenario where a few segments are deployed on a single physical machine. Using parallel query execution in this scenario can dynamically adjust parallel sessions, spare the need to deploy more segments, and improve performance."}),"\n",(0,s.jsx)(n.p,{children:"When the host CPU and disk load are not high, enabling parallel sessions for operators can bring better performance."}),"\n",(0,s.jsx)(n.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,s.jsx)(n.p,{children:"Cloudberry Database supports parallel query execution on AO/AOCO and heap tables."}),"\n",(0,s.jsx)(n.h3,{id:"parallel-queries-on-heap-tables",children:"Parallel queries on heap tables"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Before enabling parallel queries, you need to turn off the GPORCA optimizer."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SET enable_parallel = ON;\nSET optimizer = OFF;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Set the maximum value for the parallel session."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- When setting this parameter\n-- you need to consider the number of CPU cores and segments.\nSET max_parallel_workers_per_gather = 4;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Query example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE t1 (c1 int,c2 int, c3 int, c4 box) distributed by (c1);\nINSERT INTO t1 SELECT x, 2*x, 3*x, box('6,6,6,6') FROM generate_series(1,1000000) AS x;\nSELECT count(*) from t1;\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"parallel-queries-on-aoaoco-tables",children:"Parallel queries on AO/AOCO tables"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Before enabling parallel queries, you need to turn off the GPORCA optimizer."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SET enable_parallel = ON;\nSET optimizer = OFF;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Set the maximum value for the parallel session."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- When setting this parameter\n-- you need to consider the number of CPU cores and segments.\nSET max_parallel_workers_per_gather = 4;\n\n-- Sets how many files the data will be inserted into in a transaction.\n-- Larger values might lead to performance degradation, especially for AOCO tables.\nSET gp_appendonly_insert_files = 8;\n\n-- Switches to the next file to insert data every 100,000 rows.\n-- This number of rows can be adjusted,\n-- to make the data as evenly distributed as possible across multiple files.\nSET gp_appendonly_insert_files_tuples_range = 100000;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Insert data and run a query."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE ao(x INT) USING ao_row;\nINSERT INTO ao SELECT i FROM generate_series(1, 1000000) i;\n-- It is recommended to update statistics first.\nANALYZE ao;\nSELECT COUNT(*) FROM ao;\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"parameter-description",children:"Parameter description"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter name"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Default value"}),(0,s.jsx)(n.th,{children:"Is it required?"}),(0,s.jsx)(n.th,{children:"Example"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"enable_parallel"})}),(0,s.jsx)(n.td,{children:"Determines whether to enable parallel execution."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"OFF"})}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SET enable_parallel = ON;"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"optimizer"})}),(0,s.jsx)(n.td,{children:"Determines whether to enable the GPORCA optimizer."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ON"})}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SET optimizer = OFF;"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"gp_appendonly_insert_files"})}),(0,s.jsx)(n.td,{children:"Specifies how many files the data will be inserted into in a transaction."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"4"})}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SET gp_appendonly_insert_files = 8;"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"gp_appendonly_insert_files_tuples_range"})}),(0,s.jsx)(n.td,{children:"Specifies the threshold of rows in a file, beyond which data will be inserted into a new file."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"100000"})}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SET gp_appendonly_insert_files_tuples_range = 100000;"})})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"frequently-asked-questions",children:"Frequently asked questions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Currently, Cloudberry Database supports executing queries in parallel that contain the following operators. If a query contains other operators, it will not be executed in parallel."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"sequence scan      \nindex scan      \nindex only scan      \nbitmap heap scan      \nappend\nhash join      \nnestloop join      \nmerge join\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Parallel queries do not always improve query performance. Too many parallel sessions can cause overload and lead to performance degradation."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Enabling parallel sessions for a query means a significant increase in memory overhead, which might cause errors due to insufficient memory."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>t,a:()=>i});var s=r(67294);const a={},l=s.createContext(a);function i(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);