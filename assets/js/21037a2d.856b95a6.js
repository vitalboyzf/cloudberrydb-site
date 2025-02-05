"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[6828],{92826:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=s(85893),i=s(11151);const a={title:"CREATE TEXT SEARCH DICTIONARY"},r="CREATE TEXT SEARCH DICTIONARY",c={id:"sql-stmts/create-text-search-dictionary",title:"CREATE TEXT SEARCH DICTIONARY",description:"Defines a new text search dictionary.",source:"@site/docs/sql-stmts/create-text-search-dictionary.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/create-text-search-dictionary",permalink:"/docs/sql-stmts/create-text-search-dictionary",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/create-text-search-dictionary.md",tags:[],version:"current",lastUpdatedBy:"zhangfei",lastUpdatedAt:1738720921,formattedLastUpdatedAt:"Feb 5, 2025",frontMatter:{title:"CREATE TEXT SEARCH DICTIONARY"},sidebar:"docsbars",previous:{title:"CREATE TEXT SEARCH CONFIGURATION",permalink:"/docs/sql-stmts/create-text-search-configuration"},next:{title:"CREATE TEXT SEARCH PARSER",permalink:"/docs/sql-stmts/create-text-search-parser"}},o={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"create-text-search-dictionary",children:"CREATE TEXT SEARCH DICTIONARY"}),"\n",(0,n.jsx)(t.p,{children:"Defines a new text search dictionary."}),"\n",(0,n.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE TEXT SEARCH DICTIONARY <name> (\n    TEMPLATE = <template>\n    [, <option> = <value> [, ... ]]\n)\n"})}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"CREATE TEXT SEARCH DICTIONARY creates a new text search dictionary. A text search dictionary specifies a way of recognizing interesting or uninteresting words for searching. A dictionary depends on a text search template, which specifies the functions that actually perform the work. Typically the dictionary provides some options that control the detailed behavior of the template's functions."}),"\n",(0,n.jsx)(t.p,{children:"If a schema name is given then the text search dictionary is created in the specified schema. Otherwise it is created in the current schema."}),"\n",(0,n.jsx)(t.p,{children:"The user who defines a text search dictionary becomes its owner."}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"name"})})}),"\n",(0,n.jsx)(t.p,{children:"The name of the text search dictionary to be created. The name can be schema-qualified."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"template"})})}),"\n",(0,n.jsx)(t.p,{children:"The name of the text search template that will define the basic behavior of this dictionary."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"option"})})}),"\n",(0,n.jsx)(t.p,{children:"The name of a template-specific option to be set for this dictionary."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"value"})})}),"\n",(0,n.jsx)(t.p,{children:"The value to use for a template-specific option. If the value is not a simple identifier or number, it must be quoted (but you can always quote it, if you wish)."}),"\n",(0,n.jsx)(t.p,{children:"The options can appear in any order."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.p,{children:"The following example command creates a Snowball-based dictionary with a nonstandard list of stop words."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE TEXT SEARCH DICTIONARY my_russian (\n    template = snowball,\n    language = russian,\n    stopwords = myrussian\n);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(t.p,{children:["There is no ",(0,n.jsx)(t.code,{children:"CREATE TEXT SEARCH DICTIONARY"})," statement in the SQL standard."]}),"\n",(0,n.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/sql-stmts/alter-text-search-dictionary",children:"ALTER TEXT SEARCH DICTIONARY"}),", ",(0,n.jsx)(t.a,{href:"/docs/sql-stmts/drop-text-search-dictionary",children:"DROP TEXT SEARCH DICTIONARY"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>r});var n=s(67294);const i={},a=n.createContext(i);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);