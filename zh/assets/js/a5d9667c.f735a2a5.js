"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[5368],{94749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var s=n(85893),i=n(11151);const c={title:"CHECKPOINT"},o="CHECKPOINT",r={id:"sql-stmts/checkpoint",title:"CHECKPOINT",description:"Forces a write-ahead log checkpoint.",source:"@site/docs/sql-stmts/checkpoint.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/checkpoint",permalink:"/zh/docs/sql-stmts/checkpoint",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/checkpoint.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733824616,formattedLastUpdatedAt:"2024\u5e7412\u670810\u65e5",frontMatter:{title:"CHECKPOINT"},sidebar:"docsbars",previous:{title:"CALL",permalink:"/zh/docs/sql-stmts/call"},next:{title:"CLOSE",permalink:"/zh/docs/sql-stmts/close"}},a={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Compatibility",id:"compatibility",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"checkpoint",children:"CHECKPOINT"}),"\n",(0,s.jsx)(t.p,{children:"Forces a write-ahead log checkpoint."}),"\n",(0,s.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CHECKPOINT\n"})}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"A checkpoint is a point in the write-ahead log sequence at which all data files have been updated to reflect the information in the log. All data files will be flushed to disk."}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"CHECKPOINT"})," command forces an immediate checkpoint when the command is issued, without waiting for a regular checkpoint scheduled by the system. ",(0,s.jsx)(t.code,{children:"CHECKPOINT"})," is not intended for use during normal operation."]}),"\n",(0,s.jsxs)(t.p,{children:["If run during recovery, the ",(0,s.jsx)(t.code,{children:"CHECKPOINT"})," command will force a restartpoint rather than writing a new checkpoint."]}),"\n",(0,s.jsxs)(t.p,{children:["Only superusers may call ",(0,s.jsx)(t.code,{children:"CHECKPOINT"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"CHECKPOINT"})," command is a Cloudberry Database extension."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(67294);const i={},c=s.createContext(i);function o(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);