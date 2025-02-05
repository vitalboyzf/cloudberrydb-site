"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[41],{54365:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=t(85893),r=t(11151);const i={title:"DISCARD"},a="DISCARD",c={id:"sql-stmts/discard",title:"DISCARD",description:"Discards the session state.",source:"@site/docs/sql-stmts/discard.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/discard",permalink:"/docs/sql-stmts/discard",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/discard.md",tags:[],version:"current",lastUpdatedBy:"zhangfei",lastUpdatedAt:1738720921,formattedLastUpdatedAt:"Feb 5, 2025",frontMatter:{title:"DISCARD"},sidebar:"docsbars",previous:{title:"DELETE",permalink:"/docs/sql-stmts/delete"},next:{title:"DO",permalink:"/docs/sql-stmts/do"}},l={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Compatibility",id:"compatibility",level:2}];function o(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"discard",children:"DISCARD"}),"\n",(0,n.jsx)(s.p,{children:"Discards the session state."}),"\n",(0,n.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"DISCARD { ALL | PLANS | SEQUENCES | TEMPORARY | TEMP }\n"})}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"DISCARD"})," releases internal resources associated with a database session. This command is useful for partially or fully resetting the session's state. There are several subcommands to release different types of resources; the ",(0,n.jsx)(s.code,{children:"DISCARD ALL"})," variant subsumes all the others, and also resets additional state."]}),"\n",(0,n.jsxs)(s.p,{children:["Cloudberry Database does not support invoking ",(0,n.jsx)(s.code,{children:"DISCARD ALL"})," in a transaction."]}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"PLANS"})})}),"\n",(0,n.jsx)(s.p,{children:"Releases all cached query plans, forcing re-planning to occur the next time the associated prepared statement is used."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"SEQUENCES"})})}),"\n",(0,n.jsxs)(s.p,{children:["Discards all cached sequence-related state, including any preallocated sequence values that have not yet been returned by ",(0,n.jsx)(s.code,{children:"nextval()"}),". (See ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/create-sequence",children:"CREATE SEQUENCE"})," for a description of preallocated sequence values.)"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"TEMPORARY/TEMP"})})}),"\n",(0,n.jsx)(s.p,{children:"Drops all temporary tables created in the current session."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"ALL"})})}),"\n",(0,n.jsx)(s.p,{children:"Releases all temporary resources associated with the current session and resets the session to its initial state. Currently, this has the same effect as executing the following sequence of statements:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"    CLOSE ALL;\n    SET SESSION AUTHORIZATION DEFAULT;\n    RESET ALL;\n    DEALLOCATE ALL;\n    UNLISTEN *;\n    SELECT pg_advisory_unlock_all();\n    DISCARD PLANS;\n    DISCARD SEQUENCES;\n    DISCARD TEMP;\n"})}),"\n",(0,n.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"DISCARD ALL"})," cannot be run inside a transaction block."]}),"\n",(0,n.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"DISCARD"})," is a Cloudberry Database extension."]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>a});var n=t(67294);const r={},i=n.createContext(r);function a(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);