"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[4430],{44997:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(85893),r=t(11151);const o={title:"CREATE PROCEDURE"},i="CREATE PROCEDURE",a={id:"sql-stmts/create-procedure",title:"CREATE PROCEDURE",description:"Defines a new procedure.",source:"@site/docs/sql-stmts/create-procedure.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/create-procedure",permalink:"/zh/docs/sql-stmts/create-procedure",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/create-procedure.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1740637488,formattedLastUpdatedAt:"2025\u5e742\u670827\u65e5",frontMatter:{title:"CREATE PROCEDURE"},sidebar:"docsbars",previous:{title:"CREATE POLICY",permalink:"/zh/docs/sql-stmts/create-policy"},next:{title:"CREATE PROTOCOL",permalink:"/zh/docs/sql-stmts/create-protocol"}},d={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"create-procedure",children:"CREATE PROCEDURE"}),"\n",(0,s.jsx)(n.p,{children:"Defines a new procedure."}),"\n",(0,s.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE [OR REPLACE] PROCEDURE <name>\xa0\xa0\xa0\xa0\n    ( [ [<argmode>] [<argname>] <argtype> [ { DEFAULT | = } <default_expr> ] [, ...] ] )\n\xa0\xa0{ LANGUAGE <lang_name>\n    | TRANSFORM { FOR TYPE <type_name> } [, ... ]\n\xa0\xa0\xa0\xa0| { [ EXTERNAL ] SECURITY INVOKER | [ EXTERNAL ] SECURITY DEFINER }\n\xa0\xa0\xa0\xa0| SET <configuration_parameter> { TO <value> | = <value> | FROM CURRENT }\n    | AS '<definition>'\n\xa0\xa0\xa0\xa0| AS '<obj_file>', '<link_symbol>' \n  } ...\n"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"CREATE PROCEDURE"})," defines a new procedure. ",(0,s.jsx)(n.code,{children:"CREATE OR REPLACE PROCEDURE"})," either creates a new procedure, or replaces an existing definition. To define a procedure, the user must have the ",(0,s.jsx)(n.code,{children:"USAGE"})," privilege on the language."]}),"\n",(0,s.jsx)(n.p,{children:"If a schema name is included, then the procedure is created in the specified schema. Otherwise it is created in the current schema. The name of the new procedure must not match any existing procedure with the same input argument types in the same schema. However, procedures and functions of different argument types may share a name (overloading)."}),"\n",(0,s.jsxs)(n.p,{children:["To update the current definition of an existing procedure, use ",(0,s.jsx)(n.code,{children:"CREATE OR REPLACE PROCEDURE"}),". It is not possible to change the name or argument types of a procedure this way (this would actually create a new, distinct procedure)."]}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"CREATE OR REPLACE PROCEDURE"})," is used to replace an existing procedure, the ownership and permissions of the procedure do not change. All other procedure properties are assigned the values specified or implied in the command. You must own the procedure to replace it (this includes being a member of the owning role)."]}),"\n",(0,s.jsx)(n.p,{children:"The user that creates the procedure becomes the owner of the procedure."}),"\n",(0,s.jsxs)(n.p,{children:["To be able to create a procedure, you must have ",(0,s.jsx)(n.code,{children:"USAGE"})," privilege on the argument types."]}),"\n",(0,s.jsxs)(n.p,{children:["For more information about creating procedures, refer to the ",(0,s.jsx)(n.a,{href:"https://www.postgresql.org/docs/12/xproc.html",children:"User Defined Procedures"})," section of the PostgreSQL documentation."]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"name"})})}),"\n",(0,s.jsx)(n.p,{children:"The name (optionally schema-qualified) of the procedure to create."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"argmode"})})}),"\n",(0,s.jsxs)(n.p,{children:["The mode of an argument: either ",(0,s.jsx)(n.code,{children:"IN"}),", ",(0,s.jsx)(n.code,{children:"INOUT"}),", or ",(0,s.jsx)(n.code,{children:"VARIADIC"}),". If omitted, the default is ",(0,s.jsx)(n.code,{children:"IN"}),". (",(0,s.jsx)(n.code,{children:"OUT"})," arguments are currently not supported for procedures. Use ",(0,s.jsx)(n.code,{children:"INOUT"})," instead.)"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"argname"})})}),"\n",(0,s.jsx)(n.p,{children:"The name of an argument."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"argtype"})})}),"\n",(0,s.jsx)(n.p,{children:"The data type(s) of the procedure's arguments (optionally schema-qualified), if any. The argument types may be base, composite, or domain types, or may reference the type of a table column."}),"\n",(0,s.jsxs)(n.p,{children:["Depending on the implementation language it may also be allowed to specify pseudotypes such as ",(0,s.jsx)(n.code,{children:"cstring"}),". Pseudotypes indicate that the actual argument type is either incompletely specified, or outside the set of ordinary SQL data types."]}),"\n",(0,s.jsxs)(n.p,{children:["The type of a column is referenced by writing ",(0,s.jsx)(n.code,{children:"table_name.column_name%TYPE"}),". Using this feature can sometimes help make a procedure independent of changes to the definition of a table."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"default_expr"})})}),"\n",(0,s.jsx)(n.p,{children:"An expression to be used as the default value if the parameter is not specified. The expression must be coercible to the argument type of the parameter. Each input parameter in the argument list that follows a parameter with a default value must have a default value as well."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"lang_name"})})}),"\n",(0,s.jsxs)(n.p,{children:["The name of the language that the procedure is implemented in. May be ",(0,s.jsx)(n.code,{children:"SQL"}),", ",(0,s.jsx)(n.code,{children:"C"}),", ",(0,s.jsx)(n.code,{children:"internal"}),", or the name of a user-defined procedural language, e.g. ",(0,s.jsx)(n.code,{children:"plpgsql"}),". Enclosing the name in single quotes is deprecated and requires matching case."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"TRANSFORM { FOR TYPE type_name } [, ... ] }"})})}),"\n",(0,s.jsx)(n.p,{children:"Lists which transforms a call to the procedure should apply. Transforms convert between SQL types and language-specific data types. Procedural language implementations usually have hardcoded knowledge of the built-in types, so those don't need to be listed here. If a procedural language implementation does not know how to handle a type and no transform is supplied, it will fall back to a default behavior for converting data types, but this depends on the implementation."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[EXTERNAL] SECURITY INVOKER"})}),(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[EXTERNAL] SECURITY DEFINER"})})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"SECURITY INVOKER"})," (the default) indicates that the procedure is to be run with the privileges of the user that calls it."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"SECURITY DEFINER"})," specifies that the procedure is to be run with the privileges of the user that created it."]}),"\n",(0,s.jsxs)(n.p,{children:["The key word ",(0,s.jsx)(n.code,{children:"EXTERNAL"})," is allowed for SQL conformance, but it is optional since, unlike in SQL, this feature applies to all procedures not just external ones."]}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"SECURITY DEFINER"})," procedure cannot execute transaction control statements (for example, ",(0,s.jsx)(n.code,{children:"COMMIT"})," and ",(0,s.jsx)(n.code,{children:"ROLLBACK"}),", depending on the language)."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"configuration_parameter"})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"value"})})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"SET"})," clause applies a value to a session configuration parameter when the procedure is entered. The configuration parameter is restored to its prior value when the procedure exits. ",(0,s.jsx)(n.code,{children:"SET FROM CURRENT"})," saves the value of the parameter that is current when ",(0,s.jsx)(n.code,{children:"CREATE PROCEDURE"})," is run as the value to be applied when the procedure is entered."]}),"\n",(0,s.jsxs)(n.p,{children:["If a ",(0,s.jsx)(n.code,{children:"SET"})," clause is attached to a procedure, then the effects of a ",(0,s.jsx)(n.code,{children:"SET LOCAL"})," command executed inside the procedure for the same variable are restricted to the procedure: the configuration parameter's prior value is still restored at procedure exit. However, an ordinary ",(0,s.jsx)(n.code,{children:"SET"})," command (without ",(0,s.jsx)(n.code,{children:"LOCAL"}),") overrides the ",(0,s.jsx)(n.code,{children:"SET"})," clause, much as it would do for a previous ",(0,s.jsx)(n.code,{children:"SET LOCAL"})," command: the effects of such a command will persist after procedure exit, unless the current transaction is rolled back."]}),"\n",(0,s.jsxs)(n.p,{children:["If a ",(0,s.jsx)(n.code,{children:"SET"})," clause is attached to a procedure, then that procedure cannot execute transaction control statements (for example, ",(0,s.jsx)(n.code,{children:"COMMIT"})," and ",(0,s.jsx)(n.code,{children:"ROLLBACK"}),", depending on the language)."]}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/set",children:"SET"})," for more information about allowed parameter names and values."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"definition"})})}),"\n",(0,s.jsx)(n.p,{children:"A string constant defining the procedure; the meaning depends on the language. It may be an internal procedure name, the path to an object file, an SQL command, or text in a procedural language."}),"\n",(0,s.jsxs)(n.p,{children:["It is often helpful to use dollar quoting (refer to ",(0,s.jsx)(n.a,{href:"https://www.postgresql.org/docs/12/sql-syntax-lexical.html#SQL-SYNTAX-DOLLAR-QUOTING",children:"Dollar-Quoted String Constants\n"})," in the PostgreSQL documentation) to write the procedure definition string, rather than the normal single quote syntax. Without dollar quoting, any single quotes or backslashes in the procedure definition must be escaped by doubling them."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"obj_file, link_symbol"})})}),"\n",(0,s.jsxs)(n.p,{children:["This form of the ",(0,s.jsx)(n.code,{children:"AS"})," clause is used for dynamically loadable C language procedures when the procedure name in the C language source code is not the same as the name of the SQL procedure. The string obj_file is the name of the file containing the dynamically loadable object, and is interpreted as for the ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/load",children:"LOAD"})," command. The string link_symbol is the name of the procedure in the C language source code. If the link symbol is omitted, it is assumed to be the same as the name of the SQL procedure being defined."]}),"\n",(0,s.jsxs)(n.p,{children:["When repeated ",(0,s.jsx)(n.code,{children:"CREATE PROCEDURE"})," calls refer to the same object file, the file is only loaded once per session. To unload and reload the file (perhaps during development), start a new session."]}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-function",children:"CREATE FUNCTION"})," for more details on function creation that also apply to procedures."]}),"\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/call",children:"CALL"})," to execute a procedure."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE PROCEDURE insert_data(a integer, b integer)\nLANGUAGE SQL\nAS $$\nINSERT INTO tbl VALUES (a);\nINSERT INTO tbl VALUES (b);\n$$;\n\nCALL insert_data(1, 2);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"CREATE PROCEDURE"})," command is defined in the SQL standard. The Cloudberry Database version is similar but not fully compatible. For details see also ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-function",children:"CREATE FUNCTION"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/alter-procedure",children:"ALTER PROCEDURE"}),", ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/drop-procedure",children:"DROP PROCEDURE"}),", ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-function",children:"CREATE FUNCTION"}),", ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/call",children:"CALL"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var s=t(67294);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);