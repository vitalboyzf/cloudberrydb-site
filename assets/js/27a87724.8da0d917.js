"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[615],{71680:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var r=n(85893),a=n(11151);const t={title:"Basic Query Syntax"},l="Basic Queries of Cloudberry Database",o={id:"basic-query-syntax",title:"Basic Query Syntax",description:"This document introduce the basic queries of Cloudberry Database.",source:"@site/docs/basic-query-syntax.md",sourceDirName:".",slug:"/basic-query-syntax",permalink:"/docs/basic-query-syntax",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/basic-query-syntax.md",tags:[],version:"current",lastUpdatedBy:"zhangfei",lastUpdatedAt:1740991732,formattedLastUpdatedAt:"Mar 3, 2025",frontMatter:{title:"Basic Query Syntax"},sidebar:"docsbars",previous:{title:"Connect to Database",permalink:"/docs/connect-to-cbdb"},next:{title:"Create and Manage Tablespaces",permalink:"/docs/create-and-manage-tablespaces"}},i={},d=[{value:"See also",id:"see-also",level:2}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"basic-queries-of-cloudberry-database",children:"Basic Queries of Cloudberry Database"}),"\n",(0,r.jsx)(s.p,{children:"This document introduce the basic queries of Cloudberry Database."}),"\n",(0,r.jsx)(s.p,{children:"Cloudberry Database is a high-performance, highly parallel data warehouse developed based on PostgreSQL and Greenplum. Here are some examples of the basic query syntax."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"SELECT"}),": Used to retrieve data from databases & tables."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM employees;  -- Queries all data in the employees table.\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Conditional query (",(0,r.jsx)(s.code,{children:"WHERE"}),"): Used to filter result sets based on certain conditions."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM employees WHERE salary > 50000;  -- Queries employee information with salary exceeding 50,000.\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"ORDER BY"}),": Used to sort query results by one or more columns."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM employees ORDER BY salary DESC;  -- Sorts employee information in descending order by salary.\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Aggregation functions: such as ",(0,r.jsx)(s.code,{children:"COUNT"}),", ",(0,r.jsx)(s.code,{children:"SUM"}),", ",(0,r.jsx)(s.code,{children:"AVG"}),", ",(0,r.jsx)(s.code,{children:"MAX"}),", ",(0,r.jsx)(s.code,{children:"MIN"}),", used for calculating statistics from datasets."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"SELECT AVG(salary) FROM employees;  -- Calculates the average salary of employees.\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"GROUP BY"}),": Used in conjunction with aggregation functions to group result sets."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"SELECT department, COUNT(*) FROM employees GROUP BY department;  -- Counts the number of employees by department.\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Limit the number of results (",(0,r.jsx)(s.code,{children:"LIMIT"}),"): used to limit the number of rows returned by the query result."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM employees LIMIT 10;  -- Only queries the information of the first 10 employees.\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Join query (",(0,r.jsx)(s.code,{children:"JOIN"}),"): used to combine data from two or more tables based on related columns."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"SELECT employees.name, departments.name \nFROM employees \nJOIN departments ON employees.department_id = departments.id;  -- Queries employees and their corresponding department names.\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Subquery: Nested queries in another SQL query."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"SELECT name FROM employees \nWHERE department_id IN (SELECT id FROM departments WHERE location = 'New York');  -- Queries all employees working in New York.\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"The above is just a brief overview of the basic query syntax in Cloudberry Database. Cloudberry Database also provides more advanced queries and functions to help developers perform complex data operations and analyses."}),"\n",(0,r.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/insert-update-delete-rows",children:"Insert, Update, and Delete Rows"})}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>l});var r=n(67294);const a={},t=r.createContext(a);function l(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);