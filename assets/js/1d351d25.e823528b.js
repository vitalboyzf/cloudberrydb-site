"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[4673],{62047:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>i});var s=o(85893),r=o(11151);const n={title:"DROP PROTOCOL"},a="DROP PROTOCOL",c={id:"sql-stmts/drop-protocol",title:"DROP PROTOCOL",description:"Removes a data access protocol from a database.",source:"@site/docs/sql-stmts/drop-protocol.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/drop-protocol",permalink:"/docs/sql-stmts/drop-protocol",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/drop-protocol.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733824616,formattedLastUpdatedAt:"Dec 10, 2024",frontMatter:{title:"DROP PROTOCOL"},sidebar:"docsbars",previous:{title:"DROP PROCEDURE",permalink:"/docs/sql-stmts/drop-procedure"},next:{title:"DROP RESOURCE GROUP",permalink:"/docs/sql-stmts/drop-resource-group"}},l={},i=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"drop-protocol",children:"DROP PROTOCOL"}),"\n",(0,s.jsx)(t.p,{children:"Removes a data access protocol from a database."}),"\n",(0,s.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"DROP PROTOCOL [IF EXISTS] <name>\n"})}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"DROP PROTOCOL"})," removes the specified protocol from a database. You specify a protocol name in the ",(0,s.jsx)(t.code,{children:"CREATE EXTERNAL TABLE"})," command to read data from or write data to an external data source."]}),"\n",(0,s.jsx)(t.p,{children:"You must be a superuser or the protocol owner to drop a protocol."}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Caution"})," If you drop a data access prococol, external tables that have been defined specifying the protocol will no longer be able to access the external data source."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"IF EXISTS"})})}),"\n",(0,s.jsx)(t.p,{children:"Do not throw an error if the protocol does not exist. Cloudberry Database issues a notice in this case."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"name"})})}),"\n",(0,s.jsx)(t.p,{children:"The name of an existing data access protocol."}),"\n",(0,s.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(t.p,{children:"Dropping a data access protocol, does not drop the protocol's call handlers. You must drop these functions manually."}),"\n",(0,s.jsx)(t.p,{children:"Be sure to remove any shared libraries that were used by the protocol from the Cloudberry Database hosts."}),"\n",(0,s.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"DROP PROTOCOL"})," is a Cloudberry Database extension."]}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/sql-stmts/create-external-table",children:"CREATE EXTERNAL TABLE"}),", ",(0,s.jsx)(t.a,{href:"/docs/sql-stmts/create-protocol",children:"CREATE PROTOCOL"})]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>c,a:()=>a});var s=o(67294);const r={},n=s.createContext(r);function a(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);