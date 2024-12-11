"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[4306],{28903:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var t=n(85893),a=n(11151);const r={title:"DROP LANGUAGE"},l="DROP LANGUAGE",i={id:"sql-stmts/drop-language",title:"DROP LANGUAGE",description:"Removes a procedural language.",source:"@site/docs/sql-stmts/drop-language.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/drop-language",permalink:"/docs/sql-stmts/drop-language",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/drop-language.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1733903724,formattedLastUpdatedAt:"Dec 11, 2024",frontMatter:{title:"DROP LANGUAGE"},sidebar:"docsbars",previous:{title:"DROP INDEX",permalink:"/docs/sql-stmts/drop-index"},next:{title:"DROP MATERIALIZED VIEW",permalink:"/docs/sql-stmts/drop-materialized-view"}},o={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"drop-language",children:"DROP LANGUAGE"}),"\n",(0,t.jsx)(s.p,{children:"Removes a procedural language."}),"\n",(0,t.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"DROP [PROCEDURAL] LANGUAGE [IF EXISTS] <name> [CASCADE | RESTRICT]\n"})}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"DROP LANGUAGE"})," removes the definition of the previously registered procedural language. You must be a superuser or owner of the language to drop a language."]}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"PROCEDURAL"})})}),"\n",(0,t.jsx)(s.p,{children:"Optional keyword - has no effect."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"IF EXISTS"})})}),"\n",(0,t.jsx)(s.p,{children:"Do not throw an error if the language does not exist. A notice is issued in this case."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"name"})})}),"\n",(0,t.jsx)(s.p,{children:"The name of an existing procedural language. For backward compatibility, the name may be enclosed by single quotes."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"CASCADE"})})}),"\n",(0,t.jsx)(s.p,{children:"Automatically drop objects that depend on the language (such as functions written in that language), and in turn all objects that depend on those objects."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"RESTRICT"})})}),"\n",(0,t.jsx)(s.p,{children:"Refuse to drop the language if any objects depend on it. This is the default."}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(s.p,{children:["Remove the procedural language ",(0,t.jsx)(s.code,{children:"plsample"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"DROP LANGUAGE plsample;\n"})}),"\n",(0,t.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsxs)(s.p,{children:["There is no ",(0,t.jsx)(s.code,{children:"DROP LANGUAGE"})," statement in the SQL standard."]}),"\n",(0,t.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/sql-stmts/alter-language",children:"ALTER LANGUAGE"}),", ",(0,t.jsx)(s.a,{href:"/docs/sql-stmts/create-language",children:"CREATE LANGUAGE"})]})]})}function p(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>l});var t=n(67294);const a={},r=t.createContext(a);function l(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);