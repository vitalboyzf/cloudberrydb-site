"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[564],{71332:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(85893),r=t(11151);const o={title:"DROP TRANSFORM"},a="DROP TRANSFORM",i={id:"sql-stmts/drop-transform",title:"DROP TRANSFORM",description:"Removes a transform.",source:"@site/docs/sql-stmts/drop-transform.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/drop-transform",permalink:"/zh/docs/sql-stmts/drop-transform",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/drop-transform.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1733828171,formattedLastUpdatedAt:"2024\u5e7412\u670810\u65e5",frontMatter:{title:"DROP TRANSFORM"},sidebar:"docsbars",previous:{title:"DROP TEXT SEARCH TEMPLATE",permalink:"/zh/docs/sql-stmts/drop-text-search-template"},next:{title:"DROP TRIGGER",permalink:"/zh/docs/sql-stmts/drop-trigger"}},d={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"drop-transform",children:"DROP TRANSFORM"}),"\n",(0,n.jsx)(s.p,{children:"Removes a transform."}),"\n",(0,n.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"DROP TRANSFORM [IF EXISTS] FOR <type_name> LANGUAGE <lang_name> [CASCADE | RESTRICT]\n"})}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"DROP TRANSFORM"})," removes a previously defined transform."]}),"\n",(0,n.jsx)(s.p,{children:"To drop a transform, you must own the type and the language. These are the same privileges that are required to create a transform."}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"IF EXISTS"})})}),"\n",(0,n.jsx)(s.p,{children:"Do not throw an error if the transform does not exist. Cloudberry Database issues a notice in this case."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"type_name"})})}),"\n",(0,n.jsx)(s.p,{children:"The name of the data type of the transform."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"lang_name"})})}),"\n",(0,n.jsx)(s.p,{children:"The name of the language of the transform."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"CASCADE"})})}),"\n",(0,n.jsx)(s.p,{children:"Automatically drop objects that depend on the transform, and in turn all objects that depend on those objects."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"RESTRICT"})})}),"\n",(0,n.jsx)(s.p,{children:"Refuse to drop the transform if any objects depend on it. This is the default."}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(s.p,{children:["To drop the transform for type ",(0,n.jsx)(s.code,{children:"hstore"})," and language ",(0,n.jsx)(s.code,{children:"plpython3u"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"DROP TRANSFORM FOR hstore LANGUAGE plpython3u;\n"})}),"\n",(0,n.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(s.p,{children:["This form of ",(0,n.jsx)(s.code,{children:"DROP TRANSFORM"})," is a Cloudberry Database extension. See ",(0,n.jsx)(s.a,{href:"/zh/docs/sql-stmts/create-transform",children:"CREATE TRANSFORM"})," for details."]}),"\n",(0,n.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/zh/docs/sql-stmts/create-transform",children:"CREATE TRANSFORM"})})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>i,a:()=>a});var n=t(67294);const r={},o=n.createContext(r);function a(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);