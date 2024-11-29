"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[3078],{80685:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>E});var s=t(85893),a=t(11151);const i={title:"ALTER USER"},r="ALTER USER",o={id:"sql-stmts/alter-user",title:"ALTER USER",description:"Changes the definition of a database role.",source:"@site/docs/sql-stmts/alter-user.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/alter-user",permalink:"/docs/sql-stmts/alter-user",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/alter-user.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1732847277,formattedLastUpdatedAt:"Nov 29, 2024",frontMatter:{title:"ALTER USER"},sidebar:"docsbars",previous:{title:"ALTER USER MAPPING",permalink:"/docs/sql-stmts/alter-user-mapping"},next:{title:"ALTER VIEW",permalink:"/docs/sql-stmts/alter-view"}},l={},E=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"alter-user",children:"ALTER USER"}),"\n",(0,s.jsx)(n.p,{children:"Changes the definition of a database role."}),"\n",(0,s.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER USER <role_specification> [WITH] <option> [ ... ]\n\n-- where option can be:\n\n      SUPERUSER | NOSUPERUSER\n    | CREATEDB | NOCREATEDB\n    | CREATEROLE | NOCREATEROLE\n\xa0\xa0\xa0\xa0| CREATEEXTTABLE | NOCREATEEXTTABLE \n\xa0\xa0\xa0\xa0\xa0\xa0[ ( <attribute>='<value>'[, ...] ) ]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0where <attributes> and <value> are:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0type='readable'|'writable'\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0protocol='gpfdist'|'http'\n\xa0\xa0\xa0\xa0| INHERIT | NOINHERIT\n    | LOGIN | NOLOGIN\n    | REPLICATION | NOREPLICATION\n    | BYPASSRLS | NOBYPASSRLS\n    | CONNECTION LIMIT <connlimit>\n    | [ENCRYPTED ] PASSWORD '<password>' | PASSWORD NULL\n    | VALID UNTIL '<timestamp>'\n    | [ DENY <deny_point> ]\n    | [ DENY BETWEEN <deny_point> AND <deny_point>]\n    | [ DROP DENY FOR <deny_point> ]\n\nALTER USER <name> RENAME TO <new_name>\n\nALTER USER <name> RESOURCE QUEUE {<queue_name> | NONE}\n\nALTER USER <name> RESOURCE GROUP {<group_name> | NONE}\n\nALTER USER { <role_specification> | ALL } [ IN DATABASE <database_name> ] SET <configuration_parameter> {TO | =} {<value> | DEFAULT}\nALTER USER { <role_specification> | ALL } [ IN DATABASE <database_name> ] SET <configuration_parameter> FROM CURRENT\nALTER USER { <role_specification> | ALL } [ IN DATABASE <database_name> ] RESET <configuration_parameter>\nALTER USER { <role_specification> | ALL } [ IN DATABASE <database_name> ] RESET ALL\n\n-- where <role_specification> can be:\n\n    role_name\n  | CURRENT_USER\n  | SESSION_USER\n"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ALTER USER"})," is an alias for ",(0,s.jsx)(n.a,{href:"/docs/sql-stmts/alter-role",children:"ALTER ROLE"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ALTER USER"})," statement is a Cloudberry Database extension. The SQL standard leaves the definition of users to the implementation."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/sql-stmts/alter-role",children:"ALTER ROLE"})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var s=t(67294);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);