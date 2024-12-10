"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[8854],{64186:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(85893),r=t(11151);const i={title:"SHOW"},a="SHOW",o={id:"sql-stmts/show",title:"SHOW",description:"Shows the value of a run-time system configuration parameter.",source:"@site/docs/sql-stmts/show.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/show",permalink:"/zh/docs/sql-stmts/show",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/show.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733824616,formattedLastUpdatedAt:"2024\u5e7412\u670810\u65e5",frontMatter:{title:"SHOW"},sidebar:"docsbars",previous:{title:"SET",permalink:"/zh/docs/sql-stmts/set"},next:{title:"START TRANSACTION",permalink:"/zh/docs/sql-stmts/start-transaction"}},c={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"show",children:"SHOW"}),"\n",(0,n.jsx)(s.p,{children:"Shows the value of a run-time system configuration parameter."}),"\n",(0,n.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SHOW <name>\n\nSHOW ALL\n"})}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"SHOW"})," displays the current settings of Cloudberry Database run-time system configuration parameters. You can set these parameters with the ",(0,n.jsx)(s.code,{children:"SET"})," statement, by editing the ",(0,n.jsx)(s.code,{children:"postgresql.conf"})," configuration file of the Cloudberry Database coordinator, through the ",(0,n.jsx)(s.code,{children:"PGOPTIONS"})," environment variable (when using libpq or a libpq-based application), or through command-line flags when starting the Cloudberry Database server."]}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"name"})})}),"\n",(0,n.jsx)(s.p,{children:"The name of a run-time system configuration parameter."}),"\n",(0,n.jsxs)(s.p,{children:["Some parameters viewable by ",(0,n.jsx)(s.code,{children:"SHOW"})," are read-only \u2014 you can view their values but not set them:"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"SERVER_VERSION"})})}),"\n",(0,n.jsx)(s.p,{children:"Shows the version number of the Cloudberry Database server."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"SERVER_ENCODING"})})}),"\n",(0,n.jsx)(s.p,{children:"Shows the server-side character set encoding. You can show, but not set, this parameter because the encoding is determined at database creation time."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"LC_COLLATE"})})}),"\n",(0,n.jsx)(s.p,{children:"Shows the database's locale setting for collation (text ordering). You can show, but not set, this parameter because the setting is determined at database creation time."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"LC_CTYPE"})})}),"\n",(0,n.jsx)(s.p,{children:"Shows the database's locale setting for character classification; You can show, but not set, this parameter because the setting is determined at database creation time."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"IS_SUPERUSER"})})}),"\n",(0,n.jsx)(s.p,{children:"True if the current role has superuser privileges."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"ALL"})})}),"\n",(0,n.jsx)(s.p,{children:"Shows the current value of all configuration parameters, with descriptions."}),"\n",(0,n.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsxs)(s.p,{children:["The function ",(0,n.jsx)(s.code,{children:"current_setting()"})," produces equivalent output; see ",(0,n.jsx)(s.a,{href:"https://www.postgresql.org/docs/12/functions-admin.html",children:"System Administration Functions"})," in the PostgreSQL documentation. Also, the ",(0,n.jsx)(s.a,{href:"https://www.postgresql.org/docs/12/view-pg-settings.html",children:"pg_settings"})," system view produces the same information."]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(s.p,{children:["Show the current setting of the parameter ",(0,n.jsx)(s.code,{children:"DateStyle"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SHOW DateStyle;\n DateStyle\n-----------\n ISO, MDY\n(1 row)\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Show the current setting of the parameter ",(0,n.jsx)(s.code,{children:"row_security"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SHOW row_security;\n row_security\n--------------\n on\n(1 row)\n"})}),"\n",(0,n.jsx)(s.p,{children:"Show the current setting of all parameters:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SHOW ALL;\n       name       | setting |                  description\n-----------------+---------+----------------------------------------------------\n application_name | psql    | Sets the application name to be reported in sta...\n\n ...\n\n xmlbinary        | base64  | Sets how binary values are to be encoded in XML.\n xmloption        | content | Sets whether XML data in implicit parsing and s...\n(473 rows)\n"})}),"\n",(0,n.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"SHOW"})," command is a Cloudberry Database extension."]}),"\n",(0,n.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/zh/docs/sql-stmts/set",children:"SET"}),", ",(0,n.jsx)(s.a,{href:"/zh/docs/sql-stmts/reset",children:"RESET"})]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>o,a:()=>a});var n=t(67294);const r={},i=n.createContext(r);function a(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);