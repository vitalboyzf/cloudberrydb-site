"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[9600],{40835:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=s(85893),i=s(11151);const r={title:"ALTER STATISTICS"},a="ALTER STATISTICS",c={id:"sql-stmts/alter-statistics",title:"ALTER STATISTICS",description:"Changes the definition of an extended statistics object.",source:"@site/docs/sql-stmts/alter-statistics.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/alter-statistics",permalink:"/zh/docs/sql-stmts/alter-statistics",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/alter-statistics.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733824616,formattedLastUpdatedAt:"2024\u5e7412\u670810\u65e5",frontMatter:{title:"ALTER STATISTICS"},sidebar:"docsbars",previous:{title:"ALTER SERVER",permalink:"/zh/docs/sql-stmts/alter-server"},next:{title:"ALTER TABLE",permalink:"/zh/docs/sql-stmts/alter-table"}},o={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"alter-statistics",children:"ALTER STATISTICS"}),"\n",(0,n.jsx)(t.p,{children:"Changes the definition of an extended statistics object."}),"\n",(0,n.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"ALTER STATISTICS <name> RENAME TO <new_name>\n\nALTER STATISTICS <name> OWNER TO { <new_owner> | CURRENT_USER | SESSION_USER }\n\nALTER STATISTICS <name> SET SCHEMA <new_schema>\n"})}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"ALTER STATISTICS"})," changes the parameters of an existing extended statistics object. Any parameters not specifically set in the ",(0,n.jsx)(t.code,{children:"ALTER STATISTICS"})," command retain their prior settings."]}),"\n",(0,n.jsxs)(t.p,{children:["You must own the statistics object to use ",(0,n.jsx)(t.code,{children:"ALTER STATISTICS"}),". To change a statistics object's schema, you must also have ",(0,n.jsx)(t.code,{children:"CREATE"})," privilege on the new schema. To alter the owner, you must also be a direct or indirect member of the new owning role, and that role must have ",(0,n.jsx)(t.code,{children:"CREATE"})," privilege on the statistics object's schema. (These restrictions enforce that altering the owner doesn't do anything you couldn't do by dropping and recreating the statistics object. However, a superuser can alter ownership of any statistics object anyway.)"]}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"name"})})}),"\n",(0,n.jsx)(t.p,{children:"The name (optionally schema-qualified) of the statistics object to be altered."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"new_owner"})})}),"\n",(0,n.jsx)(t.p,{children:"The user name of the new owner of the statistics object."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"new_name"})})}),"\n",(0,n.jsx)(t.p,{children:"The new name for the statistics object."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"new_schema"})})}),"\n",(0,n.jsx)(t.p,{children:"The new schema for the statistics object."}),"\n",(0,n.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(t.p,{children:["There is no ",(0,n.jsx)(t.code,{children:"ALTER STATISTICS"})," statement in the SQL standard."]}),"\n",(0,n.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/zh/docs/sql-stmts/create-statistics",children:"CREATE STATISTICS"}),", ",(0,n.jsx)(t.a,{href:"/zh/docs/sql-stmts/drop-statistics",children:"DROP STATISTICS"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>a});var n=s(67294);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);