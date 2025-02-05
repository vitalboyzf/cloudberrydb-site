"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[3795],{84200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=n(85893),r=n(11151);const i={title:"CREATE TEXT SEARCH PARSER"},a="CREATE TEXT SEARCH PARSER",c={id:"sql-stmts/create-text-search-parser",title:"CREATE TEXT SEARCH PARSER",description:"Description",source:"@site/docs/sql-stmts/create-text-search-parser.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/create-text-search-parser",permalink:"/docs/sql-stmts/create-text-search-parser",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/create-text-search-parser.md",tags:[],version:"current",lastUpdatedBy:"zhangfei",lastUpdatedAt:1738720921,formattedLastUpdatedAt:"Feb 5, 2025",frontMatter:{title:"CREATE TEXT SEARCH PARSER"},sidebar:"docsbars",previous:{title:"CREATE TEXT SEARCH DICTIONARY",permalink:"/docs/sql-stmts/create-text-search-dictionary"},next:{title:"CREATE TEXT SEARCH TEMPLATE",permalink:"/docs/sql-stmts/create-text-search-template"}},o={},d=[{value:"Description",id:"description",level:2},{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description-1",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"create-text-search-parser",children:"CREATE TEXT SEARCH PARSER"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Defines a new text search parser."}),"\n",(0,s.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE TEXT SEARCH PARSER <name> (\n    START = <start_function> ,\n    GETTOKEN = <gettoken_function> ,\n    END = <end_function> ,\n    LEXTYPES = <lextypes_function>\n    [, HEADLINE = <headline_function> ]\n)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"description-1",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"CREATE TEXT SEARCH PARSER"})," creates a new text search parser. A text search parser defines a method for splitting a text string into tokens and assigning types (categories) to the tokens. A parser is not particularly useful by itself, but must be bound into a text search configuration along with some text search dictionaries to be used for searching."]}),"\n",(0,s.jsx)(t.p,{children:"If a schema name is given then the text search parser is created in the specified schema. Otherwise it is created in the current schema."}),"\n",(0,s.jsxs)(t.p,{children:["You must be a superuser to use ",(0,s.jsx)(t.code,{children:"CREATE TEXT SEARCH PARSER"}),". (This restriction is made because an erroneous text search parser definition could confuse or even crash the server.)"]}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"name"})})}),"\n",(0,s.jsx)(t.p,{children:"The name of the text search parser to be created. The name can be schema-qualified."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"start_function"})})}),"\n",(0,s.jsx)(t.p,{children:"The name of the start function for the parser."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"gettoken_function"})})}),"\n",(0,s.jsx)(t.p,{children:"The name of the get-next-token function for the parser."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"end_function"})})}),"\n",(0,s.jsx)(t.p,{children:"The name of the end function for the parser."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"lextypes_function"})})}),"\n",(0,s.jsx)(t.p,{children:"The name of the lextypes function for the parser (a function that returns information about the set of token types it produces)."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"headline_function"})})}),"\n",(0,s.jsx)(t.p,{children:"The name of the headline function for the parser (a function that summarizes a set of tokens)."}),"\n",(0,s.jsx)(t.p,{children:"The function names can be schema-qualified if necessary. Argument types are not given, since the argument list for each type of function is predetermined. All except the headline function are required."}),"\n",(0,s.jsx)(t.p,{children:"The arguments can appear in any order, not only the one shown above."}),"\n",(0,s.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(t.p,{children:["There is no ",(0,s.jsx)(t.code,{children:"CREATE TEXT SEARCH PARSER"})," statement in the SQL standard."]}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/sql-stmts/alter-text-search-parser",children:"ALTER TEXT SEARCH PARSER"}),", ",(0,s.jsx)(t.a,{href:"/docs/sql-stmts/drop-text-search-parser",children:"DROP TEXT SEARCH PARSER"})]})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var s=n(67294);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);