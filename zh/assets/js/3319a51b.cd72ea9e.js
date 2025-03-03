"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[8378],{86746:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=s(85893),i=s(11151);const r={title:"DROP TEXT SEARCH DICTIONARY"},c="DROP TEXT SEARCH DICTIONARY",a={id:"sql-stmts/drop-text-search-dictionary",title:"DROP TEXT SEARCH DICTIONARY",description:"Removes a text search dictionary.",source:"@site/docs/sql-stmts/drop-text-search-dictionary.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/drop-text-search-dictionary",permalink:"/zh/docs/sql-stmts/drop-text-search-dictionary",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/drop-text-search-dictionary.md",tags:[],version:"current",lastUpdatedBy:"zhangfei",lastUpdatedAt:1740991732,formattedLastUpdatedAt:"2025\u5e743\u67083\u65e5",frontMatter:{title:"DROP TEXT SEARCH DICTIONARY"},sidebar:"docsbars",previous:{title:"DROP TEXT SEARCH CONFIGURATION",permalink:"/zh/docs/sql-stmts/drop-text-search-configuration"},next:{title:"DROP TEXT SEARCH PARSER",permalink:"/zh/docs/sql-stmts/drop-text-search-parser"}},o={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"drop-text-search-dictionary",children:"DROP TEXT SEARCH DICTIONARY"}),"\n",(0,n.jsx)(t.p,{children:"Removes a text search dictionary."}),"\n",(0,n.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"DROP TEXT SEARCH DICTIONARY [ IF EXISTS ] <name> [ CASCADE | RESTRICT ]\n"})}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"DROP TEXT SEARCH DICTIONARY"})," drops an existing text search dictionary. You must be the owner of the dictionary to run this command."]}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"IF EXISTS"})})}),"\n",(0,n.jsx)(t.p,{children:"Do not throw an error if the text search dictionary does not exist. Cloudberry Database issues a notice in this case."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"name"})})}),"\n",(0,n.jsx)(t.p,{children:"The name (optionally schema-qualified) of an existing text search dictionary."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"CASCADE"})})}),"\n",(0,n.jsx)(t.p,{children:"Automatically drop objects that depend on the text search dictionary, and in turn all objects that depend on those objects."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"RESTRICT"})})}),"\n",(0,n.jsx)(t.p,{children:"Refuse to drop the text search dictionary if any objects depend on it. This is the default."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(t.p,{children:["Remove the text search dictionary ",(0,n.jsx)(t.code,{children:"english"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"DROP TEXT SEARCH DICTIONARY english;\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This command will not succeed if there are any existing text search configurations that use the dictionary. Add ",(0,n.jsx)(t.code,{children:"CASCADE"})," to drop such configurations along with the dictionary."]}),"\n",(0,n.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(t.p,{children:["There is no ",(0,n.jsx)(t.code,{children:"CREATE TEXT SEARCH DICTIONARY"})," statement in the SQL standard."]}),"\n",(0,n.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/zh/docs/sql-stmts/alter-text-search-dictionary",children:"ALTER TEXT SEARCH DICTIONARY"}),", ",(0,n.jsx)(t.a,{href:"/zh/docs/sql-stmts/create-text-search-dictionary",children:"CREATE TEXT SEARCH DICTIONARY"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>c});var n=s(67294);const i={},r=n.createContext(i);function c(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);