"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[8113],{6417:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=a(85893),s=a(11151);const r={title:"Choose the Table Storage Model"},n="Choose the Table Storage Model",i={id:"table-storage-models",title:"Choose the Table Storage Model",description:"Cloudberry Database supports several storage models and a mix of storage models. When you create a table, you choose how to store its data. This document explains the options for table storage and how to choose the best storage model for your workload.",source:"@site/docs/table-storage-models.md",sourceDirName:".",slug:"/table-storage-models",permalink:"/docs/table-storage-models",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/table-storage-models.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1740637488,formattedLastUpdatedAt:"Feb 27, 2025",frontMatter:{title:"Choose the Table Storage Model"},sidebar:"docsbars",previous:{title:"Concurrency Control for Transactions",permalink:"/docs/transactional-concurrency-control"},next:{title:"Geospatial Analytics",permalink:"/docs/advanced-analytics/postgis"}},l={},d=[{value:"Heap storage",id:"heap-storage",level:2},{value:"Append-optimized storage",id:"append-optimized-storage",level:2},{value:"To create a heap table",id:"to-create-a-heap-table",level:3},{value:"Choose row or column-oriented storage",id:"choose-row-or-column-oriented-storage",level:2},{value:"To create a column-oriented table",id:"to-create-a-column-oriented-table",level:3},{value:"Alter a table",id:"alter-a-table",level:2},{value:"Alter table distribution",id:"alter-table-distribution",level:3},{value:"Change the distribution policy",id:"change-the-distribution-policy",level:3},{value:"Redistribute table data",id:"redistribute-table-data",level:3},{value:"Drop a table",id:"drop-a-table",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"choose-the-table-storage-model",children:"Choose the Table Storage Model"}),"\n",(0,o.jsx)(t.p,{children:"Cloudberry Database supports several storage models and a mix of storage models. When you create a table, you choose how to store its data. This document explains the options for table storage and how to choose the best storage model for your workload."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#heap-storage",children:"Heap Storage"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#append-optimized-storage",children:"Append-Optimized Storage"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#choosing-row-or-column-oriented-storage",children:"Choosing Row or Column-Oriented Storage"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#altering-a-table",children:"Altering a Table"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#dropping-a-table",children:"Dropping a Table"})}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["To simplify the creation of database tables, you can specify the default values for some table storage options with the Cloudberry Database server configuration parameter ",(0,o.jsx)(t.code,{children:"gp_default_storage_options"}),"."]})}),"\n",(0,o.jsx)(t.h2,{id:"heap-storage",children:"Heap storage"}),"\n",(0,o.jsxs)(t.p,{children:["By default, Cloudberry Database uses the same heap storage model as PostgreSQL. Heap table storage works best with OLTP-type workloads where the data is often modified after it is initially loaded. ",(0,o.jsx)(t.code,{children:"UPDATE"})," and ",(0,o.jsx)(t.code,{children:"DELETE"})," operations require storing row-level versioning information to ensure reliable database transaction processing. Heap tables are best suited for smaller tables, such as dimension tables, that are often updated after they are initially loaded."]}),"\n",(0,o.jsx)(t.h2,{id:"append-optimized-storage",children:"Append-optimized storage"}),"\n",(0,o.jsxs)(t.p,{children:["Append-optimized table storage works best with denormalized fact tables in a data warehouse environment. Denormalized fact tables are typically the largest tables in the system. Fact tables are usually loaded in batches and accessed by read-only queries. Moving large fact tables to an append-optimized storage model eliminates the storage overhead of the per-row update visibility information. This allows for a leaner and easier-to-optimize page structure. The storage model of append-optimized tables is optimized for bulk data loading. Single row ",(0,o.jsx)(t.code,{children:"INSERT"})," statements are not recommended."]}),"\n",(0,o.jsx)(t.h3,{id:"to-create-a-heap-table",children:"To create a heap table"}),"\n",(0,o.jsx)(t.p,{children:"Row-oriented heap tables are the default storage type."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"=> CREATE TABLE foo (a int, b text) DISTRIBUTED BY (a);\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Use the ",(0,o.jsx)(t.code,{children:"WITH"})," clause of the ",(0,o.jsx)(t.code,{children:"CREATE TABLE"})," command to declare the table storage options. The default is to create the table as a regular row-oriented heap-storage table. For example, to create an append-optimized table with no compression:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"=> CREATE TABLE bar (a int, b text) \n\xa0\xa0\xa0 WITH (appendoptimized=true)\n\xa0\xa0\xa0 DISTRIBUTED BY (a);\n"})}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["You use the ",(0,o.jsx)(t.code,{children:"appendoptimized=value"})," syntax to specify the append-optimized table storage type. ",(0,o.jsx)(t.code,{children:"appendoptimized"})," is a thin alias for the ",(0,o.jsx)(t.code,{children:"appendonly"})," legacy storage option. Cloudberry Database stores ",(0,o.jsx)(t.code,{children:"appendonly"})," in the catalog, and displays the same when listing storage options for append-optimized tables."]})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"UPDATE"})," and ",(0,o.jsx)(t.code,{children:"DELETE"})," are not allowed on append-optimized tables in a repeatable read or serizalizable transaction and will cause the transaction to end prematurely."]}),"\n",(0,o.jsx)(t.h2,{id:"choose-row-or-column-oriented-storage",children:"Choose row or column-oriented storage"}),"\n",(0,o.jsx)(t.p,{children:"Cloudberry Database provides a choice of storage orientation models: row, column, or a combination of both. This section provides general guidelines for choosing the optimal storage orientation for a table. Evaluate performance using your own data and query workloads."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Row-oriented storage: good for OLTP types of workloads with many iterative transactions and many columns of a single row needed all at once, so retrieving is efficient."}),"\n",(0,o.jsx)(t.li,{children:"Column-oriented storage: good for data warehouse workloads with aggregations of data computed over a small number of columns, or for single columns that require regular updates without modifying other column data."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"For most general purpose or mixed workloads, row-oriented storage offers the best combination of flexibility and performance. However, there are use cases where a column-oriented storage model provides more efficient I/O and storage. Consider the following requirements when deciding on the storage orientation model for a table:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Updates of table data."})," If you load and update the table data frequently, choose a row-oriented heap table. Column-oriented table storage is only available on append-optimized tables."]}),"\n",(0,o.jsxs)(t.p,{children:["See ",(0,o.jsx)(t.a,{href:"#heap-storage",children:"Heap storage"})," for more information."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Frequent INSERTs."})," If rows are frequently inserted into the table, consider a row-oriented model. Column-oriented tables are not optimized for write operations, because column values for a row must be written to different places on disk."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Number of columns requested in queries."})," If you typically request all or the majority of columns in the ",(0,o.jsx)(t.code,{children:"SELECT"})," list or ",(0,o.jsx)(t.code,{children:"WHERE"})," clause of your queries, consider a row-oriented model. Column-oriented tables are best suited to queries that aggregate many values of a single column where the ",(0,o.jsx)(t.code,{children:"WHERE"})," or ",(0,o.jsx)(t.code,{children:"HAVING"})," predicate is also on the aggregate column. For example:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"SELECT SUM(salary)...\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"SELECT AVG(salary)... WHERE salary > 10000\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Or where the ",(0,o.jsx)(t.code,{children:"WHERE"})," predicate is on a single column and returns a relatively small number of rows. For example:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"SELECT salary, dept ... WHERE state='CA'\n"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Number of columns in the table."})," Row-oriented storage is more efficient when many columns are required at the same time, or when the row-size of a table is relatively small. Column-oriented tables can offer better query performance on tables with many columns where you access a small subset of columns in your queries."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Compression."})," Column data has the same data type, so storage size optimizations are available in column-oriented data that are not available in row-oriented data. For example, many compression schemes use the similarity of adjacent data to compress. However, the greater adjacent compression achieved, the more difficult random access can become, as data must be uncompressed to be read."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"to-create-a-column-oriented-table",children:"To create a column-oriented table"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"WITH"})," clause of the ",(0,o.jsx)(t.code,{children:"CREATE TABLE"})," command specifies the table's storage options. The default is a row-oriented heap table. Tables that use column-oriented storage must be append-optimized tables. For example, to create a column-oriented table:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"=> CREATE TABLE bar (a int, b text) WITH (appendoptimized=true, orientation=column) DISTRIBUTED BY (a);\n"})}),"\n",(0,o.jsx)(t.h2,{id:"alter-a-table",children:"Alter a table"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"ALTER TABLE"})," command changes the definition of a table. Use ",(0,o.jsx)(t.code,{children:"ALTER TABLE"})," to change table attributes such as column definitions, distribution policy, access method, storage parameters, and partition structure. For example, to add a not-null constraint to a table column:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"=> ALTER TABLE address ALTER COLUMN street SET NOT NULL;\n"})}),"\n",(0,o.jsx)(t.h3,{id:"alter-table-distribution",children:"Alter table distribution"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"ALTER TABLE"})," provides options to change a table's distribution policy. When the table distribution options change, the table data might be redistributed on disk, which can be resource-intensive. You can also redistribute table data using the existing distribution policy."]}),"\n",(0,o.jsx)(t.h3,{id:"change-the-distribution-policy",children:"Change the distribution policy"}),"\n",(0,o.jsxs)(t.p,{children:["For partitioned tables, changes to the distribution policy apply recursively to the child partitions. This operation preserves the ownership and all other attributes of the table. For example, the following command redistributes the table sales across all segments using the ",(0,o.jsx)(t.code,{children:"customer_id"})," column as the distribution key:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"ALTER TABLE sales SET DISTRIBUTED BY (customer_id); \n"})}),"\n",(0,o.jsxs)(t.p,{children:["When you change the hash distribution of a table, table data is automatically redistributed. Changing the distribution policy to a random distribution does not cause the data to be redistributed. For example, the following ",(0,o.jsx)(t.code,{children:"ALTER TABLE"})," command has no immediate effect:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"ALTER TABLE sales SET DISTRIBUTED RANDOMLY;\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Changing the distribution policy of a table to ",(0,o.jsx)(t.code,{children:"DISTRIBUTED REPLICATED"})," or from ",(0,o.jsx)(t.code,{children:"DISTRIBUTED REPLICATED"})," automatically redistributes the table data."]}),"\n",(0,o.jsx)(t.h3,{id:"redistribute-table-data",children:"Redistribute table data"}),"\n",(0,o.jsxs)(t.p,{children:["To redistribute table data for tables with a random distribution policy (or when the hash distribution policy has not changed) use ",(0,o.jsx)(t.code,{children:"REORGANIZE=TRUE"}),". Reorganizing data might be necessary to correct a data skew problem, or when segment resources are added to the system. For example, the following command redistributes table data across all segments using the current distribution policy, including random distribution."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"ALTER TABLE sales SET WITH (REORGANIZE=TRUE);\n"})}),"\n",(0,o.jsx)(t.h2,{id:"drop-a-table",children:"Drop a table"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"DROP TABLE"})," command removes tables from the database. For example:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"DROP TABLE mytable;\n"})}),"\n",(0,o.jsxs)(t.p,{children:["To empty a table of rows without removing the table definition, use ",(0,o.jsx)(t.code,{children:"DELETE"})," or ",(0,o.jsx)(t.code,{children:"TRUNCATE"}),". For example:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"DELETE FROM mytable;\n\nTRUNCATE mytable;\n"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"DROP TABLE"})," always removes any indexes, rules, triggers, and constraints that exist for the target table. Specify ",(0,o.jsx)(t.code,{children:"CASCADE"}),"to drop a table that is referenced by a view. ",(0,o.jsx)(t.code,{children:"CASCADE"})," removes dependent views."]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>n});var o=a(67294);const s={},r=o.createContext(s);function n(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);