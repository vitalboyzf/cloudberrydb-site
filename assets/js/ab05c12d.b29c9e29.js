"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[672],{58470:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var a=n(85893),s=n(11151);const t={title:"Use Auto Materialized Views for Query Optimization"},r="Use Automatic Materialized Views for Query Optimization (New in v1.5.0)",l={id:"performance/use-auto-materialized-view-to-answer-queries",title:"Use Auto Materialized Views for Query Optimization",description:"Since v1.5.0, Cloudberry Database supports automatically using materialized views to process some or all queries (called AQUMV) during the query planning phase. This feature is suitable for queries on large tables and can greatly reduce query processing time. AQUMV uses incremental materialized views (IMVs) because IMVs usually keep the latest data when related tables have write operations.",source:"@site/docs/performance/use-auto-materialized-view-to-answer-queries.md",sourceDirName:"performance",slug:"/performance/use-auto-materialized-view-to-answer-queries",permalink:"/docs/performance/use-auto-materialized-view-to-answer-queries",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/performance/use-auto-materialized-view-to-answer-queries.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733824616,formattedLastUpdatedAt:"Dec 10, 2024",frontMatter:{title:"Use Auto Materialized Views for Query Optimization"},sidebar:"docsbars",previous:{title:"Create Unique Index on AO Table",permalink:"/docs/performance/use-unique-index-on-ao-tables"},next:{title:"Incremental Materialized View",permalink:"/docs/performance/use-incremental-materialized-view"}},c={},o=[{value:"Usage scenarios",id:"usage-scenarios",level:2},{value:"Usage example",id:"usage-example",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Restrictions",id:"restrictions",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h1,{id:"use-automatic-materialized-views-for-query-optimization-new-in-v150",children:"Use Automatic Materialized Views for Query Optimization (New in v1.5.0)"}),"\n",(0,a.jsx)(i.p,{children:"Since v1.5.0, Cloudberry Database supports automatically using materialized views to process some or all queries (called AQUMV) during the query planning phase. This feature is suitable for queries on large tables and can greatly reduce query processing time. AQUMV uses incremental materialized views (IMVs) because IMVs usually keep the latest data when related tables have write operations."}),"\n",(0,a.jsx)(i.h2,{id:"usage-scenarios",children:"Usage scenarios"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Aggregation queries on large data sets: For queries that need to aggregate results from millions of records, AQUMV can significantly reduce query time."}),"\n",(0,a.jsx)(i.li,{children:"Frequently updated large tables: In an environment where data is frequently updated, using IMV can ensure that the query results are real-time and accurate."}),"\n",(0,a.jsx)(i.li,{children:"Complex calculations: For queries with complex calculations (such as square root and absolute value calculations), AQUMV can speed up the queries by pre-calculating these values in materialized views."}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"usage-example",children:"Usage example"}),"\n",(0,a.jsxs)(i.p,{children:["To enable AQUMV, you need to create a materialized view and set the value of the system parameter ",(0,a.jsx)(i.code,{children:"enable_answer_query_using_materialized_views"})," to ",(0,a.jsx)(i.code,{children:"ON"}),". The following example compares the results of the same complex query without AQUMV and with AQUMV."]}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["Create a table ",(0,a.jsx)(i.code,{children:"aqumv_t1"}),"."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-sql",children:"CREATE TABLE aqumv_t1(c1 INT, c2 INT, c3 INT) DISTRIBUTED BY (c1);\n"})}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:"Insert data into the table and collect statistics from the table."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-sql",children:"INSERT INTO aqumv_t1 SELECT i, i+1, i+2 FROM generate_series(1, 100000000) i;\nANALYZE aqumv_t1;\n"})}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:"Execute a query without enabling AQUMV. The query takes 7384.329 ms."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-sql",children:"SELECT SQRT(ABS(ABS(c2) - c1 - 1) + ABS(c2)) FROM aqumv_t1 WHERE c1 > 30 AND c1 < 40 AND SQRT(ABS(c2)) > 5.8;\n\n    sqrt\n-------------------66.0827625302982196.2449979983983985.9160797830996166.1644140029689766.3245553203367595.830951894845301\n(7 rows)\n\nTime: 7384.329 ms (00:07.384)\n"})}),"\n",(0,a.jsxs)(i.p,{children:["From the following query plan, you can see that the optimizer scans the table (",(0,a.jsx)(i.code,{children:"Seq Scan on aqumv_t1 "}),")."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-sql",children:"EXPLAIN(COSTS OFF) SELECT SQRT(ABS(ABS(c2) - c1 - 1) + ABS(c2)) FROM aqumv_t1 WHERE c1 > 30 AND c1 < 40 AND SQRT(ABS(c2)) > 5.8;\n\n                                                QUERY PLAN\n\n-------------------------------------------------------------------------------------------------------------\nGather Motion 3:1  (slice1; segments: 3)\n->  Seq Scan on aqumv_t1\n        Filter: ((c1 > 30) AND (c1 < 40) AND (sqrt((abs(c2))::double precision) > '5.8'::double pre\ncision))\nOptimizer: Postgres query optimizer\n(4 rows)\n"})}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["Create a materialized view ",(0,a.jsx)(i.code,{children:"mvt1"})," based on ",(0,a.jsx)(i.code,{children:"aqumv_t1"})," and collect statistics on the view."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-sql",children:"CREATE INCREMENTAL MATERIALIZED VIEW mvt1 AS SELECT c1 AS mc1, c2 AS mc2, ABS(c2) AS mc3, ABS(ABS(c2) - c1 - 1) AS mc4\nFROM aqumv_t1 WHERE c1 > 30 AND c1 < 40;\n\nANALYZE mvt1;\n"})}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:"Enable the AQUMV-related configuration parameter."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-sql",children:"SET enable_answer_query_using_materialized_views = ON;\n"})}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:"Now AQUMV is enabled. Execute the same query again, which takes only 45.701 ms."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-sql",children:"SELECT SQRT(ABS(ABS(c2) - c1 - 1) + ABS(c2)) FROM aqumv_t1 WHERE c1 > 30 AND c1 < 40 AND SQRT(ABS(c2)) > 5.8;\n\n    sqrt\n-------------------66.0827625302982196.2449979983983985.8309518948453015.9160797830996166.1644140029689766.324555320336759\n(7 rows)\n\nTime: 45.701 ms\n"})}),"\n",(0,a.jsxs)(i.p,{children:["From the following query plan, you can see that the optimizer does not scan the ",(0,a.jsx)(i.code,{children:"aqumv_t1"})," table, but scans the materialized view ",(0,a.jsx)(i.code,{children:"mvt1"})," (",(0,a.jsx)(i.code,{children:"Seq Scan on public.mvt1"}),") instead."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-sql",children:"EXPLAIN(VERBOSE, COSTS OFF) SELECT SQRT(ABS(ABS(c2) - c1 - 1) + ABS(c2)) FROM aqumv_t1 WHERE c1 > 30 AND c1 < 40 AND SQRT(ABS(c2)) > 5.8;\n\n                                QUERY PLAN\n--------------------------------------------------------------------------------\nGather Motion 3:1  (slice1; segments: 3)\nOutput: (sqrt(((mc4 + mc3))::double precision))\n->  Seq Scan on public.mvt1\n        Output: sqrt(((mc4 + mc3))::double precision)\n        Filter: (sqrt((mvt1.mc3)::double precision) > '5.8'::double precision)\nSettings: enable_answer_query_using_materialized_views = 'on', optimizer = 'off'\nOptimizer: Postgres query optimizer\n(7 rows)\n"})}),"\n",(0,a.jsxs)(i.p,{children:["In the above example, the query takes 7384.329 ms without AQUMV and without using the materialized views. In contrast, the same query takes only 45.701 ms with AQUMV enabled and using the materialized view. This means that the materialized view pre-calculates and stores relevant calculation result, so that the view only contains rows that meet the specific condition (",(0,a.jsx)(i.code,{children:"c1 > 30 AND c1 < 40"}),")."]}),"\n",(0,a.jsxs)(i.p,{children:["Therefore, the above table query ",(0,a.jsx)(i.code,{children:"SELECT SQRT(ABS(ABS(c2) - c1 - 1) + ABS(c2)) FROM aqumv_t1 WHERE c1 > 30 AND c1 < 40 AND SQRT(ABS(c2)) > 5.8;"})," is equivalent to querying from the materialized view ",(0,a.jsx)(i.code,{children:"SELECT SQRT(ABS(ABS(c2) - c1 - 1) + ABS(c2)) FROM aqumv_t1 WHERE c1 > 30 AND c1 < 40 AND SQRT(ABS(c2)) > 5.8;"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"When the same query is executed, the data can be obtained directly from the materialized view, rather than from the original table. In this way, AQUMV can significantly improve query performance, especially when dealing with large data volumes and complex calculations."}),"\n",(0,a.jsx)(i.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)(i.p,{children:"AQUMV implements query optimization by equivalently transforming the query tree."}),"\n",(0,a.jsx)(i.p,{children:"Cloudberry Database automatically uses materialized views only when the table query meets the following conditions:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Materialized views must contain all the rows required by the query expression."}),"\n",(0,a.jsx)(i.li,{children:"If the materialized view contains more rows than the query, you might need to add additional filters."}),"\n",(0,a.jsx)(i.li,{children:"All output expressions must be able to be calculated from the output of the view."}),"\n",(0,a.jsx)(i.li,{children:"The output expression can fully or partially match the target list of the materialized view."}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"When there are multiple valid materialized view candidates, or the cost of querying from the materialized view is higher than querying directly from the original table (for example, the original table has indexes), you can let the planner make the best choice based on cost estimates."}),"\n",(0,a.jsx)(i.h2,{id:"restrictions",children:"Restrictions"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["Only ",(0,a.jsx)(i.code,{children:"SELECT"})," queries for a single relationship are supported, which is applicable to materialized view queries and the original queries."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:"Unsupported"})," features include:"]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Aggregation (AGG)"}),"\n",(0,a.jsx)(i.li,{children:"Subqueries"}),"\n",(0,a.jsxs)(i.li,{children:["Sorting of original queries (",(0,a.jsx)(i.code,{children:"ORDER BY"}),")"]}),"\n",(0,a.jsxs)(i.li,{children:["Joins (",(0,a.jsx)(i.code,{children:"JOIN"}),")"]}),"\n",(0,a.jsxs)(i.li,{children:["Sublinks (",(0,a.jsx)(i.code,{children:"SUBLINK"}),")"]}),"\n",(0,a.jsxs)(i.li,{children:["Grouping (",(0,a.jsx)(i.code,{children:"GROUP BY"}),")"]}),"\n",(0,a.jsx)(i.li,{children:"Window functions"}),"\n",(0,a.jsx)(i.li,{children:"Common table expressions (CTE)"}),"\n",(0,a.jsxs)(i.li,{children:["Deduplication (",(0,a.jsx)(i.code,{children:"DISTINCT ON"}),")"]}),"\n",(0,a.jsxs)(i.li,{children:["Refreshing materialized views (",(0,a.jsx)(i.code,{children:"REFRESH MATERIALIZED VIEW"}),")"]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"CREATE AS"})," statements"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"/docs/performance/parallel-create-ao-refresh-mv",children:"Create AO/AOCO Tables and Refresh Materialized Views in Parallel"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"/docs/performance/use-incremental-materialized-view",children:"Incremental Materialized View in Cloudberry Database"})}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>l,a:()=>r});var a=n(67294);const s={},t=a.createContext(s);function r(e){const i=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(t.Provider,{value:i},e.children)}}}]);