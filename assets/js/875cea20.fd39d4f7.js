"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[2817],{52055:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var t=s(85893),r=s(11151);const o={title:"DROP ROUTINE"},i="DROP ROUTINE",d={id:"sql-stmts/drop-routine",title:"DROP ROUTINE",description:"Removes a routine.",source:"@site/docs/sql-stmts/drop-routine.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/drop-routine",permalink:"/docs/sql-stmts/drop-routine",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/drop-routine.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733824616,formattedLastUpdatedAt:"Dec 10, 2024",frontMatter:{title:"DROP ROUTINE"},sidebar:"docsbars",previous:{title:"DROP ROLE",permalink:"/docs/sql-stmts/drop-role"},next:{title:"DROP RULE",permalink:"/docs/sql-stmts/drop-rule"}},l={},a=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"drop-routine",children:"DROP ROUTINE"}),"\n",(0,t.jsx)(n.p,{children:"Removes a routine."}),"\n",(0,t.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DROP ROUTINE [IF EXISTS] name ( [ [argmode] [argname] argtype [, ...] ] )\n    [CASCADE | RESTRICT]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"DROP ROUTINE"})," removes the definition of an existing routine, which can be an aggregate function, a normal function, or a procedure. Refer to ",(0,t.jsx)(n.a,{href:"/docs/sql-stmts/drop-aggregate",children:"DROP AGGREGATE"}),", ",(0,t.jsx)(n.a,{href:"/docs/sql-stmts/drop-function",children:"DROP FUNCTION"}),", and ",(0,t.jsx)(n.a,{href:"/docs/sql-stmts/drop-procedure",children:"DROP PROCEDURE"})," for the description of the parameters, more examples, and further details."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.p,{children:["To drop the routine ",(0,t.jsx)(n.code,{children:"foo"})," for type ",(0,t.jsx)(n.code,{children:"integer"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DROP ROUTINE foo(integer);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This command will work independent of whether ",(0,t.jsx)(n.code,{children:"foo"})," is an aggregate, function, or procedure."]}),"\n",(0,t.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsx)(n.p,{children:"This command conforms to the SQL standard, with these Cloudberry Database extensions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The standard only allows one routine to be dropped per command."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"IF EXISTS"})," option."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The ability to specify argument modes and names."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Aggregate functions are an extension."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/sql-stmts/drop-aggregate",children:"DROP AGGREGATE"}),", ",(0,t.jsx)(n.a,{href:"/docs/sql-stmts/drop-function",children:"DROP FUNCTION"}),", ",(0,t.jsx)(n.a,{href:"/docs/sql-stmts/drop-procedure",children:"DROP PROCEDURE"}),", ",(0,t.jsx)(n.a,{href:"/docs/sql-stmts/alter-routine",children:"ALTER ROUTINE"})]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>i});var t=s(67294);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);