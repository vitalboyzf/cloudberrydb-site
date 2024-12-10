"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[2036],{15277:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=t(85893),n=t(11151);const r={title:"CREATE DATABASE"},i="CREATE DATABASE",o={id:"sql-stmts/create-database",title:"CREATE DATABASE",description:"Creates a new database.",source:"@site/docs/sql-stmts/create-database.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/create-database",permalink:"/docs/sql-stmts/create-database",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/create-database.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733824616,formattedLastUpdatedAt:"Dec 10, 2024",frontMatter:{title:"CREATE DATABASE"},sidebar:"docsbars",previous:{title:"CREATE CONVERSION",permalink:"/docs/sql-stmts/create-conversion"},next:{title:"CREATE DOMAIN",permalink:"/docs/sql-stmts/create-domain"}},c={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"create-database",children:"CREATE DATABASE"}),"\n",(0,a.jsx)(s.p,{children:"Creates a new database."}),"\n",(0,a.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sql",children:"CREATE DATABASE name\n    [ [WITH] [OWNER [=] <user_name>]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[TEMPLATE [=] <template>]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[TABLESPACE [=] <tablespace_name>]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[ALLOW_CONNECTIONS [=] <allowconn>]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[CONNECTION LIMIT [=] <connlimit> ]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[IS_TEMPLATE [=] <istemplate> ] ]\n"})}),"\n",(0,a.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"CREATE DATABASE"})," creates a new database."]}),"\n",(0,a.jsxs)(s.p,{children:["To create a database, you must be a superuser or have the special ",(0,a.jsx)(s.code,{children:"CREATEDB"})," privilege. See ",(0,a.jsx)(s.a,{href:"/docs/sql-stmts/create-role",children:(0,a.jsx)(s.code,{children:"CREATE ROLE"})}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["The creator becomes the owner of the new database by default. Superusers can create databases owned by other users by using the ",(0,a.jsx)(s.code,{children:"OWNER"})," clause. They can even create databases owned by users with no special privileges. Non-superusers with ",(0,a.jsx)(s.code,{children:"CREATEDB"})," privilege can only create databases owned by themselves."]}),"\n",(0,a.jsxs)(s.p,{children:["By default, the new database will be created by cloning the standard system database ",(0,a.jsx)(s.code,{children:"template1"}),". A different template can be specified by writing ",(0,a.jsx)(s.code,{children:"TEMPLATE name"}),". In particular, by writing ",(0,a.jsx)(s.code,{children:"TEMPLATE template0"}),", you can create a clean database containing only the standard objects predefined by Cloudberry Database. This is useful if you wish to avoid copying any installation-local objects that may have been added to ",(0,a.jsx)(s.code,{children:"template1"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:(0,a.jsx)(s.code,{children:"name"})})}),"\n",(0,a.jsx)(s.p,{children:"The name of a database to create."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:(0,a.jsx)(s.code,{children:"user_name"})})}),"\n",(0,a.jsxs)(s.p,{children:["The name of the database user who will own the new database, or ",(0,a.jsx)(s.code,{children:"DEFAULT"})," to use the default owner (the user running the command). To create a database owned by another role, you must be a direct or indirect member of that role, or be a superuser."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:(0,a.jsx)(s.code,{children:"template"})})}),"\n",(0,a.jsxs)(s.p,{children:["The name of the template from which to create the new database, or ",(0,a.jsx)(s.code,{children:"DEFAULT"})," to use the default template (template1)."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:(0,a.jsx)(s.code,{children:"tablespace_name"})})}),"\n",(0,a.jsxs)(s.p,{children:["The name of the tablespace that will be associated with the new database, or ",(0,a.jsx)(s.code,{children:"DEFAULT"})," to use the template database's tablespace. This tablespace will be the default tablespace used for objects created in this database. See ",(0,a.jsx)(s.a,{href:"/docs/sql-stmts/create-tablespace",children:(0,a.jsx)(s.code,{children:"CREATE TABLESPACE"})})," for more information."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:(0,a.jsx)(s.code,{children:"allowconn"})})}),"\n",(0,a.jsxs)(s.p,{children:["If ",(0,a.jsx)(s.code,{children:"false"}),", then no one can connect to this database. The default is ",(0,a.jsx)(s.code,{children:"true"}),", allowing connections (except as restricted by other mechanisms, such as ",(0,a.jsx)(s.code,{children:"GRANT/REVOKE CONNECT"}),")."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:(0,a.jsx)(s.code,{children:"connlimit"})})}),"\n",(0,a.jsxs)(s.p,{children:["The maximum number of concurrent connections allowed to this database on the coordinator. The default is ",(0,a.jsx)(s.code,{children:"-1"}),", no limit. Cloudberry Database superusers are exempt from this limit."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:(0,a.jsx)(s.code,{children:"istemplate"})})}),"\n",(0,a.jsxs)(s.p,{children:["If ",(0,a.jsx)(s.code,{children:"true"}),", then this database can be cloned by any user with ",(0,a.jsx)(s.code,{children:"CREATEDB"})," privileges; if ",(0,a.jsx)(s.code,{children:"false"})," (the default), then only superusers or the owner of the database can clone it. Note that template databases cannot be dropped."]}),"\n",(0,a.jsx)(s.p,{children:"Optional parameters can be written in any order, not only the order illustrated above."}),"\n",(0,a.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"CREATE DATABASE"})," cannot be run inside a transaction block."]}),"\n",(0,a.jsx)(s.p,{children:"Errors along the line of \u201ccould not initialize database directory\u201d are most likely related to insufficient permissions on the data directory, a full disk, or other file system problems."}),"\n",(0,a.jsxs)(s.p,{children:["Use ",(0,a.jsx)(s.a,{href:"/docs/sql-stmts/drop-database",children:(0,a.jsx)(s.code,{children:"DROP DATABASE"})})," to remove a database."]}),"\n",(0,a.jsx)(s.p,{children:"The program createdb is a wrapper program around this command, provided for convenience."}),"\n",(0,a.jsxs)(s.p,{children:["Database-level configuration parameters (set via ",(0,a.jsx)(s.a,{href:"/docs/sql-stmts/alter-database",children:(0,a.jsx)(s.code,{children:"ALTER DATABASE"})}),") and database-level permissions (set via ",(0,a.jsx)(s.a,{href:"/docs/sql-stmts/grant",children:"GRANT"}),") are not copied from the template database."]}),"\n",(0,a.jsxs)(s.p,{children:["Although it is possible to copy a database other than ",(0,a.jsx)(s.code,{children:"template1"})," by specifying its name as the template, this is not (yet) intended as a general-purpose ",(0,a.jsx)(s.code,{children:'"COPY DATABASE"'})," facility. The principal limitation is that no other sessions can be connected to the template database while it is being copied. ",(0,a.jsx)(s.code,{children:"CREATE DATABASE"})," will fail if any other connection exists when it starts; otherwise, new connections to the template database are locked out until ",(0,a.jsx)(s.code,{children:"CREATE DATABASE"})," completes."]}),"\n",(0,a.jsxs)(s.p,{children:["The ",(0,a.jsx)(s.code,{children:"CONNECTION LIMIT"})," option is enforced approximately; if two new sessions start at about the same time when just one connection \u201cslot\u201d remains for the database, it is possible that both will fail. Also, the limit is not enforced against superusers or background worker processes."]}),"\n",(0,a.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(s.p,{children:"To create a new database:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sql",children:"CREATE DATABASE mydatabase;\n"})}),"\n",(0,a.jsxs)(s.p,{children:["To create a database ",(0,a.jsx)(s.code,{children:"sales"})," owned by user ",(0,a.jsx)(s.code,{children:"salesapp"})," with a default tablespace of ",(0,a.jsx)(s.code,{children:"salesspace"}),":"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sql",children:"CREATE DATABASE sales OWNER salesapp TABLESPACE salesspace;\n"})}),"\n",(0,a.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,a.jsxs)(s.p,{children:["There is no ",(0,a.jsx)(s.code,{children:"CREATE DATABASE"})," statement in the SQL standard. Databases are equivalent to catalogs, whose creation is implementation-defined."]}),"\n",(0,a.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/docs/sql-stmts/alter-database",children:(0,a.jsx)(s.code,{children:"ALTER DATABASE"})}),", ",(0,a.jsx)(s.a,{href:"/docs/sql-stmts/drop-database",children:(0,a.jsx)(s.code,{children:"DROP DATABASE"})})]})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>o,a:()=>i});var a=t(67294);const n={},r=a.createContext(n);function i(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);