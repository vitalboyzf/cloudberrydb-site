"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[9831],{84462:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=t(85893),r=t(11151);const a={title:"CREATE TRANSFORM"},i="CREATE TRANSFORM",o={id:"sql-stmts/create-transform",title:"CREATE TRANSFORM",description:"Defines a new transform",source:"@site/docs/sql-stmts/create-transform.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/create-transform",permalink:"/zh/docs/sql-stmts/create-transform",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/create-transform.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1732847277,formattedLastUpdatedAt:"2024\u5e7411\u670829\u65e5",frontMatter:{title:"CREATE TRANSFORM"},sidebar:"docsbars",previous:{title:"CREATE TEXT SEARCH TEMPLATE",permalink:"/zh/docs/sql-stmts/create-text-search-template"},next:{title:"CREATE TRIGGER",permalink:"/zh/docs/sql-stmts/create-trigger"}},l={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"create-transform",children:"CREATE TRANSFORM"}),"\n",(0,s.jsx)(n.p,{children:"Defines a new transform"}),"\n",(0,s.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE [ OR REPLACE ] TRANSFORM FOR <type_name> LANGUAGE <lang_name>\xa0(\n\xa0\xa0FROM SQL WITH FUNCTION <from_sql_function_name> [ (<argument_type> [, ...]) ],\n\xa0\xa0TO SQL WITH FUNCTION <to_sql_function_name> [ (<argument_type> [, ...]) ]\n);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"CREATE TRANSFORM"})," defines a new transform. ",(0,s.jsx)(n.code,{children:"CREATE OR REPLACE TRANSFORM"})," will either create a new transform, or replace an existing definition."]}),"\n",(0,s.jsxs)(n.p,{children:["A transform specifies how to adapt a data type to a procedural language. For example, when writing a function in PL/Python using the ",(0,s.jsx)(n.code,{children:"hstore"})," type, PL/Python has no prior knowledge how to present ",(0,s.jsx)(n.code,{children:"hstore"})," values in the Python environment. Language implementations usually default to using the text representation, but that is inconvenient when, for example, an associative array or a list would be more appropriate."]}),"\n",(0,s.jsx)(n.p,{children:"A transform specifies two functions:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'A "from SQL" function that converts the type from the SQL environment to the language. This function will be invoked on the arguments of a function written in the language.'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'A "to SQL" function that converts the type from the language to the SQL environment. This function will be invoked on the return value of a function written in the language.'}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"It is not necessary to provide both of these functions. If one is not specified, the language-specific default behavior will be used if necessary. (To prevent a transformation in a certain direction from happening at all, you could also write a transform function that always errors out.)"}),"\n",(0,s.jsxs)(n.p,{children:["To create a transform, you must own and have ",(0,s.jsx)(n.code,{children:"USAGE"})," privilege on the type, have ",(0,s.jsx)(n.code,{children:"USAGE"})," privilege on the language, and own and have ",(0,s.jsx)(n.code,{children:"EXECUTE"})," privilege on the from-SQL and to-SQL functions, if specified."]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"type_name"})})}),"\n",(0,s.jsx)(n.p,{children:"The name of the data type of the transform."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"lang_name"})})}),"\n",(0,s.jsx)(n.p,{children:"The name of the language of the transform."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"from_sql_function_name[(argument_type [, ...])]"})})}),"\n",(0,s.jsxs)(n.p,{children:["The name of the function for converting the type from the SQL environment to the language. It must take a single argument of type ",(0,s.jsx)(n.code,{children:"internal"})," and return type ",(0,s.jsx)(n.code,{children:"internal"}),". The actual argument will be of the type for the transform, and the function should be coded as if it were. (An SQL-level function returning ",(0,s.jsx)(n.code,{children:"internal"})," must declare at least one argument of type ",(0,s.jsx)(n.code,{children:"internal"}),".) The actual return value will be something specific to the language implementation. If no argument list is specified, the function name must be unique in its schema."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"to_sql_function_name[(argument_type [, ...])]"})})}),"\n",(0,s.jsxs)(n.p,{children:["The name of the function for converting the type from the language to the SQL environment. It must take a single argument of type ",(0,s.jsx)(n.code,{children:"internal"})," and return the type that is the type for the transform. The actual argument value will be something specific to the language implementation. If no argument list is specified, the function name must be unique in its schema."]}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/drop-transform",children:"DROP TRANSFORM"})," to remove transforms."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["To create a transform for type ",(0,s.jsx)(n.code,{children:"hstore"})," and language ",(0,s.jsx)(n.code,{children:"plpython3u"}),", first set up the type and the language:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE EXTENSION IF NOT EXISTS hstore;\n\nCREATE EXTENSION plpython3u;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then create the necessary functions:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE FUNCTION hstore_to_plpython(val internal) RETURNS internal\nLANGUAGE C STRICT IMMUTABLE\nAS ...;\n\nCREATE FUNCTION plpython_to_hstore(val internal) RETURNS hstore\nLANGUAGE C STRICT IMMUTABLE\nAS ...;\n"})}),"\n",(0,s.jsx)(n.p,{children:"And finally create the transform to connect them all together:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TRANSFORM FOR hstore LANGUAGE plpython3u (\n    FROM SQL WITH FUNCTION hstore_to_plpython(internal),\n    TO SQL WITH FUNCTION plpython_to_hstore(internal)\n);\n"})}),"\n",(0,s.jsx)(n.p,{children:"In practice, these commands would be wrapped up in an extension."}),"\n",(0,s.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(n.p,{children:["This form of ",(0,s.jsx)(n.code,{children:"CREATE TRANSFORM"})," is a Cloudberry Database extension. There is a ",(0,s.jsx)(n.code,{children:"CREATE TRANSFORM"})," command in the SQL standard, but it is for adapting data types to client languages. That usage is not supported by Cloudberry Database."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-function",children:"CREATE FUNCTION"}),", ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-language",children:"CREATE LANGUAGE"}),", ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-type",children:"CREATE TYPE"}),", ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/drop-transform",children:"DROP TRANSFORM"})]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var s=t(67294);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);