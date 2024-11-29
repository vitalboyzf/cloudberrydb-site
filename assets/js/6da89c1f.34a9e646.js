"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[9529],{92713:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var t=s(85893),i=s(11151);const a={title:"ALTER INDEX"},r="ALTER INDEX",d={id:"sql-stmts/alter-index",title:"ALTER INDEX",description:"Changes the definition of an index.",source:"@site/docs/sql-stmts/alter-index.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/alter-index",permalink:"/docs/sql-stmts/alter-index",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/alter-index.md",tags:[],version:"current",lastUpdatedBy:"Ed Espino",lastUpdatedAt:1732764009,formattedLastUpdatedAt:"Nov 28, 2024",frontMatter:{title:"ALTER INDEX"},sidebar:"docsbars",previous:{title:"ALTER GROUP",permalink:"/docs/sql-stmts/alter-group"},next:{title:"ALTER LANGUAGE",permalink:"/docs/sql-stmts/alter-language"}},o={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"alter-index",children:"ALTER INDEX"}),"\n",(0,t.jsx)(n.p,{children:"Changes the definition of an index."}),"\n",(0,t.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ALTER INDEX [ IF EXISTS ] <name> RENAME TO <new_name>\nALTER INDEX [ IF EXISTS ] <name> SET TABLESPACE <tablespace_name>\nALTER INDEX <name> ATTACH PARTITION <index_name>\nALTER INDEX <name DEPENDS ON EXTENSION <extension_name>\nALTER INDEX [ IF EXISTS ] <name> SET ( <storage_parameter> [= <value>] [, ...] )\nALTER INDEX [ IF EXISTS ] <name> RESET ( <storage_parameter>  [, ...] )\nALTER INDEX [ IF EXISTS ] <name> ALTER [ COLUMN ] <column_number>\n    SET STATISTICS <integer>\nALTER INDEX ALL IN TABLESPACE <name> [ OWNED BY <role_name> [, ... ] ]\n    SET TABLESPACE <new_tablespace> [ NOWAIT ]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ALTER INDEX"})," changes the definition of an existing index. There are several subforms described below. Note that the lock level required may differ for each subform. An ",(0,t.jsx)(n.code,{children:"ACCESS EXCLUSIVE"})," lock is held unless explicitly noted. When multiple subcommands are listed, the lock held will be the strictest one required from any subcommand."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"RENAME"})})}),"\n",(0,t.jsxs)(n.p,{children:["Changes the name of the index.  If the index is associated with a table constraint (either ",(0,t.jsx)(n.code,{children:"UNIQUE"}),", ",(0,t.jsx)(n.code,{children:"PRIMARY KEY"}),", or ",(0,t.jsx)(n.code,{children:"EXCLUDE"}),"), the constraint is renamed as well. There is no effect on the stored data."]}),"\n",(0,t.jsxs)(n.p,{children:["Renaming an index acquires a ",(0,t.jsx)(n.code,{children:"SHARE UPDATE EXCLUSIVE"})," lock."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"SET TABLESPACE"})})}),"\n",(0,t.jsxs)(n.p,{children:["Changes the index's tablespace to the specified tablespace and moves the data file(s) associated with the index to the new tablespace. To change the tablespace of an index, you must own the index and have ",(0,t.jsx)(n.code,{children:"CREATE"})," privilege on the new tablespace. All indexes in the current database in a tablespace can be moved by using the ",(0,t.jsx)(n.code,{children:"ALL IN TABLESPACE"})," form, which will lock all indexes to be moved and then move each one. This form also supports ",(0,t.jsx)(n.code,{children:"OWNED BY"}),", which will only move indexes owned by the roles specified. If the ",(0,t.jsx)(n.code,{children:"NOWAIT"})," option is specified then the command will fail if it is unable to acquire all of the locks required immediately. Note that system catalogs will not be moved by this command, use ",(0,t.jsx)(n.code,{children:"ALTER DATABASE"})," or explicit ",(0,t.jsx)(n.code,{children:"ALTER INDEX"})," invocations instead if desired. See also ",(0,t.jsx)(n.a,{href:"/docs/sql-stmts/create-tablespace",children:"CREATE TABLESPACE"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"ATTACH PARTITION"})})}),"\n",(0,t.jsx)(n.p,{children:"Causes the named index to become attached to the altered index. The named index must be on a partition of the table containing the index being altered, and have an equivalent definition. An attached index cannot be dropped by itself, and will automatically be dropped if its parent index is dropped."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"DEPENDS ON EXTENSION"})})}),"\n",(0,t.jsx)(n.p,{children:"This form marks the index as dependent on the extension, such that if the extension is dropped, the index will automatically be dropped as well."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"SET ( storage_parameter [= value] [, ... ] )"})})}),"\n",(0,t.jsxs)(n.p,{children:["Changes one or more index-method-specific storage parameters for the index. See ",(0,t.jsx)(n.a,{href:"/docs/sql-stmts/create-index",children:"CREATE INDEX"})," for details on the available parameters. Note that the index contents will not be modified immediately by this command; depending on the parameter you might need to rebuild the index with ",(0,t.jsx)(n.a,{href:"/docs/sql-stmts/reindex",children:"REINDEX"})," to get the desired effects."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"RESET ( storage_parameter [, ... ] )"})})}),"\n",(0,t.jsxs)(n.p,{children:["Resets one or more index-method-specific storage parameters for the index to their defaults. As with ",(0,t.jsx)(n.code,{children:"SET"}),", a ",(0,t.jsx)(n.code,{children:"REINDEX"})," may be needed to update the index entirely."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"ALTER [ COLUMN ] column_number SET STATISTICS integer"})})}),"\n",(0,t.jsxs)(n.p,{children:["This form sets the per-column statistics-gathering target for subsequent ",(0,t.jsx)(n.code,{children:"ANALYZE"})," operations, though can be used only on index columns that are defined as an expression. Since expressions lack a unique name, we refer to them using the ordinal number of the index column. The target can be set in the range 0 to 10000; alternatively, set it to ",(0,t.jsx)(n.code,{children:"-1"})," to revert to using the system default statistics target (",(0,t.jsx)(n.code,{children:"default_statistics_target"}),")."]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"IF EXISTS"})})}),"\n",(0,t.jsx)(n.p,{children:"Do not throw an error if the index does not exist. Cloudberry Database issues a notice in this case."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"column_number"})})}),"\n",(0,t.jsx)(n.p,{children:"The ordinal number refers to the ordinal (left-to-right) position of the index column."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"name"})})}),"\n",(0,t.jsx)(n.p,{children:"The name (optionally schema-qualified) of an existing index to alter."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"new_name"})})}),"\n",(0,t.jsx)(n.p,{children:"New name for the index."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"tablespace_name"})})}),"\n",(0,t.jsx)(n.p,{children:"The tablespace to which the index will be moved."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"storage_parameter"})})}),"\n",(0,t.jsx)(n.p,{children:"The name of an index-method-specific storage parameter."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"value"})})}),"\n",(0,t.jsx)(n.p,{children:"The new value for an index-method-specific storage parameter. This might be a number or a word depending on the parameter."}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(n.p,{children:["These operations are also possible using ",(0,t.jsx)(n.a,{href:"/docs/sql-stmts/alter-table",children:"ALTER TABLE"}),". ",(0,t.jsx)(n.code,{children:"ALTER INDEX"})," is in fact just an alias for the forms of ",(0,t.jsx)(n.code,{children:"ALTER TABLE"})," that apply to indexes."]}),"\n",(0,t.jsxs)(n.p,{children:["There was formerly an ",(0,t.jsx)(n.code,{children:"ALTER INDEX OWNER"})," variant, but this is now ignored (with a warning). An index cannot have an owner different from its table's owner. Changing the table's owner automatically changes the index as well."]}),"\n",(0,t.jsx)(n.p,{children:"Changing any part of a system catalog index is not permitted."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"To rename an existing index:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ALTER INDEX distributors RENAME TO suppliers;\n"})}),"\n",(0,t.jsx)(n.p,{children:"To move an index to a different tablespace:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ALTER INDEX distributors SET TABLESPACE fasttablespace;\n"})}),"\n",(0,t.jsx)(n.p,{children:"To change an index's fill factor (assuming that the index method supports it):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ALTER INDEX distributors SET (fillfactor = 75);\nREINDEX INDEX distributors;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Set the statistics-gathering target for an expression index:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX coord_idx ON measured (x, y, (z + t));\nALTER INDEX coord_idx ALTER COLUMN 3 SET STATISTICS 1000;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ALTER INDEX"})," is a Cloudberry Database extension to the SQL standard."]}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/sql-stmts/create-index",children:"CREATE INDEX"}),", ",(0,t.jsx)(n.a,{href:"/docs/sql-stmts/reindex",children:"REINDEX"}),", ",(0,t.jsx)(n.a,{href:"/docs/sql-stmts/alter-table",children:"ALTER TABLE"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>r});var t=s(67294);const i={},a=t.createContext(i);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);