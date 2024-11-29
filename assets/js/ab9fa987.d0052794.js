"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[2909],{23482:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(85893),s=a(11151);const r={title:"Insert, Update, and Delete Rows"},i="Insert, Update, and Delete Row Data in Cloudberry Database",o={id:"insert-update-delete-rows",title:"Insert, Update, and Delete Rows",description:"This document introduces how to manipulate row data in Cloudberry Database, including:",source:"@site/docs/insert-update-delete-rows.md",sourceDirName:".",slug:"/insert-update-delete-rows",permalink:"/docs/insert-update-delete-rows",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/insert-update-delete-rows.md",tags:[],version:"current",lastUpdatedBy:"Ed Espino",lastUpdatedAt:1732764009,formattedLastUpdatedAt:"Nov 28, 2024",frontMatter:{title:"Insert, Update, and Delete Rows"},sidebar:"docsbars",previous:{title:"Create and Manage Materialized Views",permalink:"/docs/create-and-manage-materialized-views"},next:{title:"Work with Transactions",permalink:"/docs/work-with-transactions"}},l={},d=[{value:"Insert rows",id:"insert-rows",level:2},{value:"Insert rows into partitioned tables",id:"insert-rows-into-partitioned-tables",level:3},{value:"Insert rows into append-optimized tables",id:"insert-rows-into-append-optimized-tables",level:3},{value:"Update existing rows",id:"update-existing-rows",level:2},{value:"Delete rows",id:"delete-rows",level:2},{value:"Truncate a table",id:"truncate-a-table",level:3},{value:"Vacuum the database",id:"vacuum-the-database",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"insert-update-and-delete-row-data-in-cloudberry-database",children:"Insert, Update, and Delete Row Data in Cloudberry Database"}),"\n",(0,n.jsx)(t.p,{children:"This document introduces how to manipulate row data in Cloudberry Database, including:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#insert-rows",children:"Inserting rows"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#update-existing-rows",children:"Updating existing rows"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#delete-rows",children:"Deleting rows"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#truncate-a-table",children:"Truncating a table"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#vacuum-the-database",children:"Vacuuming the database"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"insert-rows",children:"Insert rows"}),"\n",(0,n.jsxs)(t.p,{children:["Use the ",(0,n.jsx)(t.code,{children:"INSERT"})," command to create rows in a table. This command requires the table name and a value for each column in the table; you might optionally specify the column names in any order. If you do not specify column names, list the data values in the order of the columns in the table, separated by commas."]}),"\n",(0,n.jsx)(t.p,{children:"For example, to specify the column names and the values to insert:\ninsert"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"INSERT INTO products (name, price, product_no) VALUES ('Cheese', 9.99, 1);\n"})}),"\n",(0,n.jsx)(t.p,{children:"To specify only the values to insert:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"INSERT INTO products VALUES (1, 'Cheese', 9.99);\n"})}),"\n",(0,n.jsx)(t.p,{children:"Usually, the data values are literals (constants), but you can also use scalar expressions. For example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"INSERT INTO films SELECT * FROM tmp_films WHERE date_prod < \n'2016-05-07';\n"})}),"\n",(0,n.jsx)(t.p,{children:"You can insert multiple rows in a single command. For example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"INSERT INTO products (product_no, name, price) VALUES\n    (1, 'Cheese', 9.99),\n    (2, 'Bread', 1.99),\n    (3, 'Milk', 2.99);\n"})}),"\n",(0,n.jsx)(t.h3,{id:"insert-rows-into-partitioned-tables",children:"Insert rows into partitioned tables"}),"\n",(0,n.jsxs)(t.p,{children:["To insert data into a partitioned table, you are expected to specify the root partitioned table that was created with the ",(0,n.jsx)(t.code,{children:"CREATE TABLE"})," command. Directly specifying a leaf partition in an ",(0,n.jsx)(t.code,{children:"INSERT"})," command is not supported, and attempting to do so will cause an error, because leaf partitions are invisible to users and data insertion is managed automatically by the database system."]}),"\n",(0,n.jsx)(t.p,{children:"An error will be returned if the data being inserted does not fit the range of any existing partitions (for example, the specified key value does not match any partition rules)."}),"\n",(0,n.jsxs)(t.p,{children:["To ensure data is correctly inserted into a partitioned table, you only need to specify the root partitioned table in your ",(0,n.jsx)(t.code,{children:"INSERT"})," statement. The database system will automatically insert the data row into the appropriate leaf partition based on the partition key. If a data row does not conform to the range of any leaf partition, the database will return an error."]}),"\n",(0,n.jsx)(t.p,{children:"Example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"-- Inserting data into the root partitioned table\nINSERT INTO sales (sale_id, product_no, year, amount) VALUES (1, 'Cheese', 2021, 9.99);\n"})}),"\n",(0,n.jsx)(t.p,{children:"The above statement will automatically insert the data row into the correct partition based on the value of the year column. You should not, and need not, attempt to directly specify any leaf partition for data insertion."}),"\n",(0,n.jsx)(t.h3,{id:"insert-rows-into-append-optimized-tables",children:"Insert rows into append-optimized tables"}),"\n",(0,n.jsxs)(t.p,{children:["To insert large amounts of data, use external tables or the ",(0,n.jsx)(t.code,{children:"COPY"})," command. These load mechanisms are more efficient than ",(0,n.jsx)(t.code,{children:"INSERT"})," for inserting many rows."]}),"\n",(0,n.jsxs)(t.p,{children:["The storage model of append-optimized tables in Cloudberry Database is designed for efficient bulk data loading rather than single row ",(0,n.jsx)(t.code,{children:"INSERT"})," statements. For high-volume data insertions, it is recommended to use batch loading methods such as the ",(0,n.jsx)(t.code,{children:"COPY"})," command. Cloudberry Database can support multiple concurrent ",(0,n.jsx)(t.code,{children:"INSERT"})," transactions on append-optimized tables; however, this capability is typically intended for batch insertions rather than single-row operations."]}),"\n",(0,n.jsx)(t.h2,{id:"update-existing-rows",children:"Update existing rows"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"UPDATE"})," command updates rows in a table. You can update all rows, a subset of all rows, or individual rows in a table. You can update each column separately without affecting other columns."]}),"\n",(0,n.jsx)(t.p,{children:"To perform an update, you need:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The name of the table and columns to update."}),"\n",(0,n.jsx)(t.li,{children:"The new values of the columns."}),"\n",(0,n.jsx)(t.li,{children:"One or more conditions specifying the row or rows to be updated."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For example, the following command updates all products that have a price of ",(0,n.jsx)(t.em,{children:"5"})," to have a price of ",(0,n.jsx)(t.em,{children:"10"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"UPDATE products SET price = 10 WHERE price = 5;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"delete-rows",children:"Delete rows"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"DELETE"})," command deletes rows from a table. Specify a ",(0,n.jsx)(t.code,{children:"WHERE"})," clause to delete rows that match certain criteria. If you do not specify a ",(0,n.jsx)(t.code,{children:"WHERE"})," clause, all rows in the table are deleted. The result is a valid, but empty, table. For example, to remove all rows from the products table that have a price of ",(0,n.jsx)(t.em,{children:"10"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"DELETE FROM products WHERE price = 10;\n"})}),"\n",(0,n.jsx)(t.p,{children:"To delete all rows from a table:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"DELETE FROM products;\n"})}),"\n",(0,n.jsx)(t.h3,{id:"truncate-a-table",children:"Truncate a table"}),"\n",(0,n.jsxs)(t.p,{children:["Use the ",(0,n.jsx)(t.code,{children:"TRUNCATE"})," command to quickly remove all rows in a table. For example:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"TRUNCATE mytable;\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This command empties a table of all rows in one operation. Note that in Cloudberry Database, the ",(0,n.jsx)(t.code,{children:"TRUNCATE"})," command will affect inherited child tables by default, even without using the ",(0,n.jsx)(t.code,{children:"CASCADE"})," option. In addition, because Cloudberry Database does not support foreign key constraints, the ",(0,n.jsx)(t.code,{children:"TRUNCATE"})," command will not trigger any ",(0,n.jsx)(t.code,{children:"ON DELETE"})," actions or rewrite rules. The command truncates only rows in the named table."]}),"\n",(0,n.jsx)(t.h2,{id:"vacuum-the-database",children:"Vacuum the database"}),"\n",(0,n.jsxs)(t.p,{children:["Deleted or updated data rows occupy physical space on disk even though new transactions cannot see them. Periodically running the ",(0,n.jsx)(t.code,{children:"VACUUM"})," command removes these expired rows. For example:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"VACUUM mytable;\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"VACUUM"})," command collects table-level statistics such as the number of rows and pages. Vacuum all tables after loading data, including append-optimized tables."]}),"\n",(0,n.jsxs)(t.p,{children:["You need to use the ",(0,n.jsx)(t.code,{children:"VACUUM"}),", ",(0,n.jsx)(t.code,{children:"VACUUM FULL"}),", and ",(0,n.jsx)(t.code,{children:"VACUUM ANALYZE"})," commands to maintain the data in a Cloudberry Database especially if updates and deletes are frequently performed on your database data."]}),"\n",(0,n.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/work-with-transactions",children:"Work with Transactions"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/transactional-concurrency-control",children:"Transactional Concurrency Control"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>i});var n=a(67294);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);