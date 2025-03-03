"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[5958],{81613:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var t=n(85893),a=n(11151);const c={title:"CREATE SCHEMA"},r="CREATE SCHEMA",i={id:"sql-stmts/create-schema",title:"CREATE SCHEMA",description:"Defines a new schema.",source:"@site/docs/sql-stmts/create-schema.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/create-schema",permalink:"/docs/sql-stmts/create-schema",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/create-schema.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1740637488,formattedLastUpdatedAt:"Feb 27, 2025",frontMatter:{title:"CREATE SCHEMA"},sidebar:"docsbars",previous:{title:"CREATE RULE",permalink:"/docs/sql-stmts/create-rule"},next:{title:"CREATE SEQUENCE",permalink:"/docs/sql-stmts/create-sequence"}},o={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"create-schema",children:"CREATE SCHEMA"}),"\n",(0,t.jsx)(s.p,{children:"Defines a new schema."}),"\n",(0,t.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"CREATE SCHEMA <schema_name> [AUTHORIZATION <role_specification>] \n   [<schema_element> [ ... ]]\n\nCREATE SCHEMA AUTHORIZATION <role_specification> [<schema_element> [ ... ]]\n\nCREATE SCHEMA IF NOT EXISTS <schema_name> [ AUTHORIZATION <role_specification> ]\n\nCREATE SCHEMA IF NOT EXISTS AUTHORIZATION <role_specification>\n\n-- where <role_specification> can be:\n\n    <user_name>\n  | CURRENT_USER\n  | SESSION_USER\n"})}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"CREATE SCHEMA"})," enters a new schema into the current database. The schema name must be distinct from the name of any existing schema in the current database."]}),"\n",(0,t.jsxs)(s.p,{children:["A schema is essentially a namespace: it contains named objects (tables, data types, functions, and operators) whose names may duplicate those of other objects existing in other schemas. Named objects are accessed either by qualifying their names with the schema name as a prefix, or by setting a search path that includes the desired schema(s). A ",(0,t.jsx)(s.code,{children:"CREATE"})," command specifying an unqualified object name creates the object in the current schema (the one at the front of the search path, which can be determined with the function ",(0,t.jsx)(s.code,{children:"current_schema()"}),")."]}),"\n",(0,t.jsxs)(s.p,{children:["Optionally, ",(0,t.jsx)(s.code,{children:"CREATE SCHEMA"})," can include subcommands to create objects within the new schema. The subcommands are treated essentially the same as separate commands issued after creating the schema, except that if the ",(0,t.jsx)(s.code,{children:"AUTHORIZATION"})," clause is used, all the created objects will be owned by that role."]}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"schema_name"})})}),"\n",(0,t.jsxs)(s.p,{children:["The name of a schema to be created. If this is omitted, the user_name is used as the schema name. The name cannot begin with ",(0,t.jsx)(s.code,{children:"pg_"}),", as such names are reserved for system catalog schemas."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"user_name"})})}),"\n",(0,t.jsx)(s.p,{children:"The role name of the user who will own the new schema. If omitted, defaults to the user running the command. To create a schema owned by another role, you must be a direct or indirect member of that role, or be a superuser."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"schema_element"})})}),"\n",(0,t.jsxs)(s.p,{children:["An SQL statement defining an object to be created within the schema. Currently, only ",(0,t.jsx)(s.code,{children:"CREATE TABLE"}),", ",(0,t.jsx)(s.code,{children:"CREATE VIEW"}),", ",(0,t.jsx)(s.code,{children:"CREATE INDEX"}),", ",(0,t.jsx)(s.code,{children:"CREATE SEQUENCE"}),", ",(0,t.jsx)(s.code,{children:"CREATE TRIGGER"}),", and ",(0,t.jsx)(s.code,{children:"GRANT"})," are accepted as clauses within ",(0,t.jsx)(s.code,{children:"CREATE SCHEMA"}),". Other kinds of objects may be created in separate commands after the schema is created."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"})," Cloudberry Database does not support triggers."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"IF NOT EXISTS"})})}),"\n",(0,t.jsx)(s.p,{children:"Do nothing (except issuing a notice) if a schema with the same name already exists. schema_element subcommands cannot be included when this option is used."}),"\n",(0,t.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(s.p,{children:["To create a schema, the invoking user must have the ",(0,t.jsx)(s.code,{children:"CREATE"})," privilege for the current database or be a superuser."]}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.p,{children:"Create a schema:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"CREATE SCHEMA myschema;\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Create a schema for role ",(0,t.jsx)(s.code,{children:"joe"}),"; the schema will also be named ",(0,t.jsx)(s.code,{children:"joe"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"CREATE SCHEMA AUTHORIZATION joe;\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Create a schema named ",(0,t.jsx)(s.code,{children:"test"})," that will be owned by user ",(0,t.jsx)(s.code,{children:"joe"}),", unless there already is a schema named ",(0,t.jsx)(s.code,{children:"test"}),". (It does not matter whether ",(0,t.jsx)(s.code,{children:"joe"})," owns the pre-existing schema.)"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"CREATE SCHEMA IF NOT EXISTS test AUTHORIZATION joe;\n"})}),"\n",(0,t.jsx)(s.p,{children:"Create a schema and create a table and view within it:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"CREATE SCHEMA hollywood\n    CREATE TABLE films (title text, release date, awards text[])\n    CREATE VIEW winners AS\n        SELECT title, release FROM films WHERE awards IS NOT NULL;\n"})}),"\n",(0,t.jsx)(s.p,{children:"Notice that the individual subcommands do not end with semicolons."}),"\n",(0,t.jsx)(s.p,{children:"The following is an equivalent way of accomplishing the same result:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"CREATE SCHEMA hollywood;\nCREATE TABLE hollywood.films (title text, release date, awards text[]);\nCREATE VIEW hollywood.winners AS\n    SELECT title, release FROM hollywood.films WHERE awards IS NOT NULL;\n"})}),"\n",(0,t.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsxs)(s.p,{children:["The SQL standard allows a ",(0,t.jsx)(s.code,{children:"DEFAULT CHARACTER SET"})," clause in ",(0,t.jsx)(s.code,{children:"CREATE SCHEMA"}),", as well as more subcommand types than are presently accepted by Cloudberry Database."]}),"\n",(0,t.jsxs)(s.p,{children:["The SQL standard specifies that the subcommands in ",(0,t.jsx)(s.code,{children:"CREATE SCHEMA"})," may appear in any order. The present Cloudberry Database implementation does not handle all cases of forward references in subcommands; it may sometimes be necessary to reorder the subcommands in order to avoid forward references."]}),"\n",(0,t.jsxs)(s.p,{children:["According to the SQL standard, the owner of a schema always owns all objects within it. Cloudberry Database allows schemas to contain objects owned by users other than the schema owner. This can happen only if the schema owner grants the ",(0,t.jsx)(s.code,{children:"CREATE"})," privilege on the schema to someone else, or a superuser chooses to create objects in it."]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"IF NOT EXISTS"})," option is a Cloudberry Database extension."]}),"\n",(0,t.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/sql-stmts/alter-schema",children:"ALTER SCHEMA"}),", ",(0,t.jsx)(s.a,{href:"/docs/sql-stmts/drop-schema",children:"DROP SCHEMA"})]})]})}function h(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>r});var t=n(67294);const a={},c=t.createContext(a);function r(e){const s=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(c.Provider,{value:s},e.children)}}}]);