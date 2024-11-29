"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[2451],{56367:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=n(85893),i=n(11151);const r={title:"IMPORT FOREIGN SCHEMA"},o="IMPORT FOREIGN SCHEMA",a={id:"sql-stmts/import-foreign-schema",title:"IMPORT FOREIGN SCHEMA",description:"Imports table definitions from a foreign server.",source:"@site/docs/sql-stmts/import-foreign-schema.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/import-foreign-schema",permalink:"/docs/sql-stmts/import-foreign-schema",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/import-foreign-schema.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1732847277,formattedLastUpdatedAt:"Nov 29, 2024",frontMatter:{title:"IMPORT FOREIGN SCHEMA"},sidebar:"docsbars",previous:{title:"GRANT",permalink:"/docs/sql-stmts/grant"},next:{title:"INSERT",permalink:"/docs/sql-stmts/insert"}},l={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"import-foreign-schema",children:"IMPORT FOREIGN SCHEMA"}),"\n",(0,t.jsx)(s.p,{children:"Imports table definitions from a foreign server."}),"\n",(0,t.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"IMPORT FOREIGN SCHEMA <remote_schema>\n    [ { LIMIT TO | EXCEPT } ( <table_name> [, ...] ) ]\n    FROM SERVER <server_name>\n    INTO <local_schema>\n    [ OPTIONS ( <option> '<value>' [, ... ] ) ]\n"})}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"IMPORT FOREIGN SCHEMA"})," creates foreign tables that represent tables existing on a foreign server. The new foreign tables will be owned by the user issuing the command and are created with the correct column definitions and options to match the remote tables."]}),"\n",(0,t.jsx)(s.p,{children:"By default, all tables and views existing in a particular schema on the foreign server are imported. Optionally, the list of tables can be limited to a specified subset, or specific tables can be excluded. The new foreign tables are all created in the target schema, which must already exist."}),"\n",(0,t.jsxs)(s.p,{children:["To use ",(0,t.jsx)(s.code,{children:"IMPORT FOREIGN SCHEMA"}),", the user must have ",(0,t.jsx)(s.code,{children:"USAGE"})," privilege on the foreign server, as well as ",(0,t.jsx)(s.code,{children:"CREATE"})," privilege on the target schema."]}),"\n",(0,t.jsx)(s.p,{children:"Support for importing foreign schemas is foreign-data wrapper-specific."}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"remote_schema"})})}),"\n",(0,t.jsx)(s.p,{children:"The remote schema to import from. The specific meaning of a remote schema depends on the foreign data wrapper in use."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"LIMIT TO ( table_name [, ...] )"})})}),"\n",(0,t.jsx)(s.p,{children:"Import only foreign tables matching one of the given table names. Other tables existing in the foreign schema will be ignored."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"EXCEPT ( table_name [, ...] )"})})}),"\n",(0,t.jsx)(s.p,{children:"Exclude specified foreign tables from the import. All tables existing in the foreign schema will be imported except the ones listed here."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"server_name"})})}),"\n",(0,t.jsx)(s.p,{children:"The name of the foreign server from which to import the table definitions."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"local_schema"})})}),"\n",(0,t.jsx)(s.p,{children:"The schema in which Cloudberry Database will create the imported foreign tables."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"OPTIONS ( option 'value' [, ... ] )"})})}),"\n",(0,t.jsx)(s.p,{children:"The options to be used during the import. The allowed option names and values are specific to each foreign-data wrapper."}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(s.p,{children:["Import table definitions from a remote schema ",(0,t.jsx)(s.code,{children:"foreign_films"})," on server ",(0,t.jsx)(s.code,{children:"film_server"}),", creating the foreign tables in local schema ",(0,t.jsx)(s.code,{children:"films"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"IMPORT FOREIGN SCHEMA foreign_films\n    FROM SERVER film_server INTO films;\n"})}),"\n",(0,t.jsxs)(s.p,{children:["As above, but import only the two tables ",(0,t.jsx)(s.code,{children:"actors"})," and ",(0,t.jsx)(s.code,{children:"directors"})," (if they exist):"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"IMPORT FOREIGN SCHEMA foreign_films LIMIT TO (actors, directors)\n    FROM SERVER film_server INTO films;\n"})}),"\n",(0,t.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"IMPORT FOREIGN SCHEMA"})," command conforms to the SQL standard, except that the ",(0,t.jsx)(s.code,{children:"OPTIONS"})," clause is a Cloudberry Database extension."]}),"\n",(0,t.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/sql-stmts/create-foreign-table",children:"CREATE FOREIGN TABLE"}),", ",(0,t.jsx)(s.a,{href:"/docs/sql-stmts/create-server",children:"CREATE SERVER"})]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>o});var t=n(67294);const i={},r=t.createContext(i);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);