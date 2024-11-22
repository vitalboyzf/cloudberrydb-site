"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[3210],{68404:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var n=s(85893),a=s(11151);const r={title:"EXECUTE"},i="EXECUTE",d={id:"sql-stmts/execute",title:"EXECUTE",description:"Runs a prepared SQL statement.",source:"@site/docs/sql-stmts/execute.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/execute",permalink:"/zh/docs/sql-stmts/execute",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/execute.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1732243913,formattedLastUpdatedAt:"2024\u5e7411\u670822\u65e5",frontMatter:{title:"EXECUTE"},sidebar:"docsbars",previous:{title:"END",permalink:"/zh/docs/sql-stmts/end"},next:{title:"EXPLAIN",permalink:"/zh/docs/sql-stmts/explain"}},o={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"execute",children:"EXECUTE"}),"\n",(0,n.jsx)(t.p,{children:"Runs a prepared SQL statement."}),"\n",(0,n.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"EXECUTE <name> [ (<parameter> [, ...] ) ]\n"})}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"EXECUTE"})," is used to run a previously prepared statement. Since prepared statements only exist for the duration of a session, the prepared statement must have been created by a ",(0,n.jsx)(t.code,{children:"PREPARE"})," statement run earlier in the current session."]}),"\n",(0,n.jsxs)(t.p,{children:["If the ",(0,n.jsx)(t.code,{children:"PREPARE"})," statement that created the statement specified some parameters, a compatible set of parameters must be passed to the ",(0,n.jsx)(t.code,{children:"EXECUTE"})," statement, or else Cloudberry Database raises an error. Because (unlike functions) prepared statements are not overloaded based on the type or number of their parameters, the name of a prepared statement must be unique within a database session."]}),"\n",(0,n.jsxs)(t.p,{children:["For more information on the creation and usage of prepared statements, see ",(0,n.jsx)(t.a,{href:"/zh/docs/sql-stmts/prepare",children:"PREPARE"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"name"})})}),"\n",(0,n.jsx)(t.p,{children:"The name of the prepared statement to run."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"parameter"})})}),"\n",(0,n.jsx)(t.p,{children:"The actual value of a parameter to the prepared statement. This must be an expression yielding a value that is compatible with the data type of this parameter, as was determined when the prepared statement was created."}),"\n",(0,n.jsx)(t.h2,{id:"outputs",children:"Outputs"}),"\n",(0,n.jsxs)(t.p,{children:["The command tag returned by ",(0,n.jsx)(t.code,{children:"EXECUTE"})," is that of the prepared statement, and not ",(0,n.jsx)(t.code,{children:"EXECUTE"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(t.p,{children:["Create a prepared statement for an ",(0,n.jsx)(t.code,{children:"INSERT"})," statement, and then run it:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"PREPARE fooplan (int, text, bool, numeric) AS\n    INSERT INTO foo VALUES($1, $2, $3, $4);\nEXECUTE fooplan(1, 'Hunter Valley', 't', 200.00);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(t.p,{children:["The SQL standard includes an ",(0,n.jsx)(t.code,{children:"EXECUTE"})," statement, but it is only for use in embedded SQL. This version of the ",(0,n.jsx)(t.code,{children:"EXECUTE"})," statement also uses a somewhat different syntax."]}),"\n",(0,n.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/zh/docs/sql-stmts/deallocate",children:"DEALLOCATE"}),", ",(0,n.jsx)(t.a,{href:"/zh/docs/sql-stmts/prepare",children:"PREPARE"})]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>i});var n=s(67294);const a={},r=n.createContext(a);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);