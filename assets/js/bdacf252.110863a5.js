"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[2887],{26869:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var t=a(85893),s=a(11151);const i={title:"Use IndexScan on AO Tables"},o="Use IndexScan on AO Tables",r={id:"performance/use-index-scan-on-ao-tables",title:"Use IndexScan on AO Tables",description:"Cloudberry Database supports IndexScan when querying on App-Optimized (AO) tables to improve query efficiency in certain scenarios, such as the following query:",source:"@site/docs/performance/use-index-scan-on-ao-tables.md",sourceDirName:"performance",slug:"/performance/use-index-scan-on-ao-tables",permalink:"/docs/performance/use-index-scan-on-ao-tables",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/performance/use-index-scan-on-ao-tables.md",tags:[],version:"current",lastUpdatedBy:"zhangfei",lastUpdatedAt:1740991732,formattedLastUpdatedAt:"Mar 3, 2025",frontMatter:{title:"Use IndexScan on AO Tables"},sidebar:"docsbars",previous:{title:"Use Aggregation Pushdown to Speed Up Query Execution",permalink:"/docs/performance/use-aggre-pushdown-to-speed-up-queries"},next:{title:"Use RuntimeFilter to Optimize Join Queries",permalink:"/docs/performance/use-runtimefilter-to-optimize-queries"}},l={},c=[{value:"Applicable scenarios",id:"applicable-scenarios",level:2},{value:"Usage example",id:"usage-example",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"use-indexscan-on-ao-tables",children:"Use IndexScan on AO Tables"}),"\n",(0,t.jsx)(n.p,{children:"Cloudberry Database supports IndexScan when querying on App-Optimized (AO) tables to improve query efficiency in certain scenarios, such as the following query:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM tbl WHERE val > 100 ORDER BY val LIMIT 10;\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Append-Optimized (AO) tables are an optimized storage method for scenarios that focus on batch insertion, such as big data analysis and data warehouse scenarios. When new data is inserted into an AO table, Cloudberry Database appends the new data to the end of the table, instead of seeking free space for insertion like in regular tables. This means that inserting data into AO tables only requires append operations to the file, thus achieving higher insertion efficiency."})}),"\n",(0,t.jsx)(n.p,{children:"For the above query statement:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If you use heap table storage, Cloudberry Database executes this query by finding 10 tuples with ",(0,t.jsx)(n.code,{children:"val"})," greater than ",(0,t.jsx)(n.code,{children:"100"})," through IndexScan. It only needs to read about 10 tuples from the index and the table."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If you use the AO table storage method, and assume that the ",(0,t.jsx)(n.code,{children:"tbl"})," table has 1 billion rows of tuples, we specify through the ",(0,t.jsx)(n.code,{children:"LIMIT"})," clause that only 10 tuples are to be returned:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Cloudberry Database supports using IndexScan operations to scan AO tables, which can greatly reduce the amount of data to be scanned and greatly improve the efficiency of scanning. It is a better scanning method than SeqScan and BitmapScan. SeqScan or BitmapScan scans 100 million times more data than IndexScan."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"applicable-scenarios",children:"Applicable scenarios"}),"\n",(0,t.jsxs)(n.p,{children:["This feature is suitable for querying on large tables while limiting the size of the returned result set by using  ",(0,t.jsx)(n.code,{children:"ORDER BY"})," and ",(0,t.jsx)(n.code,{children:"LIMIT"})," clauses:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM tbl WHERE val > 100 ORDER BY val LIMIT 10;\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:['"Large table" means the table size of about 3000 times the data to be queried. For example, when ',(0,t.jsx)(n.code,{children:"LIMIT 10"})," is used to return 10 records, a table larger than 30,000 records can be considered a large table."]})}),"\n",(0,t.jsx)(n.p,{children:"Depending on the size of the data, different degrees of optimization are achieved. In the most suitable scenario, queries that originally required tens of minutes of execution can be returned within 1 second."}),"\n",(0,t.jsx)(n.h2,{id:"usage-example",children:"Usage example"}),"\n",(0,t.jsxs)(n.p,{children:["To enable AO IndexScan, you need to run ",(0,t.jsx)(n.code,{children:"SET optimizer TO off;"})," to disable the GPORCA optimizer and set the system parameter ",(0,t.jsx)(n.code,{children:"gp_enable_ao_indexscan"})," to ",(0,t.jsx)(n.code,{children:"ON"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"From the following example, you can see that the execution time without AO IndexScan is 5888.235 ms, which is much longer than the execution time of 15.462 ms with AO IndexScan enabled."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SET optimizer TO off; -- To enable AO IndexScan, first disable the GPORCA optimizer.\n\n-- Creates the test table, generates 100 million records of data, and builds index on the val column.\nCREATE TABLE tbl (id int, val int) WITH (orientation='column', appendonly=true);\nINSERT INTO tbl SELECT i, i FROM generate_series(1, 100000000) s(i);\n\n-- Directly runs a query.\nEXPLAIN ANALYZE SELECT * FROM tbl WHERE val > 100 ORDER BY val LIMIT 10;\n\n(Execution Time: 5888.235 ms)\n\n\n-- Runs the query again after enabling AO IndexScan.\nSET gp_enable_ao_indexscan TO on;\nEXPLAIN ANALYZE SELECT * FROM tbl WHERE val > 100 ORDER BY val LIMIT 10;\n\n(Execution Time: 15.462 ms)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Currently, this feature is only available for the PostgreSQL optimizer. Also, on some mechanical hard drives, random I/O might be 30,000 times less efficient than sequential I/O. If AO IndexScan is enabled in the case of using poor mechanical hard drives, IndexScan's execution efficiency might be less than ideal."})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>o});var t=a(67294);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);