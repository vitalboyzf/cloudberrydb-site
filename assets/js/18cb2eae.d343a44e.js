"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[727],{6545:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var n=t(85893),a=t(11151);const i={title:"RELEASE SAVEPOINT"},o="RELEASE SAVEPOINT",r={id:"sql-stmts/release-savepoint",title:"RELEASE SAVEPOINT",description:"Destroys a previously defined savepoint.",source:"@site/docs/sql-stmts/release-savepoint.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/release-savepoint",permalink:"/docs/sql-stmts/release-savepoint",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/release-savepoint.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1736835446,formattedLastUpdatedAt:"Jan 14, 2025",frontMatter:{title:"RELEASE SAVEPOINT"},sidebar:"docsbars",previous:{title:"REINDEX",permalink:"/docs/sql-stmts/reindex"},next:{title:"RESET",permalink:"/docs/sql-stmts/reset"}},l={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"release-savepoint",children:"RELEASE SAVEPOINT"}),"\n",(0,n.jsx)(s.p,{children:"Destroys a previously defined savepoint."}),"\n",(0,n.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"RELEASE [SAVEPOINT] <savepoint_name>\n"})}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"RELEASE SAVEPOINT"})," destroys a savepoint previously defined in the current transaction."]}),"\n",(0,n.jsxs)(s.p,{children:["Destroying a savepoint makes it unavailable as a rollback point, but it has no other user visible behavior. It does not undo the effects of commands run after the savepoint was established. (To do that, see ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/rollback-to-savepoint",children:"ROLLBACK TO SAVEPOINT"}),".) Destroying a savepoint when it is no longer needed may allow the system to reclaim some resources earlier than transaction end."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"RELEASE SAVEPOINT"})," also destroys all savepoints that were established ",(0,n.jsx)(s.em,{children:"after"})," the named savepoint was established."]}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"savepoint_name"})})}),"\n",(0,n.jsx)(s.p,{children:"The name of the savepoint to destroy."}),"\n",(0,n.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(s.p,{children:"Specifying a savepoint name that was not previously defined is an error."}),"\n",(0,n.jsx)(s.p,{children:"It is not possible to release a savepoint when the transaction is in an aborted state."}),"\n",(0,n.jsx)(s.p,{children:"If multiple savepoints have the same name, Cloudberry Database releases only the most recently defined unreleased savepoint. Repeated commands release progressively older savepoints."}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.p,{children:"To establish and later destroy a savepoint:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"BEGIN;\n    INSERT INTO table1 VALUES (3);\n    SAVEPOINT my_savepoint;\n    INSERT INTO table1 VALUES (4);\n    RELEASE SAVEPOINT my_savepoint;\nCOMMIT;\n"})}),"\n",(0,n.jsx)(s.p,{children:"The above transaction inserts both 3 and 4."}),"\n",(0,n.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(s.p,{children:["This command conforms to the SQL standard. The standard specifies that the key word ",(0,n.jsx)(s.code,{children:"SAVEPOINT"})," is mandatory, but Cloudberry Database allows it to be omitted."]}),"\n",(0,n.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/sql-stmts/begin",children:"BEGIN"}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/commit",children:"COMMIT"}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/rollback",children:"ROLLBACK"}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/rollback-to-savepoint",children:"ROLLBACK TO SAVEPOINT"}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/savepoint",children:"SAVEPOINT"})]})]})}function p(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>r,a:()=>o});var n=t(67294);const a={},i=n.createContext(a);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);