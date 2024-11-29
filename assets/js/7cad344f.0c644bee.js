"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[5725],{68006:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var t=n(85893),o=n(11151);const l={title:"DELETE"},r="DELETE",i={id:"sql-stmts/delete",title:"DELETE",description:"Deletes rows from a table.",source:"@site/docs/sql-stmts/delete.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/delete",permalink:"/docs/sql-stmts/delete",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/delete.md",tags:[],version:"current",lastUpdatedBy:"Ed Espino",lastUpdatedAt:1732764009,formattedLastUpdatedAt:"Nov 28, 2024",frontMatter:{title:"DELETE"},sidebar:"docsbars",previous:{title:"DECLARE",permalink:"/docs/sql-stmts/declare"},next:{title:"DISCARD",permalink:"/docs/sql-stmts/discard"}},c={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"delete",children:"DELETE"}),"\n",(0,t.jsx)(s.p,{children:"Deletes rows from a table."}),"\n",(0,t.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"[ WITH [ RECURSIVE ] <with_query> [, ...] ]\nDELETE FROM [ONLY] <table_name> [[AS] <alias>]\n\xa0\xa0\xa0\xa0\xa0\xa0[USING <from_item> [, ...] ]\n\xa0\xa0\xa0\xa0\xa0\xa0[WHERE <condition> | WHERE CURRENT OF <cursor_name>]\n      [RETURNING * | <output_expression> [[AS] <output_name>] [, \u2026]]\n"})}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"DELETE"})," deletes rows that satisfy the ",(0,t.jsx)(s.code,{children:"WHERE"})," clause from the specified table. If the ",(0,t.jsx)(s.code,{children:"WHERE"})," clause is absent, the effect is to delete all rows in the table. The result is a valid, but empty table."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Tip:"})," ",(0,t.jsx)(s.a,{href:"/docs/sql-stmts/truncate",children:"TRUNCATE"})," provides a faster mechanism to remove all rows from a table."]}),"\n",(0,t.jsxs)(s.p,{children:["There are two ways to delete rows in a table using information contained in other tables in the database: using sub-selects, or specifying additional tables in the ",(0,t.jsx)(s.code,{children:"USING"})," clause. Which technique is more appropriate depends on the specific circumstances."]}),"\n",(0,t.jsxs)(s.p,{children:["The optional ",(0,t.jsx)(s.code,{children:"RETURNING"})," clause causes ",(0,t.jsx)(s.code,{children:"DELETE"})," to compute and return value(s) based on each row actually deleted. Any expression using the table's columns, and/or columns of other tables mentioned in ",(0,t.jsx)(s.code,{children:"USING"}),", can be computed. The syntax of the ",(0,t.jsx)(s.code,{children:"RETURNING"})," list is identical to that of the output list of ",(0,t.jsx)(s.code,{children:"SELECT"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["You must have the ",(0,t.jsx)(s.code,{children:"DELETE"})," privilege on the table to delete from it, as well as the ",(0,t.jsx)(s.code,{children:"SELECT"})," privilege for any table in the ",(0,t.jsx)(s.code,{children:"USING"})," clause or whose values are read in the condition."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"})," The ",(0,t.jsx)(s.code,{children:"RETURNING"})," clause is not supported when deleting from append-optimized tables."]}),"\n"]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"})," As the default, Cloudberry Database acquires an ",(0,t.jsx)(s.code,{children:"EXCLUSIVE"})," lock on tables for ",(0,t.jsx)(s.code,{children:"DELETE"})," operations on heap tables. When the Global Deadlock Detector is enabled, the lock mode for ",(0,t.jsx)(s.code,{children:"DELETE"})," operations on heap tables is ",(0,t.jsx)(s.code,{children:"ROW EXCLUSIVE"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"with_query"})})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"WITH"})," clause allows you to specify one or more subqueries that can be referenced by name in the ",(0,t.jsx)(s.code,{children:"DELETE"})," query."]}),"\n",(0,t.jsxs)(s.p,{children:["For a ",(0,t.jsx)(s.code,{children:"DELETE"})," command that includes a ",(0,t.jsx)(s.code,{children:"WITH"})," clause, the clause can only contain ",(0,t.jsx)(s.code,{children:"SELECT"})," statements, the ",(0,t.jsx)(s.code,{children:"WITH"})," clause cannot contain a data-modifying command (",(0,t.jsx)(s.code,{children:"INSERT"}),", ",(0,t.jsx)(s.code,{children:"UPDATE"}),", or ",(0,t.jsx)(s.code,{children:"DELETE"}),")."]}),"\n",(0,t.jsxs)(s.p,{children:["See ",(0,t.jsx)(s.a,{href:"/docs/sql-stmts/select",children:"SELECT"})," for details."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"table_name"})})}),"\n",(0,t.jsxs)(s.p,{children:["The name (optionally schema-qualified) of the table to delete rows from. If you specify ",(0,t.jsx)(s.code,{children:"ONLY"})," before the table name, Cloudberry Database deletes matching rows from the named table only. If ",(0,t.jsx)(s.code,{children:"ONLY"})," is not specified, matching rows are also deleted from any tables inheriting from the named table. Optionally, you can specify ",(0,t.jsx)(s.code,{children:"*"})," after the table name to explicitly indicate that descendant tables are included."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"alias"})})}),"\n",(0,t.jsxs)(s.p,{children:["A substitute name for the target table. When an alias is provided, it completely hides the actual name of the table. For example, given ",(0,t.jsx)(s.code,{children:"DELETE FROM foo AS f"}),", the remainder of the ",(0,t.jsx)(s.code,{children:"DELETE"})," statement must refer to this table as ",(0,t.jsx)(s.code,{children:"f"})," not ",(0,t.jsx)(s.code,{children:"foo"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"from_item"})})}),"\n",(0,t.jsxs)(s.p,{children:["A table expression allowing columns from other tables to appear in the ",(0,t.jsx)(s.code,{children:"WHERE"})," condition. This uses the same syntax as the ",(0,t.jsx)(s.code,{children:"FROM"})," clause of a ",(0,t.jsx)(s.a,{href:"/docs/sql-stmts/select",children:"SELECT"})," statement; for example, you can specify an alias for the table name. Do not repeat the target table in the from_item, unless you wish to set up a self-join (in which case it must appear with an alias in the from_item)."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"condition"})})}),"\n",(0,t.jsxs)(s.p,{children:["An expression that returns a value of type ",(0,t.jsx)(s.code,{children:"boolean"}),". Cloudberry Database deletes only those rows for which this expression returns ",(0,t.jsx)(s.code,{children:"true"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"cursor_name"})})}),"\n",(0,t.jsxs)(s.p,{children:["The name of the cursor to use in a ",(0,t.jsx)(s.code,{children:"WHERE CURRENT OF"})," condition. The row to be deleted is the one most recently fetched from this cursor. The cursor must be a non-grouping query on the ",(0,t.jsx)(s.code,{children:"DELETE"}),"'s target table. Note that ",(0,t.jsx)(s.code,{children:"WHERE CURRENT OF"})," cannot be specified together with a Boolean condition. See ",(0,t.jsx)(s.a,{href:"/docs/sql-stmts/declare",children:"DECLARE"})," for more information about using cursors with ",(0,t.jsx)(s.code,{children:"WHERE CURRENT OF"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"DELETE...WHERE CURRENT OF"})," cursor statement can only be run on the server, for example in an interactive psql session or a script. Language extensions such as PL/pgSQL do not have support for updatable cursors."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"output_expression"})})}),"\n",(0,t.jsxs)(s.p,{children:["An expression to be computed and returned by the ",(0,t.jsx)(s.code,{children:"DELETE"})," command after each row is deleted. The expression can use any column names of the table named by table_name or table(s) listed in ",(0,t.jsx)(s.code,{children:"USING"}),". Write ",(0,t.jsx)(s.code,{children:"*"})," to return all columns."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"output_name"})})}),"\n",(0,t.jsx)(s.p,{children:"A name to use for a returned column."}),"\n",(0,t.jsx)(s.h2,{id:"outputs",children:"Outputs"}),"\n",(0,t.jsxs)(s.p,{children:["On successful completion, a ",(0,t.jsx)(s.code,{children:"DELETE"})," command returns a command tag of the form"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"DELETE <count>\n"})}),"\n",(0,t.jsx)(s.p,{children:"The count is the number of rows deleted. If count is 0, no rows were deleted by the query (this is not considered an error)."}),"\n",(0,t.jsxs)(s.p,{children:["If the ",(0,t.jsx)(s.code,{children:"DELETE"})," command contains a ",(0,t.jsx)(s.code,{children:"RETURNING"})," clause, the result will be similar to that of a ",(0,t.jsx)(s.code,{children:"SELECT"})," statement containing the columns and values defined in the ",(0,t.jsx)(s.code,{children:"RETURNING"})," list, computed over the row(s) deleted by the command."]}),"\n",(0,t.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"RETURNING"})," clause is not supported when deleting from append-optimized tables."]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"WHERE CURRENT OF"})," clause is not supported with replicated tables."]}),"\n",(0,t.jsxs)(s.p,{children:["Cloudberry Database lets you reference columns of other tables in the ",(0,t.jsx)(s.code,{children:"WHERE"})," condition by specifying the other tables in the ",(0,t.jsx)(s.code,{children:"USING"})," clause. For example, to delete all films produced by a given producer, one can run:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"DELETE FROM films USING producers\n  WHERE producer_id = producers.id AND producers.name = 'foo';\n"})}),"\n",(0,t.jsxs)(s.p,{children:["What is essentially happening here is a join between ",(0,t.jsx)(s.code,{children:"films"})," and ",(0,t.jsx)(s.code,{children:"producers"}),", with all successfully joined ",(0,t.jsx)(s.code,{children:"films"})," rows being marked for deletion. This syntax is not standard. A more standard way to accomplish this is:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"DELETE FROM films\n  WHERE producer_id IN (SELECT id FROM producers WHERE name = 'foo');\n"})}),"\n",(0,t.jsxs)(s.p,{children:["For a partitioned table, all of the child tables are locked during the ",(0,t.jsx)(s.code,{children:"DELETE"})," operation when the Global Deadlock Detector is not enabled (the default). Only some of the leaf child tables are locked when the Global Deadlock Detector is enabled."]}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.p,{children:"Delete all films but musicals:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"DELETE FROM films WHERE kind <> 'Musical';\n"})}),"\n",(0,t.jsx)(s.p,{children:"Clear the table films:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"DELETE FROM films;\n"})}),"\n",(0,t.jsx)(s.p,{children:"Delete completed tasks, returning full details of the deleted rows:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"DELETE FROM tasks WHERE status = 'DONE' RETURNING *;\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Delete the row of tasks on which the cursor ",(0,t.jsx)(s.code,{children:"c_tasks"})," is currently positioned:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"DELETE FROM tasks WHERE CURRENT OF c_tasks;\n"})}),"\n",(0,t.jsx)(s.p,{children:"Delete using a join:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"DELETE FROM rank USING names WHERE names.id = rank.id AND \nname = 'Hannah';\n"})}),"\n",(0,t.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsxs)(s.p,{children:["This command conforms to the SQL standard, except that the ",(0,t.jsx)(s.code,{children:"USING"})," and ",(0,t.jsx)(s.code,{children:"RETURNING"})," clauses are Cloudberry Database extensions, as is the ability to use ",(0,t.jsx)(s.code,{children:"WITH"})," with ",(0,t.jsx)(s.code,{children:"DELETE"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/sql-stmts/truncate",children:"TRUNCATE"})})]})}function h(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>r});var t=n(67294);const o={},l=t.createContext(o);function r(e){const s=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);