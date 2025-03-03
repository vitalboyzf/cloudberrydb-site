"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[3134],{77542:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var i=a(85893),s=a(11151);const t={title:"Create and Manage Views"},r="Create and Manage Views in Cloudberry Database",o={id:"create-and-manage-views",title:"Create and Manage Views",description:"In Cloudberry Database, views enable you to save frequently used or complex queries, then access them in a SELECT statement as if they were a table. A view is not physically materialized on disk: the query runs as a subquery when you access the view.",source:"@site/docs/create-and-manage-views.md",sourceDirName:".",slug:"/create-and-manage-views",permalink:"/docs/create-and-manage-views",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/create-and-manage-views.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1740637488,formattedLastUpdatedAt:"Feb 27, 2025",frontMatter:{title:"Create and Manage Views"},sidebar:"docsbars",previous:{title:"Create and Manage Schemas",permalink:"/docs/create-and-manage-schemas"},next:{title:"Create and Manage Materialized Views",permalink:"/docs/create-and-manage-materialized-views"}},c={},d=[{value:"Creating views",id:"creating-views",level:2},{value:"Dropping views",id:"dropping-views",level:2},{value:"Best practices when creating views",id:"best-practices-when-creating-views",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"create-and-manage-views-in-cloudberry-database",children:"Create and Manage Views in Cloudberry Database"}),"\n",(0,i.jsxs)(n.p,{children:["In Cloudberry Database, views enable you to save frequently used or complex queries, then access them in a ",(0,i.jsx)(n.code,{children:"SELECT"})," statement as if they were a table. A view is not physically materialized on disk: the query runs as a subquery when you access the view."]}),"\n",(0,i.jsx)(n.h2,{id:"creating-views",children:"Creating views"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"CREATE VIEW"}),"command defines a view of a query. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE VIEW comedies AS SELECT * FROM films WHERE kind = 'comedy';\n"})}),"\n",(0,i.jsx)(n.h2,{id:"dropping-views",children:"Dropping views"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"DROP VIEW"})," command removes a view. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DROP VIEW topten;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"DROP VIEW...CASCADE"})," command also removes all dependent objects. As an example, if another view depends on the view which is about to be dropped, the other view will be dropped as well. Without the ",(0,i.jsx)(n.code,{children:"CASCADE"})," option, the ",(0,i.jsx)(n.code,{children:"DROP VIEW"})," command will fail."]}),"\n",(0,i.jsx)(n.h2,{id:"best-practices-when-creating-views",children:"Best practices when creating views"}),"\n",(0,i.jsx)(n.p,{children:"When defining and using a view, remember that a view is just a SQL statement and is replaced by its definition when the query is run."}),"\n",(0,i.jsx)(n.p,{children:"These are some common uses of views."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"They allow you to have a recurring SQL query or expression in one place for easy reuse."}),"\n",(0,i.jsx)(n.li,{children:"They can be used as an interface to abstract from the actual table definitions, so that you can reorganize the tables without having to modify the interface."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If a subquery is associated with a single query, consider using the ",(0,i.jsx)(n.code,{children:"WITH"})," clause of the ",(0,i.jsx)(n.code,{children:"SELECT"})," command instead of creating a seldom-used view."]}),"\n",(0,i.jsx)(n.p,{children:"In general, these uses do not require nesting views, which means defining views based on other views."}),"\n",(0,i.jsx)(n.p,{children:"These are 2 patterns of creating views that tend to be problematic because the view's SQL is used during query execution."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Defining many layers of views so that your final queries look deceptively simple."}),"\n",(0,i.jsx)(n.p,{children:"Problems arise when you try to enhance or troubleshoot queries that use the views, for example, by examining the execution plan. The query's execution plan tends to be complicated and it is difficult to understand and how to improve it."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Defining a denormalized "world" view. A view that joins a large number of database tables that is used for a wide variety of queries.'}),"\n",(0,i.jsxs)(n.p,{children:["Performance issues can occur for some queries that use the view for some ",(0,i.jsx)(n.code,{children:"WHERE"})," conditions while other ",(0,i.jsx)(n.code,{children:"WHERE"})," conditions work well."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>r});var i=a(67294);const s={},t=i.createContext(s);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);