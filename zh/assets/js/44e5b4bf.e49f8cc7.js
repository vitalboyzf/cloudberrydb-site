"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[9234],{64965:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(85893),t=n(11151);const a={title:"CREATE USER MAPPING"},i="CREATE USER MAPPING",o={id:"sql-stmts/create-user-mapping",title:"CREATE USER MAPPING",description:"Defines a new mapping of a user to a foreign server.",source:"@site/docs/sql-stmts/create-user-mapping.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/create-user-mapping",permalink:"/zh/docs/sql-stmts/create-user-mapping",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/create-user-mapping.md",tags:[],version:"current",lastUpdatedBy:"zhangfei",lastUpdatedAt:1738720921,formattedLastUpdatedAt:"2025\u5e742\u67085\u65e5",frontMatter:{title:"CREATE USER MAPPING"},sidebar:"docsbars",previous:{title:"CREATE TYPE",permalink:"/zh/docs/sql-stmts/create-type"},next:{title:"CREATE USER",permalink:"/zh/docs/sql-stmts/create-user"}},c={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"create-user-mapping",children:"CREATE USER MAPPING"}),"\n",(0,r.jsx)(s.p,{children:"Defines a new mapping of a user to a foreign server."}),"\n",(0,r.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"CREATE USER MAPPING [ IF NOT EXISTS ] FOR { <user_name> | USER | CURRENT_USER | PUBLIC }\n    SERVER <server_name>\n    [ OPTIONS ( <option> '<value>' [, ... ] ) ]\n"})}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"CREATE USER MAPPING"})," defines a mapping of a user to a foreign server. A user mapping typically encapsulates connection information that a foreign-data wrapper uses together with the information encapsulated by a foreign server to access an external data resource."]}),"\n",(0,r.jsxs)(s.p,{children:["The owner of a foreign server can create user mappings for that server for any user. Also, a user can create a user mapping for their own user name if they have been granted ",(0,r.jsx)(s.code,{children:"USAGE"})," privilege on the server."]}),"\n",(0,r.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"IF NOT EXISTS"})})}),"\n",(0,r.jsx)(s.p,{children:"Do not throw an error if a mapping of the given user to the given foreign server already exists. Cloudberry Database issues a notice in this case. Note that there is no guarantee that the existing user mapping is anything like the one that would have been created."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"user_name"})})}),"\n",(0,r.jsxs)(s.p,{children:["The name of an existing user that is mapped to the foreign server. ",(0,r.jsx)(s.code,{children:"CURRENT_USER"})," and ",(0,r.jsx)(s.code,{children:"USER"})," match the name of the current user. When ",(0,r.jsx)(s.code,{children:"PUBLIC"})," is specified, Cloudberry Database creates a so-called public mapping that is used when no user-specific mapping is applicable."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"server_name"})})}),"\n",(0,r.jsx)(s.p,{children:"The name of an existing server for which Cloudberry Database is to create the user mapping."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"OPTIONS ( option 'value' [, ... ] )"})})}),"\n",(0,r.jsx)(s.p,{children:"The options for the new user mapping. The options typically define the actual user name and password of the mapping. Option names must be unique. The option names and values are specific to the server's foreign-data wrapper."}),"\n",(0,r.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(s.p,{children:["Create a user mapping for user ",(0,r.jsx)(s.code,{children:"bob"}),", server ",(0,r.jsx)(s.code,{children:"foo"}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"CREATE USER MAPPING FOR bob SERVER foo OPTIONS (user 'bob', password 'secret');\n"})}),"\n",(0,r.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"CREATE USER MAPPING"})," conforms to ISO/IEC 9075-9 (SQL/MED)."]}),"\n",(0,r.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/alter-user-mapping",children:"ALTER USER MAPPING"}),", ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/drop-user-mapping",children:"DROP USER MAPPING"}),", ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/create-foreign-data-wrapper",children:"CREATE FOREIGN DATA WRAPPER"}),", ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/create-server",children:"CREATE SERVER"})]})]})}function p(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>i});var r=n(67294);const t={},a=r.createContext(t);function i(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);