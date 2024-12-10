"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[2307],{56159:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var n=s(85893),r=s(11151);const a={title:"ALTER TEXT SEARCH TEMPLATE"},i="ALTER TEXT SEARCH TEMPLATE",l={id:"sql-stmts/alter-text-search-template",title:"ALTER TEXT SEARCH TEMPLATE",description:"Description",source:"@site/docs/sql-stmts/alter-text-search-template.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/alter-text-search-template",permalink:"/docs/sql-stmts/alter-text-search-template",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/alter-text-search-template.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733824616,formattedLastUpdatedAt:"Dec 10, 2024",frontMatter:{title:"ALTER TEXT SEARCH TEMPLATE"},sidebar:"docsbars",previous:{title:"ALTER TEXT SEARCH PARSER",permalink:"/docs/sql-stmts/alter-text-search-parser"},next:{title:"ALTER TRIGGER",permalink:"/docs/sql-stmts/alter-trigger"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description-1",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"alter-text-search-template",children:"ALTER TEXT SEARCH TEMPLATE"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Changes the definition of a text search template."}),"\n",(0,n.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"ALTER TEXT SEARCH TEMPLATE <name> RENAME TO <new_name>\nALTER TEXT SEARCH TEMPLATE <name> SET SCHEMA <new_schema>\n"})}),"\n",(0,n.jsx)(t.h2,{id:"description-1",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"ALTER TEXT SEARCH TEMPLATE"})," changes the definition of a text search parser. Currently, the only supported functionality is to change the template's name."]}),"\n",(0,n.jsxs)(t.p,{children:["You must be a superuser to use ",(0,n.jsx)(t.code,{children:"ALTER TEXT SEARCH TEMPLATE"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"name"})})}),"\n",(0,n.jsx)(t.p,{children:"The name (optionally schema-qualified) of an existing text search template."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"new_name"})})}),"\n",(0,n.jsx)(t.p,{children:"The new name of the text search template."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"new_schema"})})}),"\n",(0,n.jsx)(t.p,{children:"The new schema for the text search template."}),"\n",(0,n.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(t.p,{children:["There is no ",(0,n.jsx)(t.code,{children:"ALTER TEXT SEARCH TEMPLATE"})," statement in the SQL standard."]}),"\n",(0,n.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/sql-stmts/create-text-search-template",children:"CREATE TEXT SEARCH TEMPLATE"}),", ",(0,n.jsx)(t.a,{href:"/docs/sql-stmts/drop-text-search-template",children:"DROP TEXT SEARCH TEMPLATE"})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>i});var n=s(67294);const r={},a=n.createContext(r);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);