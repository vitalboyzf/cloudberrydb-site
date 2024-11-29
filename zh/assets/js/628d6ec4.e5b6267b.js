"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[8564],{45618:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=n(85893),o=n(11151);const r={title:"DROP CONVERSION"},i="DROP CONVERSION",c={id:"sql-stmts/drop-conversion",title:"DROP CONVERSION",description:"Removes a conversion.",source:"@site/docs/sql-stmts/drop-conversion.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/drop-conversion",permalink:"/zh/docs/sql-stmts/drop-conversion",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/drop-conversion.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1732847277,formattedLastUpdatedAt:"2024\u5e7411\u670829\u65e5",frontMatter:{title:"DROP CONVERSION"},sidebar:"docsbars",previous:{title:"DROP COLLATION",permalink:"/zh/docs/sql-stmts/drop-collation"},next:{title:"DROP DATABASE",permalink:"/zh/docs/sql-stmts/drop-database"}},d={},a=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"drop-conversion",children:"DROP CONVERSION"}),"\n",(0,t.jsx)(s.p,{children:"Removes a conversion."}),"\n",(0,t.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"DROP CONVERSION [IF EXISTS] <name> [CASCADE | RESTRICT]\n"})}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"DROP CONVERSION"})," removes a previously defined conversion. To be able to drop a conversion, you must own the conversion."]}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"IF EXISTS"})})}),"\n",(0,t.jsx)(s.p,{children:"Do not throw an error if the conversion does not exist. A notice is issued in this case."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"name"})})}),"\n",(0,t.jsx)(s.p,{children:"The name of the conversion. The conversion name may be schema-qualified."}),"\n",(0,t.jsxs)(s.p,{children:["CASCADE\n",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"RESTRICT"})})]}),"\n",(0,t.jsx)(s.p,{children:"These keywords have no effect since there are no dependencies on conversions."}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(s.p,{children:["Drop the conversion named ",(0,t.jsx)(s.code,{children:"myname"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"DROP CONVERSION myname;\n"})}),"\n",(0,t.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsxs)(s.p,{children:["There is no ",(0,t.jsx)(s.code,{children:"DROP CONVERSION"})," statement in the SQL standard. The standard has ",(0,t.jsx)(s.code,{children:"CREATE TRANSLATION"})," and ",(0,t.jsx)(s.code,{children:"DROP TRANSLATION"})," statements that are similar to the Cloudberry Database ",(0,t.jsx)(s.code,{children:"CREATE CONVERSION"})," and ",(0,t.jsx)(s.code,{children:"DROP CONVERSION"})," statements."]}),"\n",(0,t.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/alter-conversion",children:"ALTER CONVERSION"}),", ",(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/create-conversion",children:"CREATE CONVERSION"})]})]})}function h(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>i});var t=n(67294);const o={},r=t.createContext(o);function i(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);