"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[9137],{74627:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=t(85893),r=t(11151);const i={title:"ALTER FUNCTION"},o="ALTER FUNCTION",c={id:"sql-stmts/alter-function",title:"ALTER FUNCTION",description:"Changes the definition of a function.",source:"@site/docs/sql-stmts/alter-function.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/alter-function",permalink:"/zh/docs/sql-stmts/alter-function",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/alter-function.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1732243913,formattedLastUpdatedAt:"2024\u5e7411\u670822\u65e5",frontMatter:{title:"ALTER FUNCTION"},sidebar:"docsbars",previous:{title:"ALTER FOREIGN TABLE",permalink:"/zh/docs/sql-stmts/alter-foreign-table"},next:{title:"ALTER GROUP",permalink:"/zh/docs/sql-stmts/alter-group"}},a={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"alter-function",children:"ALTER FUNCTION"}),"\n",(0,s.jsx)(n.p,{children:"Changes the definition of a function."}),"\n",(0,s.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER FUNCTION <name> [ ( [ [<argmode>] [<argname>] <argtype> [, ...] ] ) ] \n   <action> [, ... ] [RESTRICT]\n\nALTER FUNCTION <name> [ ( [ [<argmode>] [<argname>] <argtype> [, ...] ] ) ]\n   RENAME TO <new_name>\n\nALTER FUNCTION <name> [ ( [ [<argmode>] [<argname>] <argtype> [, ...] ] ) ]\n   OWNER TO { <new_owner> | CURRENT_USER | SESSION_USER }\n\nALTER FUNCTION <name> [ ( [ [<argmode>] [<argname>] <argtype> [, ...] ] ) ]\n   SET SCHEMA <new_schema>\n\nALTER FUNCTION <name> [ ( [ [<argmode>] [<argname>] <argtype> [, ...] ] ) ]\n   DEPENDS ON EXTENSION <extension_name>\n\n-- where <action> is one of:\n\n    { CALLED ON NULL INPUT | RETURNS NULL ON NULL INPUT | STRICT }\n    { IMMUTABLE | STABLE | VOLATILE }\n    [ NOT ] LEAKPROOF\n    { [EXTERNAL] SECURITY INVOKER | [EXTERNAL] SECURITY DEFINER }\n    PARALLEL { UNSAFE | RESTRICTED | SAFE }\n    EXECUTE ON { ANY | COORDINATOR | ALL SEGMENTS | INITPLAN }\n    COST <execution_cost>\n    ROWS <result_rows>\n    SUPPORT <support_function>\n    SET <configuration_parameter> { TO | = } { <value> | DEFAULT }\n    SET <configuration_parameter> FROM CURRENT\n    RESET <configuration_parameter>\n    RESET ALL\n"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ALTER FUNCTION"})," changes the definition of a function."]}),"\n",(0,s.jsxs)(n.p,{children:["You must own the function to use ",(0,s.jsx)(n.code,{children:"ALTER FUNCTION"}),". To change a function's schema, you must also have ",(0,s.jsx)(n.code,{children:"CREATE"})," privilege on the new schema. To alter the owner, you must also be a direct or indirect member of the new owning role, and that role must have ",(0,s.jsx)(n.code,{children:"CREATE"})," privilege on the function's schema. (These restrictions enforce that altering the owner does not do anything you could not do by dropping and recreating the function. However, a superuser can alter ownership of any function anyway.)"]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"name"})})}),"\n",(0,s.jsx)(n.p,{children:"The name (optionally schema-qualified) of an existing function. If no argument list is specified, the name must be unique in its schema."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"argmode"})})}),"\n",(0,s.jsxs)(n.p,{children:["The mode of an argument: either ",(0,s.jsx)(n.code,{children:"IN"}),", ",(0,s.jsx)(n.code,{children:"OUT"}),", ",(0,s.jsx)(n.code,{children:"INOUT"}),", or ",(0,s.jsx)(n.code,{children:"VARIADIC"}),". If omitted, the default is ",(0,s.jsx)(n.code,{children:"IN"}),". Note that ",(0,s.jsx)(n.code,{children:"ALTER FUNCTION"})," does not actually pay any attention to ",(0,s.jsx)(n.code,{children:"OUT"})," arguments, since only the input arguments are needed to determine the function's identity. So it is sufficient to list the ",(0,s.jsx)(n.code,{children:"IN"}),", ",(0,s.jsx)(n.code,{children:"INOUT"}),", and ",(0,s.jsx)(n.code,{children:"VARIADIC"})," arguments."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"argname"})})}),"\n",(0,s.jsxs)(n.p,{children:["The name of an argument. Note that ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/alter-function",children:"ALTER FUNCTION"})," does not actually pay any attention to argument names, since only the argument data types are needed to determine the function's identity."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"argtype"})})}),"\n",(0,s.jsx)(n.p,{children:"The data type(s) of the function's arguments (optionally schema-qualified), if any."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"new_name"})})}),"\n",(0,s.jsx)(n.p,{children:"The new name of the function."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"new_owner"})})}),"\n",(0,s.jsxs)(n.p,{children:["The new owner of the function. Note that if the function is marked ",(0,s.jsx)(n.code,{children:"SECURITY DEFINER"}),", it will subsequently run as the new owner."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"new_schema"})})}),"\n",(0,s.jsx)(n.p,{children:"The new schema for the function."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"extension_name"})})}),"\n",(0,s.jsx)(n.p,{children:"The name of the extension that the function is to depend on."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"CALLED ON NULL INPUT"})}),(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"RETURNS NULL ON NULL INPUT"})}),(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"STRICT"})})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"CALLED ON NULL INPUT"})," changes the function so that it will be invoked when some or all of its arguments are null. ",(0,s.jsx)(n.code,{children:"RETURNS NULL ON NULL INPUT"})," or ",(0,s.jsx)(n.code,{children:"STRICT"})," changes the function so that it is not invoked if any of its arguments are null; instead, a null result is assumed automatically. See ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-function",children:"CREATE FUNCTION"})," for more information."]}),"\n",(0,s.jsxs)(n.p,{children:["IMMUTABLE\nSTABLE\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"VOLATILE"})})]}),"\n",(0,s.jsxs)(n.p,{children:["Change the volatility of the function to the specified setting. See ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-function",children:"CREATE FUNCTION"})," for details."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[ EXTERNAL ] SECURITY INVOKER"})}),(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[ EXTERNAL ] SECURITY DEFINER"})})]}),"\n",(0,s.jsxs)(n.p,{children:["Change whether the function is a security definer or not. The key word ",(0,s.jsx)(n.code,{children:"EXTERNAL"})," is ignored for SQL conformance. See ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-function",children:"CREATE FUNCTION"})," for more information about this capability."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"PARALLEL"})})}),"\n",(0,s.jsxs)(n.p,{children:["Change whether the function is deemed safe for parallelism. See ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-function",children:"CREATE FUNCTION"})," for details."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"LEAKPROOF"})})}),"\n",(0,s.jsxs)(n.p,{children:["Change whether the function is considered leakproof or not. See ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-function",children:"CREATE FUNCTION"})," for more information about this capability."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"EXECUTE ON ANY"})}),(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"EXECUTE ON COORDINATOR"})}),(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"EXECUTE ON ALL SEGMENTS"})}),(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"EXECUTE ON INITPLAN"})})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"EXECUTE ON"})," attributes specify where (coordinator or segment instance) a function runs when it is invoked during the query execution process."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"EXECUTE ON ANY"})," (the default) indicates that the function can be run on the coordinator, or any segment instance, and it returns the same result regardless of where it is run. Cloudberry Database determines where the function runs."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"EXECUTE ON COORDINATOR"})," indicates that the function must run only on the coordinator instance."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"EXECUTE ON ALL SEGMENTS"})," indicates that the function must run on all primary segment instances, but not the coordinator, for each invocation. The overall result of the function is the ",(0,s.jsx)(n.code,{children:"UNION ALL"})," of the results from all segment instances."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"EXECUTE ON INITPLAN"})," indicates that the function contains an SQL command that dispatches queries to the segment instances and requires special processing on the coordinator instance by Cloudberry Database when possible."]}),"\n",(0,s.jsxs)(n.p,{children:["For more information about the ",(0,s.jsx)(n.code,{children:"EXECUTE ON"})," attributes, see ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-function",children:"CREATE FUNCTION"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"COST execution_cost"})})}),"\n",(0,s.jsxs)(n.p,{children:["Change the estimated execution cost of the function. See ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-function",children:"CREATE FUNCTION"})," for more information."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"ROWS result_rows"})})}),"\n",(0,s.jsxs)(n.p,{children:["Change the estimated number of rows returned by a set-returning function. See ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-function",children:"CREATE FUNCTION"})," for more information."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"SUPPORT support_function"})})}),"\n",(0,s.jsx)(n.p,{children:"Set or change the planner support function to use for this function. You must be superuser to use this option."}),"\n",(0,s.jsxs)(n.p,{children:["This option cannot be used to remove the support function altogether, since it must name a new support function. Use ",(0,s.jsx)(n.code,{children:"CREATE OR REPLACE FUNCTION"})," if you require that."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"configuration_parameter"})}),(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"value"})})]}),"\n",(0,s.jsxs)(n.p,{children:["Set or change the value of a configuration parameter when the function is called. If value is ",(0,s.jsx)(n.code,{children:"DEFAULT"})," or, equivalently, ",(0,s.jsx)(n.code,{children:"RESET"})," is used, the function-local setting is removed, and the function runs with the value present in its environment. Use ",(0,s.jsx)(n.code,{children:"RESET ALL"})," to clear all function-local settings. ",(0,s.jsx)(n.code,{children:"SET FROM CURRENT"})," saves the value of the parameter that is current when ",(0,s.jsx)(n.code,{children:"ALTER FUNCTION"})," is run as the value to be applied when the function is entered.\nSee ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/set",children:"SET"})," for more information about allowed parameter names and values."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"RESTRICT"})})}),"\n",(0,s.jsx)(n.p,{children:"Ignored for conformance with the SQL standard."}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(n.p,{children:["Cloudberry Database has limitations on the use of functions defined as ",(0,s.jsx)(n.code,{children:"STABLE"})," or ",(0,s.jsx)(n.code,{children:"VOLATILE"}),". See ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-function",children:"CREATE FUNCTION"})," for more information."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["To rename the function ",(0,s.jsx)(n.code,{children:"sqrt"})," for type ",(0,s.jsx)(n.code,{children:"integer"})," to ",(0,s.jsx)(n.code,{children:"square_root"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER FUNCTION sqrt(integer) RENAME TO square_root;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To change the owner of the function ",(0,s.jsx)(n.code,{children:"sqrt"})," for type ",(0,s.jsx)(n.code,{children:"integer"})," to ",(0,s.jsx)(n.code,{children:"joe"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER FUNCTION sqrt(integer) OWNER TO joe;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To change the schema of the function ",(0,s.jsx)(n.code,{children:"sqrt"})," for type ",(0,s.jsx)(n.code,{children:"integer"})," to ",(0,s.jsx)(n.code,{children:"maths"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER FUNCTION sqrt(integer) SET SCHEMA maths;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To mark the function ",(0,s.jsx)(n.code,{children:"sqrt"})," for type ",(0,s.jsx)(n.code,{children:"integer"})," as being dependent on the extension ",(0,s.jsx)(n.code,{children:"mathlib"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER FUNCTION sqrt(integer) DEPENDS ON EXTENSION mathlib;\n"})}),"\n",(0,s.jsx)(n.p,{children:"To adjust the search path that is automatically set for a function:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER FUNCTION check_password(text) search_path = admin, pg_temp;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To disable automatic setting of ",(0,s.jsx)(n.code,{children:"search_path"})," for a function:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER FUNCTION check_password(text) RESET search_path;\n"})}),"\n",(0,s.jsx)(n.p,{children:"The function will now execute with whatever search path is used by its caller."}),"\n",(0,s.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(n.p,{children:["This statement is partially compatible with the ",(0,s.jsx)(n.code,{children:"ALTER FUNCTION"})," statement in the SQL standard. The standard allows more properties of a function to be modified, but does not provide the ability to rename a function, make a function a security definer, attach configuration parameter values to a function, or change the owner, schema, or volatility of a function. The standard also requires the ",(0,s.jsx)(n.code,{children:"RESTRICT"})," key word, which is optional in Cloudberry Database."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-function",children:"CREATE FUNCTION"}),", ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/drop-function",children:"DROP FUNCTION"}),", ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/alter-procedure",children:"ALTER PROCEDURE"}),", ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/alter-routine",children:"ALTER ROUTINE"})]})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var s=t(67294);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);