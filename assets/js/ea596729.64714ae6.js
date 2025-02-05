"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[8170],{57907:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=t(85893),o=t(11151);const i={title:"EXPLAIN"},r="EXPLAIN",a={id:"sql-stmts/explain",title:"EXPLAIN",description:"Shows the query plan of a statement.",source:"@site/docs/sql-stmts/explain.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/explain",permalink:"/docs/sql-stmts/explain",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/explain.md",tags:[],version:"current",lastUpdatedBy:"zhangfei",lastUpdatedAt:1738720921,formattedLastUpdatedAt:"Feb 5, 2025",frontMatter:{title:"EXPLAIN"},sidebar:"docsbars",previous:{title:"EXECUTE",permalink:"/docs/sql-stmts/execute"},next:{title:"FETCH",permalink:"/docs/sql-stmts/fetch"}},l={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"explain",children:"EXPLAIN"}),"\n",(0,s.jsx)(n.p,{children:"Shows the query plan of a statement."}),"\n",(0,s.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"EXPLAIN [ ( <option> [, ...] ) ] <statement>\nEXPLAIN [ANALYZE] [VERBOSE] <statement>\n"})}),"\n",(0,s.jsx)(n.p,{children:"where option can be one of:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"    ANALYZE [ <boolean> ]\n    VERBOSE [ <boolean> ]\n    COSTS [ <boolean> ]\n    BUFFERS [ <boolean> ]\n    TIMING [ <boolean> ]\n    FORMAT { TEXT | XML | JSON | YAML }\n"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"EXPLAIN"})," displays the query plan that the Cloudberry Database or Postgres Planner generates for the supplied statement. Query plans are a tree plan of nodes. Each node in the plan represents a single operation, such as table scan, join, aggregation or a sort."]}),"\n",(0,s.jsx)(n.p,{children:"Plans should be read from the bottom up as each node feeds rows into the node directly above it. The bottom nodes of a plan are usually table scan operations (sequential, index or bitmap index scans). If the query requires joins, aggregations, or sorts (or other operations on the raw rows) then there will be additional nodes above the scan nodes to perform these operations. The topmost plan nodes are usually the Cloudberry Database motion nodes (redistribute, explicit redistribute, broadcast, or gather motions). These are the operations responsible for moving rows between the segment instances during query processing."}),"\n",(0,s.jsxs)(n.p,{children:["The output of ",(0,s.jsx)(n.code,{children:"EXPLAIN"})," has one line for each node in the plan tree, showing the basic node type plus the following cost estimates that the planner made for the execution of that plan node:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cost"})," \u2014 the planner's guess at how long it will take to run the statement (measured in cost units that are arbitrary, but conventionally mean disk page fetches). Two cost numbers are shown: the start-up cost before the first row can be returned, and the total cost to return all the rows. Note that the total cost assumes that all rows will be retrieved, which may not always be the case (if using ",(0,s.jsx)(n.code,{children:"LIMIT"})," for example)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"rows"})," \u2014 the total number of rows output by this plan node. This is usually less than the actual number of rows processed or scanned by the plan node, reflecting the estimated selectivity of any ",(0,s.jsx)(n.code,{children:"WHERE"})," clause conditions. Ideally the top-level nodes estimate will approximate the number of rows actually returned, updated, or deleted by the query."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"width"})," \u2014 total bytes of all the rows output by this plan node."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"It is important to note that the cost of an upper-level node includes the cost of all its child nodes. The topmost node of the plan has the estimated total execution cost for the plan. This is this number that the planner seeks to minimize. It is also important to realize that the cost only reflects things that the query optimizer cares about. In particular, the cost does not consider the time spent transmitting result rows to the client."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"EXPLAIN ANALYZE"})," causes the statement to be actually run, not only planned. The ",(0,s.jsx)(n.code,{children:"EXPLAIN ANALYZE"})," plan shows the actual results along with the planner's estimates. This is useful for seeing whether the planner's estimates are close to reality. In addition to the information shown in the ",(0,s.jsx)(n.code,{children:"EXPLAIN"})," plan, ",(0,s.jsx)(n.code,{children:"EXPLAIN ANALYZE"})," will show the following additional information:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The total elapsed time (in milliseconds) that it took to run the query."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The number of ",(0,s.jsx)(n.em,{children:"workers"})," (segments) involved in a plan node operation. Only segments that return rows are counted."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The maximum number of rows returned by the segment that produced the most rows for an operation. If multiple segments produce an equal number of rows, the one with the longest ",(0,s.jsx)(n.em,{children:"time to end"})," is the one chosen."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The segment id number of the segment that produced the most rows for an operation."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For relevant operations, the work_mem used by the operation. If ",(0,s.jsx)(n.code,{children:"work_mem"})," was not sufficient to perform the operation in memory, the plan will show how much data was spilled to disk and how many passes over the data were required for the lowest performing segment. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Work_mem used: 64K bytes avg, 64K bytes max (seg0).\nWork_mem wanted: 90K bytes avg, 90K bytes max (seg0) to abate workfile \nI/O affecting 2 workers.\n[seg0] pass 0: 488 groups made from 488 rows; 263 rows written to \nworkfile\n[seg0] pass 1: 263 groups made from 263 rows\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The time (in milliseconds) it took to retrieve the first row from the segment that produced the most rows, and the total time taken to retrieve all rows from that segment. The ",(0,s.jsx)(n.code,{children:"<time\\> to first row"})," may be omitted if it is the same as the ",(0,s.jsx)(n.code,{children:"<time\\> to end"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Important"})," Keep in mind that the statement is actually run when ",(0,s.jsx)(n.code,{children:"ANALYZE"})," is used. Although ",(0,s.jsx)(n.code,{children:"EXPLAIN ANALYZE"})," will discard any output that a ",(0,s.jsx)(n.code,{children:"SELECT"})," would return, other side effects of the statement will happen as usual. If you wish to use ",(0,s.jsx)(n.code,{children:"EXPLAIN ANALYZE"})," on a DML statement without letting the command affect your data, use this approach:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"BEGIN;\nEXPLAIN ANALYZE ...;\nROLLBACK;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Only the ",(0,s.jsx)(n.code,{children:"ANALYZE"})," and ",(0,s.jsx)(n.code,{children:"VERBOSE"})," options can be specified, and only in that order, without surrounding the option list in parentheses."]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"ANALYZE"})})}),"\n",(0,s.jsxs)(n.p,{children:["Carry out the command and show the actual run times and other statistics. This parameter defaults to ",(0,s.jsx)(n.code,{children:"FALSE"})," if you omit it; specify ",(0,s.jsx)(n.code,{children:"ANALYZE true"})," to enable it."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"VERBOSE"})})}),"\n",(0,s.jsxs)(n.p,{children:["Display additional information regarding the plan. Specifically, include the output column list for each node in the plan tree, schema-qualify table and function names, always label variables in expressions with their range table alias, and always print the name of each trigger for which statistics are displayed. This parameter defaults to ",(0,s.jsx)(n.code,{children:"FALSE"}),"if you omit it; specify ",(0,s.jsx)(n.code,{children:"VERBOSE true"})," to enable it."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"COSTS"})})}),"\n",(0,s.jsxs)(n.p,{children:["Include information on the estimated startup and total cost of each plan node, as well as the estimated number of rows and the estimated width of each row. This parameter defaults to ",(0,s.jsx)(n.code,{children:"TRUE"})," if you omit it; specify ",(0,s.jsx)(n.code,{children:"COSTS false"})," to deactivate it."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"BUFFERS"})})}),"\n",(0,s.jsxs)(n.p,{children:["Include information on buffer usage. This parameter may be specified only when ",(0,s.jsx)(n.code,{children:"ANALYZE"})," is also specified. If omitted, the default value is ",(0,s.jsx)(n.code,{children:"false"}),", buffer usage information is not included."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),"\nCloudberry Database does not support specifying ",(0,s.jsx)(n.code,{children:"BUFFERS [true]"})," for distributed queries; ignore any displayed buffer usage information."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"TIMING"})})}),"\n",(0,s.jsxs)(n.p,{children:["Include actual startup time and time spent in each node in the output. The overhead of repeatedly reading the system clock can slow down the query significantly on some systems, so it may be useful to set this parameter to ",(0,s.jsx)(n.code,{children:"FALSE"})," when only actual row counts, and not exact times, are needed. Run time of the entire statement is always measured, even when node-level timing is turned off with this option. This parameter may only be used when ",(0,s.jsx)(n.code,{children:"ANALYZE"})," is also enabled. It defaults to ",(0,s.jsx)(n.code,{children:"TRUE"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"FORMAT"})})}),"\n",(0,s.jsxs)(n.p,{children:["Specify the output format, which can be ",(0,s.jsx)(n.code,{children:"TEXT"}),", ",(0,s.jsx)(n.code,{children:"XML"}),", ",(0,s.jsx)(n.code,{children:"JSON"}),", or ",(0,s.jsx)(n.code,{children:"YAML"}),". Non-text output contains the same information as the text output format, but is easier for programs to parse. This parameter defaults to ",(0,s.jsx)(n.code,{children:"TEXT"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"boolean"})})}),"\n",(0,s.jsxs)(n.p,{children:["Specifies whether the selected option should be turned on or off. You can write ",(0,s.jsx)(n.code,{children:"TRUE"}),", ",(0,s.jsx)(n.code,{children:"ON"}),", or ",(0,s.jsx)(n.code,{children:"1"})," to enable the option, and ",(0,s.jsx)(n.code,{children:"FALSE"}),", ",(0,s.jsx)(n.code,{children:"OFF"}),", or ",(0,s.jsx)(n.code,{children:"0"})," to deactivate it. The boolean value can also be omitted, in which case ",(0,s.jsx)(n.code,{children:"TRUE"})," is assumed."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"statement"})})}),"\n",(0,s.jsxs)(n.p,{children:["Any ",(0,s.jsx)(n.code,{children:"SELECT"}),", ",(0,s.jsx)(n.code,{children:"INSERT"}),", ",(0,s.jsx)(n.code,{children:"UPDATE"}),", ",(0,s.jsx)(n.code,{children:"DELETE"}),", ",(0,s.jsx)(n.code,{children:"VALUES"}),", ",(0,s.jsx)(n.code,{children:"EXECUTE"}),", ",(0,s.jsx)(n.code,{children:"DECLARE"}),", or ",(0,s.jsx)(n.code,{children:"CREATE TABLE AS"})," statement, whose execution plan you wish to see."]}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(n.p,{children:["In order to allow the query optimizer to make reasonably informed decisions when optimizing queries, the ",(0,s.jsx)(n.code,{children:"ANALYZE"})," statement should be run to record statistics about the distribution of data within the table. If you have not done this (or if the statistical distribution of the data in the table has changed significantly since the last time ",(0,s.jsx)(n.code,{children:"ANALYZE"})," was run), the estimated costs are unlikely to conform to the real properties of the query, and consequently an inferior query plan may be chosen."]}),"\n",(0,s.jsxs)(n.p,{children:["An SQL statement that is run during the execution of an ",(0,s.jsx)(n.code,{children:"EXPLAIN ANALYZE"})," command is excluded from Cloudberry Database resource queues."]}),"\n",(0,s.jsxs)(n.p,{children:['For more information about query profiling, see "Query Profiling" in the ',(0,s.jsx)(n.em,{children:"Cloudberry Database Administrator Guide"}),'. For more information about resource queues, see "Resource Management with Resource Queues" in the ',(0,s.jsx)(n.em,{children:"Cloudberry Database Administrator Guide"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["To illustrate how to read an ",(0,s.jsx)(n.code,{children:"EXPLAIN"})," query plan, consider the following example for a very simple query:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"EXPLAIN SELECT * FROM names WHERE name = 'Joelle';\n                                  QUERY PLAN\n-------------------------------------------------------------------------------\n Gather Motion 3:1  (slice1; segments: 3)  (cost=0.00..431.27 rows=1 width=58)\n   ->  Seq Scan on names  (cost=0.00..431.27 rows=1 width=58)\n         Filter: (name = 'Joelle'::text)\n Optimizer: Pivotal Optimizer (GPORCA) version 3.23.0\n(4 rows)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If we read the plan from the bottom up, the query optimizer starts by doing a sequential scan of the ",(0,s.jsx)(n.code,{children:"names"})," table. Notice that the ",(0,s.jsx)(n.code,{children:"WHERE"})," clause is being applied as a ",(0,s.jsx)(n.em,{children:"filter"})," condition. This means that the scan operation checks the condition for each row it scans, and outputs only the ones that pass the condition."]}),"\n",(0,s.jsxs)(n.p,{children:["The results of the scan operation are passed up to a ",(0,s.jsx)(n.em,{children:"gather motion"})," operation. In Cloudberry Database, a gather motion is when segments send rows up to the coordinator. In this case we have 3 segment instances sending to 1 coordinator instance (3:1). This operation is working on ",(0,s.jsx)(n.code,{children:"slice1"})," of the parallel query execution plan. In Cloudberry Database a query plan is divided into ",(0,s.jsx)(n.em,{children:"slices"})," so that portions of the query plan can be worked on in parallel by the segments."]}),"\n",(0,s.jsxs)(n.p,{children:["The estimated startup cost for this plan is ",(0,s.jsx)(n.code,{children:"00.00"})," (no cost) and a total cost of ",(0,s.jsx)(n.code,{children:"431.27"}),". The planner is estimating that this query will return one row."]}),"\n",(0,s.jsx)(n.p,{children:"Here is the same query, with cost estimates suppressed:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"EXPLAIN (COSTS FALSE) SELECT * FROM names WHERE name = 'Joelle';\n                QUERY PLAN\n------------------------------------------\n Gather Motion 3:1  (slice1; segments: 3)\n   ->  Seq Scan on names\n         Filter: (name = 'Joelle'::text)\n Optimizer: Pivotal Optimizer (GPORCA) version 3.23.0\n(4 rows)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Here is the same query, with JSON formatting:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'EXPLAIN (FORMAT JSON) SELECT * FROM names WHERE name = \'Joelle\';\n                  QUERY PLAN\n-----------------------------------------------\n [                                            +\n   {                                          +\n     "Plan": {                                +\n       "Node Type": "Gather Motion",          +\n       "Senders": 3,                          +\n       "Receivers": 1,                        +\n       "Slice": 1,                            +\n       "Segments": 3,                         +\n       "Gang Type": "primary reader",         +\n       "Startup Cost": 0.00,                  +\n       "Total Cost": 431.27,                  +\n       "Plan Rows": 1,                        +\n       "Plan Width": 58,                      +\n       "Plans": [                             +\n         {                                    +\n           "Node Type": "Seq Scan",           +\n           "Parent Relationship": "Outer",    +\n           "Slice": 1,                        +\n           "Segments": 3,                     +\n           "Gang Type": "primary reader",     +\n           "Relation Name": "names",          +\n           "Alias": "names",                  +\n           "Startup Cost": 0.00,              +\n           "Total Cost": 431.27,              +\n           "Plan Rows": 1,                    +\n           "Plan Width": 58,                  +\n           "Filter": "(name = \'Joelle\'::text)"+\n         }                                    +\n       ]                                      +\n     },                                       +\n     "Settings": {                            +\n       "Optimizer": "Pivotal Optimizer (GPORCA) version 3.23.0"      +\n     }                                        +\n   }                                          +\n ]\n(1 row)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["If there is an index and we use a query with an indexable ",(0,s.jsx)(n.code,{children:"WHERE"})," condition, ",(0,s.jsx)(n.code,{children:"EXPLAIN"})," might show a different plan. This query generates a plan with an index scan, with YAML formatting:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'EXPLAIN (FORMAT YAML) SELECT * FROM NAMES WHERE LOCATION=\'Sydney, Australia\';\n                          QUERY PLAN\n--------------------------------------------------------------\n - Plan                                                +\n     Node Type: "Gather Motion"                              +\n     Senders: 3                                              +\n     Receivers: 1                                            +\n     Slice: 1                                                +\n     Segments: 3                                             +\n     Gang Type: "primary reader"                             +\n     Startup Cost: 0.00                                      +\n     Total Cost: 10.81                                       +\n     Plan Rows: 10000                                        +\n     Plan Width: 70                                          +\n     Plans                                             +\n       - Node Type: "Index Scan"                             +\n         Parent Relationship: "Outer"                        +\n         Slice: 1                                            +\n         Segments: 3                                         +\n         Gang Type: "primary reader"                         +\n         Scan Direction: "Forward"                           +\n         Index Name: "names_idx_loc"                         +\n         Relation Name: "names"                              +\n         Alias: "names"                                      +\n         Startup Cost: 0.00                                  +\n         Total Cost: 7.77                                    +\n         Plan Rows: 10000                                    +\n         Plan Width: 70                                      +\n         Index Cond: "(location = \'Sydney, Australia\'::text)"+\n   Settings                                            +\n     Optimizer: "Pivotal Optimizer (GPORCA) version 3.23.0"\n(1 row)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(n.p,{children:["There is no ",(0,s.jsx)(n.code,{children:"EXPLAIN"})," statement defined in the SQL standard."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/sql-stmts/analyze",children:"ANALYZE"})})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var s=t(67294);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);