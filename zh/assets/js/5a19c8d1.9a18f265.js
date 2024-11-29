"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[2125],{77732:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=s(85893),n=s(11151);const r={title:"CLUSTER"},i="CLUSTER",o={id:"sql-stmts/cluster",title:"CLUSTER",description:"Physically reorders a table on disk according to an index.",source:"@site/docs/sql-stmts/cluster.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/cluster",permalink:"/zh/docs/sql-stmts/cluster",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/cluster.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1732847277,formattedLastUpdatedAt:"2024\u5e7411\u670829\u65e5",frontMatter:{title:"CLUSTER"},sidebar:"docsbars",previous:{title:"CLOSE",permalink:"/zh/docs/sql-stmts/close"},next:{title:"COMMENT",permalink:"/zh/docs/sql-stmts/comment"}},l={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"cluster",children:"CLUSTER"}),"\n",(0,a.jsx)(t.p,{children:"Physically reorders a table on disk according to an index."}),"\n",(0,a.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"CLUSTER <indexname> ON <table_name>\n\nCLUSTER [VERBOSE] <table_name> [ USING <index_name> ]\n\nCLUSTER [VERBOSE]\n"})}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"CLUSTER"})," instructs Cloudberry Database to order the table specified by ",(0,a.jsx)(t.code,{children:"<table_name>"})," based on the index specified by ",(0,a.jsx)(t.code,{children:"<index_name>"}),". The index must already have been defined on ",(0,a.jsx)(t.code,{children:"<table_name>"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Cloudberry Database supports ",(0,a.jsx)(t.code,{children:"CLUSTER"})," operations on append-optimized tables only for B-tree indexes."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Note"})," Cloudberry Database 7 does not support ",(0,a.jsx)(t.code,{children:"CLUSTER"}),"ing a partitioned table."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["When a table is clustered, it is physically reordered on disk based on the index information. Clustering is a one-time operation: when the table is subsequently updated, the changes are not clustered. That is, no attempt is made to store new or updated rows according to their index order. If you wish, you can periodically recluster by issuing the command again. Setting the table's ",(0,a.jsx)(t.code,{children:"FILLFACTOR"})," storage parameter to less than 100% can aid in preserving cluster ordering during updates, because updated rows are kept on the same page if enough space is available there."]}),"\n",(0,a.jsxs)(t.p,{children:["When a table is clustered using this command, Cloudberry Database remembers on which index it was clustered. The form ",(0,a.jsx)(t.code,{children:"CLUSTER <table_name>"})," reclusters the table on the same index that it was clustered before. You can use the ",(0,a.jsx)(t.code,{children:"CLUSTER"})," or ",(0,a.jsx)(t.code,{children:"SET WITHOUT CLUSTER"})," forms of ",(0,a.jsx)(t.a,{href:"/zh/docs/sql-stmts/alter-table",children:"ALTER TABLE"})," to set the index to use for future cluster operations, or to clear any previous setting. ",(0,a.jsx)(t.code,{children:"CLUSTER"})," without any parameter reclusters all previously clustered tables in the current database that the calling user owns, or all tables if called by a superuser. This form of ",(0,a.jsx)(t.code,{children:"CLUSTER"})," cannot be run inside a transaction block."]}),"\n",(0,a.jsxs)(t.p,{children:["When a table is being clustered, an ",(0,a.jsx)(t.code,{children:"ACCESS EXCLUSIVE"})," lock is acquired on it. This prevents any other database operations (both reads and writes) from operating on the table until the ",(0,a.jsx)(t.code,{children:"CLUSTER"})," is finished."]}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"index_name"})})}),"\n",(0,a.jsx)(t.p,{children:"The name of an index."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"VERBOSE"})})}),"\n",(0,a.jsx)(t.p,{children:"Prints a progress report as each table is clustered."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"table_name"})})}),"\n",(0,a.jsx)(t.p,{children:"The name (optionally schema-qualified) of a table."}),"\n",(0,a.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsxs)(t.p,{children:["If the records you need are distributed randomly on disk, then the database has to seek across the disk to get the records requested. If those records are stored more closely together, then the fetching from disk is more sequential. In cases where you are accessing single rows randomly within a table, the actual order of the data in the table is unimportant. However, if you tend to access some data more than others, and there is an index that groups them together, you will benefit from using ",(0,a.jsx)(t.code,{children:"CLUSTER"}),". If you are requesting a range of indexed values from a table, or a single indexed value that has multiple rows that match, ",(0,a.jsx)(t.code,{children:"CLUSTER"})," will help because once the index identifies the table page for the first row that matches, all other rows that match are probably already on the same table page, and so you save disk accesses and speed up the query. A good example for a clustered index is on a date column where the data is ordered sequentially by date. A query against a specific date range will result in an ordered fetch from the disk, which leverages faster sequential access."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"CLUSTER"})," can re-sort the table using either an index scan on the specified index, or (if the index is a b-tree) a sequential scan followed by sorting. It will attempt to choose the method that will be faster, based on planner cost parameters and available statistical information."]}),"\n",(0,a.jsx)(t.p,{children:"When an index scan is used, a temporary copy of the table is created that contains the table data in the index order. Temporary copies of each index on the table are created as well. Therefore, you need free space on disk at least equal to the sum of the table size and the index sizes."}),"\n",(0,a.jsxs)(t.p,{children:["When a sequential scan and sort is used, a temporary sort file is also created, so that the peak temporary space requirement is as much as double the table size, plus the index sizes. This method is often faster than the index scan method, but if the disk space requirement is intolerable, you can deactivate this choice by temporarily setting the enable_sort configuration parameter to ",(0,a.jsx)(t.code,{children:"off"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["It is advisable to set the maintenance_work_mem configuration parameter to a reasonably large value (but not more than the amount of RAM you can dedicate to the ",(0,a.jsx)(t.code,{children:"CLUSTER"})," operation) before clustering."]}),"\n",(0,a.jsxs)(t.p,{children:["Because the query optimizer records statistics about the ordering of tables, it is advisable to run ",(0,a.jsx)(t.a,{href:"/zh/docs/sql-stmts/analyze",children:"ANALYZE"})," on the newly clustered table. Otherwise, the planner may make poor query plan choices."]}),"\n",(0,a.jsxs)(t.p,{children:["Because ",(0,a.jsx)(t.code,{children:"CLUSTER"})," remembers which indexes are clustered, you can cluster the tables you want clustered manually the first time, then set up a periodic maintenance script that runs ",(0,a.jsx)(t.code,{children:"CLUSTER"})," without any parameters, so that the desired tables are periodically reclustered."]}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(t.p,{children:["Cluster the table ",(0,a.jsx)(t.code,{children:"employees"})," on the basis of its index ",(0,a.jsx)(t.code,{children:"emp_ind"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"CLUSTER emp_ind ON emp;\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Cluster the ",(0,a.jsx)(t.code,{children:"employees"})," table using the same index that was used before:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"CLUSTER employees;\n"})}),"\n",(0,a.jsx)(t.p,{children:"Cluster all tables in the database that have previously been clustered:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"CLUSTER;\n"})}),"\n",(0,a.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,a.jsxs)(t.p,{children:["There is no ",(0,a.jsx)(t.code,{children:"CLUSTER"})," statement in the SQL standard."]}),"\n",(0,a.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/zh/docs/sql-stmts/create-table-as",children:"CREATE TABLE AS"}),", ",(0,a.jsx)(t.a,{href:"/zh/docs/sql-stmts/create-index",children:"CREATE INDEX"})]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>i});var a=s(67294);const n={},r=a.createContext(n);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);