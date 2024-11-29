"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[2632],{95053:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=i(85893),a=i(11151);const s={title:"Create Unique Index on AO Table"},o="Create Unique Index on AO Table (New in v1.5.0)",r={id:"performance/use-unique-index-on-ao-tables",title:"Create Unique Index on AO Table",description:"Starting from v1.5.0, you can create a unique index on an Append-Optimized (AO) or Append-Optimized Column Store (AOCS) table in Cloudberry Database. With a unique index, Cloudberry Database checks the unique constraint when data is inserted into the AO table to ensure the uniqueness of the data. At the same time, the database optimizes specific queries with the optimizer to improve the query performance. However, this also brings some overhead for maintaining a unique index, especially when inserting data.",source:"@site/docs/performance/use-unique-index-on-ao-tables.md",sourceDirName:"performance",slug:"/performance/use-unique-index-on-ao-tables",permalink:"/zh/docs/performance/use-unique-index-on-ao-tables",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/performance/use-unique-index-on-ao-tables.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1732847277,formattedLastUpdatedAt:"2024\u5e7411\u670829\u65e5",frontMatter:{title:"Create Unique Index on AO Table"},sidebar:"docsbars",previous:{title:"Update Statistics",permalink:"/zh/docs/performance/update-stats-using-analyze"},next:{title:"Use Auto Materialized Views for Query Optimization",permalink:"/zh/docs/performance/use-auto-materialized-view-to-answer-queries"}},l={},d=[{value:"How it works",id:"how-it-works",level:2},{value:"How to add a unique index on an AO table",id:"how-to-add-a-unique-index-on-an-ao-table",level:2},{value:"Usage examples",id:"usage-examples",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"create-unique-index-on-ao-table-new-in-v150",children:"Create Unique Index on AO Table (New in v1.5.0)"}),"\n",(0,t.jsx)(n.p,{children:"Starting from v1.5.0, you can create a unique index on an Append-Optimized (AO) or Append-Optimized Column Store (AOCS) table in Cloudberry Database. With a unique index, Cloudberry Database checks the unique constraint when data is inserted into the AO table to ensure the uniqueness of the data. At the same time, the database optimizes specific queries with the optimizer to improve the query performance. However, this also brings some overhead for maintaining a unique index, especially when inserting data."}),"\n",(0,t.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,t.jsx)(n.p,{children:"For scenarios where a unique index exists in an AO table, when a tuple is inserted into the AO table, Cloudberry Database inserts a placeholder into the auxiliary index structure BlockDirectory of the AO table, which blocks the insertion of the same key and achieves a unique index."}),"\n",(0,t.jsx)(n.h2,{id:"how-to-add-a-unique-index-on-an-ao-table",children:"How to add a unique index on an AO table"}),"\n",(0,t.jsx)(n.p,{children:"You can add a unique index on an AO table in two ways. You can choose one according to your needs."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Specify a unique key or constraint while creating tables."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE foo(i int UNIQUE) USING ao_row;\nCREATE TABLE bar(i int UNIQUE) USING ao_column;\nCREATE TABLE foo2(i int, CONSTRAINT iuniq UNIQUE(i));\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add a unique index or constraint separately after creating the table."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE baz(i int) with (appendonly=true);\nCREATE UNIQUE INDEX on baz(i);\n\nCREATE TABLE foobar(i int) USING ao_row;\nALTER TABLE foobar ADD CONSTRAINT unique_i UNIQUE (i);\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"usage-examples",children:"Usage examples"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create an AO table with a unique constraint."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'postgres=# CREATE TABLE foo(i int UNIQUE) USING ao_row;\nCREATE TABLE\n\npostgres=# \\d foo\n                Table "public.foo"\nColumn |  Type   | Collation | Nullable | Default \n--------+---------+-----------+----------+---------\ni      | integer |           |          | \nCompression Type: None\nCompression Level: 0\nBlock Size: 32768\nChecksum: t\nIndexes:\n    "foo_i_key" UNIQUE CONSTRAINT, btree (i)\nDistributed by: (i)\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Inserting the same key value into the table will return the ",(0,t.jsx)(n.code,{children:"duplicate key"})," error."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'postgres=# INSERT INTO foo VALUES(1);\nINSERT 0 1\n\npostgres=# INSERT INTO foo VALUES(1);\nERROR:  duplicate key value violates unique constraint "foo_i_key"  (seg1 127.0.1.1:8003 pid=557)\nDETAIL:  Key (i)=(1) already exists.\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example of concurrent data insertion: At the READ COMMITTED transaction level, two transactions concurrently insert the same value into the same AO table. One succeeds and the other is blocked."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If one transaction succeeds, the other insertion fails"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"-- Session 1\npostgres=# BEGIN;\nBEGIN\n\npostgres=*# INSERT INTO foo VALUES(1);\nINSERT 0 1  -- Insertion successful\n\npostgres=*# COMMIT;\nCOMMIT\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'-- Session 2\npostgres=# BEGIN;\nBEGIN\n\npostgres=*# INSERT INTO foo VALUES(1);\nERROR:  duplicate key value violates unique constraint "foo_i_key"  (seg1 127.0.1.1:8003 pid=2726)\nDETAIL:  Key (i)=(1) already exists.  -- Insertion fails\n\npostgres=!# END;\nROLLBACK\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If one transaction insertion fails, the other transaction will succeed."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"postgres=# BEGIN;\nBEGIN\npostgres=*# INSERT INTO foo VALUES(1);\nINSERT 0 1\npostgres=*# ROLLBACK;\nROLLBACK\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"postgres=# BEGIN;\nBEGIN\npostgres=*# INSERT INTO foo VALUES(1);\nINSERT 0 1\npostgres=*# COMMIT;\nCOMMIT\n"})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>o});var t=i(67294);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);